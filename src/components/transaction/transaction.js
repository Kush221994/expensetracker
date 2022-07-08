import React from "react";

const Transaction = ({ name, amount, tname, tamount, tadd }) => {
  return (
    <div className="transaction">
      <h5 className="head">Add New Transaction</h5>
      <div className="form-controls">
        <div className="form-input-controls">
          <label>Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={name}
            onChange={tname}
          />
        </div>
        <div className="form-input-controls">
          <label>Amount (negative-expense, positive-income)</label>

          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={tamount}
          />
        </div>

        <button className="form-button" onClick={tadd}>
          Add Transaction
        </button>
      </div>
    </div>
  );
};

export default Transaction;

// display to balance
// inputs to transactions
// rename the state items to transaction name
