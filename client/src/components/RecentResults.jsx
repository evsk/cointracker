import React, { Fragment } from 'react';

const RecentResults = ({ setMainResult, results }) => {

  const setNextMainResult = (txHash) => {
    for (let i = 0; i < results.length; i += 1) {
      if (results[i].txHash === txHash) {
        setMainResult(results[i]);
        return;
      }
    }
  }
  
  return (
    <Fragment>
      <div>
        Recent Searches
      </div>
      {results.length > 0 ? (
        <ul>
          {results.map(search => (
            <li key={search.id}>
              {search.txHash}
              <button type="button" value={search.txHash} onClick={e => setNextMainResult(e.target.value)}>
                View Details
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          No recent searches
        </div>
      )}
    </Fragment>
  );
};

export default RecentResults;
