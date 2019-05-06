import React from 'react';

const RecentResults = ({ setMainResult, results }) => {
  const setNextMainResult = (txHash) => {
    for (let i = 0; i < results.length; i += 1) {
      if (results[i].txHash === txHash) {
        setMainResult(results[i]);
        return;
      }
    }
  };

  return (
    <div className="recent-results">
      <h4> Recent Searches</h4>
      {results.length > 0 ? (
        <ul>
          {results.map(search => (
            <button className="transaction" value={search.txHash} onClick={e => setNextMainResult(e.target.value)}>
              {search.txHash}
            </button>
        
          ))}
        </ul>
      ) : (
        <div>
          No recent searches
        </div>
      )}
    </div>
  );
};

export default RecentResults;
