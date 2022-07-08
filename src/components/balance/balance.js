import React from "react";

const Balance = ({ tamount, tincome, texpense }) => {
  return (
    <>
      <div className="balance">
        <div className="balance-heading">Your Balance:</div>
        <div className="balance-item">Rs.{tamount}</div>
        <div className="balance-type">
          <div className="balance-income">
            Income
            <div>Rs.{tincome}</div>
          </div>
          <div className="balance-expense">
            Expenses
            <div>Rs.{texpense}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
