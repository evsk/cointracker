import React, { Fragment } from 'react';

const MainResultDetails = ({ mainResult }) => (
  <div className="results-container">
    <h4>Transaction Details </h4>
    <div className="main-transaction">
      <h5>Overview</h5>
      {mainResult.txName && (
        <div className="line-item">
          <div className="overview">
            Transaction Name:
          </div>
          <div>
            {mainResult.txName}
          </div>
        </div>
      )}
      <div className="line-item">
        <div className="overview">
          Transaction Hash:
        </div>
        <div>
          {mainResult.txHash}
        </div>
      </div>
      <div className="line-item">
        <div className="overview">
          Block ID:
        </div>
        <div>
          {mainResult.block}
        </div>
      </div>
    </div>
    <div className="transaction-details">
      <h5>Inputs</h5>
      {mainResult.inputs.map(transaction => (
        <div key={transaction.prev_out.tx_index} className="line-item">
          <div className="line-item-details">
            <div>
              Address:
            </div>
            <div>
              {transaction.prev_out.addr}
            </div>
          </div>
          <div className="line-item-details">
            <div>
              Amount Sent:
            </div>
            <div>
              {`${transaction.prev_out.value / 100000000} bitcoin`}
            </div>
          </div>
        </div>
      ))}
      <h5>Outputs</h5>
      {mainResult.outputs.map(transaction => (
        <div key={transaction.n} className="line-item">
          <div className="line-item-details">
            <div>
              Address:
            </div>
            <div>
              {transaction.addr ? transaction.addr : 'No output address'}
            </div>
          </div>
          <div className="line-item-details">
            <div>
              Amount Received:
            </div>
            <div>
              {transaction.value ? `${transaction.value / 100000000} bitcoin` : 'No output'}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);


export default MainResultDetails;
