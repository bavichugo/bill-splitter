import { useState } from "react";
import ExpenseSummary from "../components/LunchDinnerPage/ExpenseSummary";
import ExpenseMain from "../components/LunchDinnerPage/ExpenseMain";
import { initialExpenseState } from "../util/utils";


const LunchDinnerPage = () => {
  const [expense, setExpense] = useState(initialExpenseState);
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className="flex flex-col gap-4 border border-gray-500 max-w-3xl w-full m-4 p-4 rounded-xl text-sm sm:text-lg">
      {!showSummary ? <ExpenseMain expense={expense} setExpense={setExpense} setShowSummary={setShowSummary} /> : <ExpenseSummary expense={expense} />}
    </div>
  );
};

export default LunchDinnerPage;
