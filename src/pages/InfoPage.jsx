const InfoPage = () => {
  return (
    <div className="flex flex-col w-full max-w-3xl gap-4 mx-4">
      <div className="flex flex-col w-full bg-[#283147] p-4 rounded-xl">
        <span className="underline underline-offset-4 mb-2">How to use</span>
        <span>
          - On the main box, add the expense name, your friends name and their
          items,and the total + tax + tips. Than, press calculate and the total
          each person should pay will be calculated.
        </span>
        <br />
        <span>
          NOTE: Ensure that you use the total amount with tax and tips included
          to accurately calculate each member's share, rather than using the
          subtotal without tax and tips. This will ensure that taxes and tips
          are properly accounted for in each member's calculation.
        </span>
      </div>
      <div className="flex flex-col w-full bg-[#283147] p-4 rounded-xl">
        <span className="underline underline-offset-4 mb-2">
          How is the total per person calculated
        </span>
        <ol>
          <li>
            1. Divide the person's total by the meal total to determine their
            percentage of responsibility: (Person Total) / (Meal Total).
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
