export const isNumber = (str) => {
  return !isNaN(str);
}

export const randomId = () => {
  return crypto.randomUUID();
}

export const createItem = () => {
  return {
    id: randomId(),
    personName: "",
    itemRows: [{ id: randomId(), name: "", price: "" }],
  };
};

export const initialExpenseState = {
  id: randomId(),
  expenseName: "",
  items: [createItem(), createItem()],
  totalWithTaxAndTip: "",
};

export const createRowItem = () => {
  return {id: randomId(), name: "", price: ""};
}

export const formatCurrency = (num) => {
  return (Math.round(parseFloat(num) * 100) / 100).toFixed(2);
}