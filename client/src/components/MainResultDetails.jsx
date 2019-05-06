import React, { Fragment } from 'react';

const MainResultDetails = ({ mainResult }) => (
  <div className="results-container">
    <h4>Transaction Details </h4>
    <div className="main-transaction">
      <div className="line-item">
        <div>
          Transaction Id:
        </div>
        <div>
          {mainResult.txHash}
        </div>
      </div>
      <div className="line-item">
        <div>
          Block Id:
        </div>
        <div>
          {mainResult.block}
        </div>
      </div>
    </div>
    <div className="transaction-details">
      {
        mainResult.inputs.map((transaction, idx) => (
          <Fragment>
            <div className="line-item">
              <div>
                From Address:
              </div>
              <div>
                {transaction.prev_out.addr}
              </div>
            </div>
            <div className="line-item">
              <div>
                To Address:
              </div>
              <div>
                {mainResult.outputs[0].addr}
              </div>
            </div>
            <div className="line-item">
              <div>
                Amount Sent: 
              </div>
              <div>
                {`${transaction.prev_out.value / 100000000} bitcoin`}
              </div>
            </div>
            <div className="line-item">
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
