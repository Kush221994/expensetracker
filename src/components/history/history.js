import React from "react";

const History = ({ tdelete, thistory }) => {
  return (
    <>
      <div className="history">
        <div className="history-heading">History</div>
        {/* <div className="history-item">
          Bill
          <div> Rs. 100</div>
          <button onClick={tdelete}> X</button>
        </div> */}
        <div>
          {thistory.map((item) => {
            return (
              <div key={item.id}>
                <div className="history-item">
                  <div> {item.name}</div>
                  <div>{item.amount}</div>

                  <button onClick={() => tdelete(item.id)}> X</button>
                </div>
                {/* //IF U WANT TO PASS ANYTHING WE HAVE TO START AN AROOW FUNCTION */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default History;
