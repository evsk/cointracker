import React, { Fragment } from 'react';

const MainResultDetails = ({ mainResult }) => (
  <div className="resultsContainer">
    <div className="mainTransaction">
      <div>
        Transaction Id:
      </div>
      <div>
        {mainResult.txHash}
      </div>
      <div>
        Block Id:
      </div>
      <div>
        {mainResult.block}
      </div>
    </div>
    <div className="transactionDetails">
      {
        mainResult.inputs.map((transaction, idx) => (
          <Fragment>
            <div className="lineItem">
              <div>
                From Address:
              </div>
              <div>
                {transaction.prev_out.addr}
              </div>
            </div>
            <div className="lineItem">
              <div>
                To Address:
              </div>
              <div>
                {mainResult.outputs[0].addr}
              </div>
            </div>
            <div className="lineItem">
              <div>
                Amount Sent: 
              </div>
              <div>
                {`${transaction.prev_out.value / 100000000} bitcoin`}
              </div>
            </div>
            <div className="lineItem">
              <div>
                Fee: 
              </div>
              <div>
                {`${transaction.prev_out.value - mainResult.outputs[0].value}  bitcoin`}
              </div>
            </div>
          </Fragment>
        ))
      }
    </div>
  </div>
);


export default MainResultDetails;
