export const isNumber = (str) => {
  return !isNaN(str);
};

export const randomId = () => {
  return crypto.randomUUID();
};

export const createItem = () => {
  return {
    id: randomId(),
    personName: "",
    itemRows: [{ id: randomId(), name: "", price: "" }],
  };
};

export const initialExpenseState = () => {
  return {
    id: randomId(),
    expenseName: "",
    items: [createItem(), createItem()],
    totalWithTaxAndTip: "",
  };
};

export const createRowItem = () => {
  return { id: randomId(), name: "", price: "" };
};

export const formatCurrency = (num) => {
  return parseFloat((Math.round(parseFloat(num) * 100) / 100).toFixed(2));
};

/**
 * Validates the expense fields before proceeding to the summary page
 * @param {*} expense expense which the fields will be validated
 * @returns an object with isValid and message value
 */
export const validateExpense = (expense) => {
  const { expenseName, items, totalWithTaxAndTip } = expense;
  let totalWithoutTaxesAndTips = 0;

  try {
    // Expense name
    if (!expenseName) return new Error("ERROR: Missing expense name");
    
    // Total + Tax + Tip
    if (!totalWithTaxAndTip) return new Error("ERROR: Missing total with tax and tip");
    
    // Person name
    for (const item of items) {
      const { personName } = item;
      if (!personName) return new Error("ERROR: Missing one or more person name");
    }

    // Item name
    for (const item of items) {
      const { itemRows } = item;
      for (const subItem of itemRows) {
        const { name } = subItem;
        if (!name) return new Error("ERROR: Missing one or more menu item name");
      }
    }
    
    // Item price
    for (const item of items) {
      const { itemRows } = item;
      for (const subItem of itemRows) {
        const { price } = subItem;
        totalWithoutTaxesAndTips += formatCurrency(price);
        if (!price) return new Error("ERROR: Missing one or more menu item price");
      }
    }

    // totalWithoutTaxesAndTips < totalWithTaxAndTip
    if (totalWithTaxAndTip < totalWithoutTaxesAndTips) return new Error(`ERROR: Total + Tax + Tips is less than the sum of all items: ${formatCurrency(totalWithTaxAndTip)} < ${formatCurrency(totalWithoutTaxesAndTips)}`);

    return {isValid: true, message: "Valid expense"}
  } catch (err) {
    return {isValid: false, message: err.message};
  }
}
