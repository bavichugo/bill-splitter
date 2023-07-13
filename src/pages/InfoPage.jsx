const InfoPage = () => {
  return (
    <div className="flex flex-col w-full max-w-3xl gap-4 mx-4">
      <div className="flex flex-col w-full bg-[#283147] p-4 rounded-xl">
        <span className="underline underline-offset-4">How to use</span>
        <span>
          - On the main box, add the expense name, your friends name and their
          items, and finally the total + tax + tips.
        </span>
        <br />
        <span>
          NOTE: it is very important to add the correct TOTAL + TAX + TIPS
          value, which is the value that will be at the bottom of your receipt,
          and not the total of the items without taxes and tips. That will
          ensure that the taxes and tips are added to the total of each member
          at the end of the calculation.
        </span>
      </div>
      <div className="flex flex-col w-full bg-[#283147] p-4 rounded-xl">
        <span className="underline underline-offset-4">
          How is the total per person calculated
        </span>
        <span>
          - The formula to calculate how much each person should pay is
        </span>
        <br />
        <span>((Person Total) / (Meal Total)) * (Total + Tax + Tips)</span>
        <br />
        <span>
          The first part ((Person Total) / (Meal Total)) calculates the
          percentage each person is responsible for paying of the meal. Finally,
          we multiply that percentage by the (Total + Tax + Tips) to get the
          real value each person should pay.
        </span>
      </div>
    </div>
  );
};

export default InfoPage;
