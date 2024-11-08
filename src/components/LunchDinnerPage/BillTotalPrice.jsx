import { isNumber } from "../../util/utils";

const BillTotalPrice = ({ expense, setExpense }) => {
  const onChangeHandler = (e) => {
    if (!isNumber(e.target.value)) {
      return;
    }
    setExpense((prevState) => ({
      ...prevState,
      totalWithTaxAndTip: e.target.value,
    }));
  };

  return (
    <div className="flex justify-between items-center bg-[#283147] rounded-xl p-4 text-sm sm:text-lg text-center">
      <span className="max-w-[50%]">Total + TP</span>
      <div className="flex items-center h-full">
        <input
          value={expense.totalWithTaxAndTip}
          type="string"
          placeholder="0.01"
          className="flex items-center bg-[#2F3C5E] max-w-[6rem] w-full rounded-l-md px-1 py-1 focus:outline-none"
          onChange={onChangeHandler}
        />
        <span className="flex items-center bg-[#2F3C5E] rounded-r-md py-1 pr-2">
          $
        </span>
      </div>
    </div>
  );
};

export default BillTotalPrice;
