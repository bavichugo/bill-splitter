import { formatCurrency } from "../../util/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ExpenseSummary from "./ExpenseSummary";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../config/firebase";

const inputStyles =
  "max-w-xs w-full max-h-10 h-10 rounded-xl bg-transparent border border-gray-500 bg-gray-700 text-sm px-2 text-white";
const inputStylesHover = "hover:border-white";

const PreviousExpenses = ({ setPreviousExpenses, previousExpenses }) => {
  const filterArr = (ele) => {
    return ele.expenseName.toLowerCase().includes(filter.toLowerCase());
  };

  const [filter, setFilter] = useState("");
  const filteredExpenses = previousExpenses.filter(filterArr);
  const displayFiltered = filteredExpenses.length ? (
    filteredExpenses.map((expense) => (
      <PreviousExpenseItem
        expense={expense}
        previousExpenses={previousExpenses}
        setPreviousExpenses={setPreviousExpenses}
        key={expense.id}
      />
    ))
  ) : (
    <span>⛔ No expense matches filter ⛔</span>
  );

  if (!previousExpenses.length) return null;

  return (
    <>
      <div className="flex justify-between items-center">
        <span className="sm:text-xl">Previous Expenses</span>
        <div className={`flex items-center ${inputStyles} ${inputStylesHover}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="Filter expenses"
            className="bg-transparent ml-4 h-full w-full focus:outline-none"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-10">{displayFiltered}</div>
    </>
  );
};

const PreviousExpenseItem = ({
  expense,
  previousExpenses,
  setPreviousExpenses,
}) => {
  const [toggleDetails, setToggleDetails] = useState(true);
  const { id, expenseName, totalWithTaxAndTip } = expense;

  const onDeleteHandler = () => {
    const filteredExpenses = previousExpenses.filter((item) => item.id !== id);
    localStorage.removeItem("expenses");
    localStorage.setItem("expenses", JSON.stringify(filteredExpenses));
    setPreviousExpenses(filteredExpenses);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between bg-[#283147] rounded-xl p-4">
        <div>
          <span>{expenseName}</span>
          <button
            type="button"
            onClick={() => {
              logEvent(analytics, "toggle_previous_expense");
              setToggleDetails((s) => !s);
            }}
            className="border border-green-300 hover:bg-green-600/20 w-fit rounded-full px-2 ml-2"
          >
            {!toggleDetails ? "hide" : "show"}
          </button>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="flex items-center h-full">
            <span className="bg-[#2F3C5E] rounded-md py-1 px-1">
              {`$ ${formatCurrency(totalWithTaxAndTip)}`}
            </span>
          </div>
          <button
            onClick={onDeleteHandler}
            className="bg-red-600 hover:bg-red-800 px-3 rounded-xl"
          >
            -
          </button>
        </div>
      </div>
      {!toggleDetails && (
        <div className="flex flex-col gap-4 border border-gray-500 p-4 rounded-xl mt-4">
          <ExpenseSummary expense={expense} />
        </div>
      )}
    </div>
  );
};

export default PreviousExpenses;
