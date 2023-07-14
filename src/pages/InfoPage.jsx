const InfoPage = () => {
  return (
    <div className="flex flex-col w-full max-w-3xl gap-4 mx-4">
      <div className="flex flex-col w-full bg-[#283147] p-4 rounded-xl">
        <span className="underline underline-offset-4 mb-2">How to use</span>
        <span>
          - On the main box, add the expense name, your friends name and their
          items, and the total + tax + tips of the entire meal. Than, press
          calculate and the total each person should pay will be displayed.
        </span>
      </div>
      <div className="flex flex-col w-full bg-[#283147] p-4 rounded-xl">
        <span className="underline underline-offset-4 mb-2">
          How is the total per person calculated
        </span>
        <ol>
          <li>
            1. Divide the person's total price by the meal's total price to
            determine their percentage of the meal: (Person Total) / (Meal
            Total).
          </li>
          <li>
            2. Multiply the percentage from step 1 by the sum of the total, tax,
            and tips: (Total + Tax + Tips).
          </li>
          <li>3. The result is the amount each person should pay.</li>
        </ol>
      </div>
    </div>
  );
};

export default InfoPage;
