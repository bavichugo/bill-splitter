import { formatCurrency } from "../../util/utils";

const PreviousExpenses = ({ previousExpenses }) => {
  return (
    <>
      <span className="sm:text-xl">Previous Expenses</span>
      <div className="flex flex-col gap-3">
        {previousExpenses.map((expense) => (
          <PreviousExpenseItem {...expense} key={expense.id} />
        ))}
      </div>
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
