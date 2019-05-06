/*eslint-disable*/
import React, {useState, useEffect} from 'react';

const RecentResults = ({ results, setMainResult, fetchResults }) => {
  const [txName, setTxName] = useState('');
  
  const [fullTxName, setFullTxName] = useState(Array(2).fill(null));
  useEffect(() => {
    fetch('/setName', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(fullTxName),
    })
      .then(() => fetchResults())
      .catch(err => console.log(err));
  }, [fullTxName]);

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
      <div className="recent-results-list">
        <div className="recent-results-header">
          <div>Transaction ID</div>
          <div>Transaction Name</div>
        </div>
        <div className="recent-results-body">
          {results.length > 0 &&
            results.map(search => (
              <div className="line-item">
                <button className="transaction" value={search.txHash} onClick={e => setNextMainResult(e.target.value)}>
                  {search.txHash}
                </button>
                {search.txName ? (
                    <button className="transaction" value={search.txHash} onClick={e => setNextMainResult(e.target.value)}>
                    {search.txName}
                    </button>
                  ) : (
                    <div>
                      <input type="text" placeholder="Add Name" value={txName} onChange={e => setTxName(e.target.value)} />
                      <button type="button" value={search.txHash} onClick={(e) => setFullTxName([e.target.value, txName])}>Set Name</button>
                    </div>
                  )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecentResults;
