import ExpenseItem from "./ExpenseItem";
import BillTotalPrice from "./BillTotalPrice";
import { createItem, validateExpense } from "../../util/utils";
import { randomId } from "../../util/utils";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../config/firebase";

const ExpenseMain = ({
  setExpense,
  expense,
  setShowSummary,
  setPreviousExpenses,
}) => {
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

  const onCalculateClickHanler = () => {
    logEvent(analytics, "calculate_meal_button_clicked");
    const { isValid, message } = validateExpense(expense);
    if (!isValid) {
      alert(message);
      return;
    }
    logEvent(analytics, "calculate_meal_button_clicked_worked");
    setShowSummary(true);
    let expenseStorage = localStorage.getItem("expenses");
    if (!expenseStorage) {
      localStorage.setItem("expenses", JSON.stringify([expense]));
      setPreviousExpenses([expense]);
      return;
    }
    localStorage.removeItem("expenses");
    expenseStorage = JSON.parse(expenseStorage);
    expenseStorage.push(expense);
    setPreviousExpenses(expenseStorage);
    localStorage.setItem("expenses", JSON.stringify(expenseStorage));
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
        placeholder="Expense name... (Pizza place!)"
      />
      {totalItems}
      <button
        onClick={addPersonHandler}
        className="sm:max-w-[12rem] max-w-[10rem] w-full mx-auto bg-transparent hover:bg-green-600/20 rounded-xl border border-green-600"
      >
        Add Person
      </button>
      <BillTotalPrice expense={expense} setExpense={setExpense} />
      <button
        onClick={onCalculateClickHanler}
        className="sm:max-w-[12rem] max-w-[10rem] w-full mx-auto bg-green-600 hover:bg-green-600/60 rounded-xl"
      >
        Calculate
      </button>
    </>
  );
};

export default ExpenseMain;
