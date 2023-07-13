import { formatCurrency } from "../../util/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const inputStyles =
  "max-w-xs w-full max-h-10 h-10 rounded-xl bg-transparent border border-gray-500 bg-gray-700 text-sm px-2 text-white";
const inputStylesHover = "hover:border-white";

const PreviousExpenses = ({ previousExpenses }) => {
  const filterArr = (ele) => {
    return ele.expenseName.toLowerCase().includes(filter.toLowerCase());
  };

  const [filter, setFilter] = useState("");
  const filteredExpenses = previousExpenses.filter(filterArr);
  const displayFiltered = filteredExpenses.length ? (
    filteredExpenses.map((expense) => (
      <PreviousExpenseItem {...expense} key={expense.id} />
    ))
  ) : (
    <span>⛔ No expense matches filter ⛔</span>
  );

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
      <div className="flex flex-col gap-3">{displayFiltered}</div>
    </>
  );
};

const PreviousExpenseItem = ({ expenseName, totalWithTaxAndTip }) => {
  return (
    <div className="flex justify-between bg-[#283147] rounded-xl p-4">
      <span>{expenseName}</span>
      <span className="bg-[#2F3C5E] max-w-[6rem] w-full rounded-md px-1">
        {`$ ${formatCurrency(totalWithTaxAndTip)}`}
      </span>
    </div>
  );
};

export default PreviousExpenses;
