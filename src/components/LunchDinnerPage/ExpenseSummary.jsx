import { useState } from "react";
import { formatCurrency } from "../../util/utils";
import { initialExpenseState } from "../../util/utils";

const ExpenseSummary = ({ expense, setExpense, setShowSummary }) => {
  const { expenseName, items, totalWithTaxAndTip } = expense;

  const totalPriceOfItemsWithoutTaxAndTips = items.reduce((sum, item) => {
    const totalPrice = item.itemRows.reduce(
      (sum, item) => sum + parseFloat(item.price),
      0
    );
    return sum + parseFloat(totalPrice);
  }, 0);

  const itemList = items.map((item) => (
    <Item
      {...item}
      totalPriceOfItemsWithoutTaxAndTips={totalPriceOfItemsWithoutTaxAndTips}
      totalWithTaxAndTip={totalWithTaxAndTip}
      key={item.id}
    />
  ));

  const onNewExpenseClickHandler = () => {
    setExpense(initialExpenseState());
    setShowSummary(false);
  };

  return (
    <>
      <span>{expenseName}</span>
      {itemList}
      <TotalPrice totalWithTaxAndTip={totalWithTaxAndTip} />
      {setExpense && (
        <button
          onClick={onNewExpenseClickHandler}
          className="sm:max-w-[12rem] max-w-[10rem] w-full mx-auto bg-green-600 hover:bg-green-600/60 rounded-xl"
        >
          New expense
        </button>
      )}
    </>
  );
};

const Item = ({
  personName,
  itemRows,
  totalWithTaxAndTip,
  totalPriceOfItemsWithoutTaxAndTips,
}) => {
  const priceForPersonWithoutTaxAndTips = itemRows.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );

  // Calculates the price for each person based on the tax and tips given
  // The formula is:
  // The (total the person paid without taxes and tips) / (the total of everyone without taxes and tips) * the total of everyone plus taxes and tips
  // This formula allows us to get the percentage of the bill a person is resposible for paying and multiplies that percentage against the final value
  // which includes the total + tax + tips
  const priceForPersonWithTaxAndTips =
    (priceForPersonWithoutTaxAndTips / totalPriceOfItemsWithoutTaxAndTips) *
    totalWithTaxAndTip;

  return (
    <div className="flex flex-col gap-2 bg-[#283147] rounded-xl p-4">
      {personName}
      <ItemList itemRows={itemRows} />
      <div className="flex justify-between">
        <span>Total</span>
        <span className="bg-[#2F3C5E] max-w-[6rem] w-full rounded-md px-1">
          {`$ ${formatCurrency(priceForPersonWithoutTaxAndTips)}`}
        </span>
      </div>
      <div className="flex justify-between">
        <span>Total + Tax + Tips</span>
        <span className="bg-[#2F3C5E] max-w-[6rem] w-full rounded-md px-1">
          {`$ ${formatCurrency(priceForPersonWithTaxAndTips)}`}
        </span>
      </div>
    </div>
  );
};

const ItemList = ({ itemRows }) => {
  const [isHidden, setIsHidden] = useState(false);
  const menuItemList = itemRows.map((item, index) => (
    <MenuItem {...item} index={index} key={item.id} />
  ));

  return (
    <div
      className="flex flex-col"
    >
      <div className={`flex ${!isHidden ? "pb-2" : "pb-2"}`}>
        <span>Items</span>
        <button onClick={() => setIsHidden((s) => !s)} className="border border-green-300 hover:bg-green-600/20 w-fit rounded-full px-2 ml-2">
          {!isHidden ? "hide" : "show"}
        </button>
      </div>
      {!isHidden && <div className="flex flex-col gap-2">{menuItemList}</div>}
    </div>
  );
};

const MenuItem = ({ name, price, index }) => {
  return (
    <div className="flex justify-between bg-[#2F3C5E] rounded-md p-2">
      <span>{`${index + 1}. ${name}`}</span>
      <span>{`$ ${formatCurrency(price)}`}</span>
    </div>
  );
};

const TotalPrice = ({ totalWithTaxAndTip }) => {
  return (
    <div className="flex justify-between bg-[#283147] rounded-xl p-4 text-sm sm:text-lg">
      <span>Total + Taxes + Tips</span>
      <span className="bg-[#2F3C5E] max-w-[6rem] w-full rounded-md px-1">
        {`$ ${formatCurrency(totalWithTaxAndTip)}`}
      </span>
    </div>
  );
};

export default ExpenseSummary;
