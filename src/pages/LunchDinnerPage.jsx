import { useEffect, useState } from "react";
import ExpenseSummary from "../components/LunchDinnerPage/ExpenseSummary";
import ExpenseMain from "../components/LunchDinnerPage/ExpenseMain";
import { initialExpenseState } from "../util/utils";
import PreviousExpenses from "../components/LunchDinnerPage/PreviousExpenses";
import { Link } from "react-router-dom";


const LunchDinnerPage = () => {
  const [expense, setExpense] = useState(initialExpenseState());
  const [showSummary, setShowSummary] = useState(false);
  const [previousExpenses, setPreviousExpenses] = useState(null);

  useEffect(() => {
    const storageExpenses = localStorage.getItem("expenses");
    const initialPreviousExpenses = storageExpenses ? JSON.parse(storageExpenses) : null;
    setPreviousExpenses(initialPreviousExpenses);
  }, []);

  return (
    <div className="flex flex-col max-w-3xl w-full m-4 text-sm sm:text-lg gap-6">
      
        <h1 className="text-center m-0">Easily split bills for restaurants, trips, and more with friends, xBillSplit makes budgeting a breeze!</h1>
      
      <div className="flex flex-col gap-4 border border-gray-500 p-4 rounded-xl">
        {!showSummary ? <ExpenseMain expense={expense} setExpense={setExpense} setShowSummary={setShowSummary} setPreviousExpenses={setPreviousExpenses} /> : <ExpenseSummary expense={expense} setExpense={setExpense} setPreviousExpenses={setPreviousExpenses} setShowSummary={setShowSummary} />}
      </div>
      <span>TP = Taxes and Tips</span>
      {previousExpenses && <PreviousExpenses setPreviousExpenses={setPreviousExpenses} previousExpenses={previousExpenses} />}
    </div>
  );
};

export default LunchDinnerPage;
