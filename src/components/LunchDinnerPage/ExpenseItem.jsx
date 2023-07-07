import { isNumber } from "../../util/utils";
import { createRowItem } from "../../util/utils";

const ExpenseItem = ({ id, personName, itemRows, expense, setExpense }) => {

  const addItemRowHandler = () => {
    setExpense(prevState => {
      const updatedItems = prevState.items.map(item => {
        if (item.id === id) {
          return {...item, itemRows: [...item.itemRows, createRowItem()]}
        }
        return item;
      });
      return {...prevState, items: updatedItems};
    })
  };

  const deletePersonHandler = () => {
    const filteredItems = expense.items.filter(item => item.id !== id);
    setExpense(prevState => ({ ...prevState, items: filteredItems}));
  };

  const onPersonNameChange = (e) => {
    setExpense(prevState => {
      const updatedItems = prevState.items.map(item => {
        if (item.id === id) {
          return {...item, personName: e.target.value};
        }
        return item;
      });
      return {...prevState, items: updatedItems};
    });
  };

  return (
    <div className="flex flex-col gap-4 bg-[#283147] rounded-xl p-4 text-sm sm:text-lg">
      <div className="flex justify-between">
        <input
          value={personName}
          className="bg-transparent focus:outline-none w-full mr-4"
          onChange={onPersonNameChange}
          placeholder="Person name..."
        />
        <button
          onClick={deletePersonHandler}
          className="bg-transparent py-1 px-3 rounded-xl border border-red-700 hover:bg-red-600/20"
        >
          Delete
        </button>
      </div>
      {itemRows.map(item => <ExpenseItemRow {...item} setExpense={setExpense} parentId={id} key={item.id} />)}
      <button
        className="bg-green-600 hover:bg-green-800 max-w-[8rem] w-full mx-auto px-3 rounded-xl"
        onClick={addItemRowHandler}
      >
        +
      </button>
    </div>
  );
};

const ExpenseItemRow = ({ setExpense, parentId, id, name, price }) => {

  const removeItemRowHandler = () => {
    setExpense(prevState => {
      const updatedItems = prevState.items.map(item => {
        if (item.id === parentId) {
          const filteredItemsRow = item.itemRows.filter(ele => ele.id !== id);
          return {...item, itemRows: filteredItemsRow}
        }
        return item;
      });
      return {...prevState, items: updatedItems};
    });
  };

  const onExpenseItemNameChangeHandler = (e) => {
    setExpense(prevState => {
      const updatedItems = prevState.items.map(item => {
        if (item.id === parentId) {
          const updatedItemRows = item.itemRows.map(ele => {
            if (ele.id === id) {
              return {...ele, name: e.target.value};
            }
            return ele;
          });
          return {...item, itemRows: updatedItemRows}
        }
        return item;
      })
      return {...prevState, items: updatedItems}
    })
  };

  const onExpenseItemPriceChangeHandler = (e) => {
    if (!isNumber(e.target.value)) {
      return;
    }

    setExpense(prevState => {
      const updatedItems = prevState.items.map(item => {
        if (item.id === parentId) {
          const updatedItemRows = item.itemRows.map(ele => {
            if (ele.id === id) {
              return {...ele, price: e.target.value};
            }
            return ele;
          })
          return {...item, itemRows: updatedItemRows}
        }
        return item;
      })
      return {...prevState, items: updatedItems};
    })
  }

  return (
    <div className="flex gap-2 max-w-full">
      <input
        value={name}
        type="text"
        className="bg-[#2F3C5E] w-full py-2 px-2 rounded-md focus:outline-none"
        onChange={onExpenseItemNameChangeHandler}
        placeholder="Item name..."
      />
      <div className="flex items-center h-full">
        <input
          value={price}
          placeholder="0.01"
          type="text"
          className="bg-[#2F3C5E] max-w-[8rem] w-full h-full py-2 px-2 rounded-l-md focus:outline-none text-xs sm:text-lg"
          onChange={onExpenseItemPriceChangeHandler}
        />
        <span className="flex items-center bg-[#2F3C5E] h-full rounded-r-md pr-2">
          $
        </span>
      </div>
      <button
        className="bg-red-600 hover:bg-red-800 px-3 rounded-xl"
        onClick={removeItemRowHandler}
      >
        -
      </button>
    </div>
  );
};

export default ExpenseItem;
