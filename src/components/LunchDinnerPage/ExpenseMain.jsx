import ExpenseItem from "./ExpenseItem";
import BillTotalPrice from "./BillTotalPrice";
import { createItem } from "../../util/utils";
import { randomId } from "../../util/utils";

const ExpenseMain = ({ setExpense, expense, setShowSummary }) => {
  const totalItems = expense?.items?.map((ele) => (
    <ExpenseItem
      setExpense={setExpense}
      expense={expense}
      {...ele}
      key={ele.id}
    />
  ));

  const addPersonHandler = () => {
    setExpense((prevState) => ({
      ...prevState,
      items: [...prevState.items, { ...createItem(), id: randomId() }],
    }));
  };

  return (
    <>
      <input
        value={expense.expenseName}
        type="text"
        className="bg-transparent focus:outline-none"
        onChange={(e) =>
          setExpense((prevState) => ({
            ...prevState,
            expenseName: e.target.value,
          }))
        }
        placeholder="Expense name..."
      />
      {totalItems}
      <button
        onClick={addPersonHandler}
        className="max-w-[15rem] w-full mx-auto bg-transparent hover:bg-green-600/20 rounded-xl border border-green-600"
      >
        Add Person
      </button>
      <BillTotalPrice expense={expense} setExpense={setExpense} />
      <button
        onClick={() => setShowSummary(true)}
        className="sm:max-w-[12rem] max-w-[10rem] w-full mx-auto bg-green-600 hover:bg-green-600/60 rounded-xl"
      >
        Calculate
      </button>
    </>
  );
};

export default ExpenseMain;
