import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import MainResultDetails from './MainResultDetails.jsx';
import RecentResults from './RecentResults.jsx';

const App = () => {
  const [mainResult, setMainResult] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('/results')
      .then(response => response.json())
      .then(response => setResults(response));
  }, []);

  return (
    <div>
      <Search setMainResult={setMainResult} />
      {mainResult && <MainResultDetails mainResult={mainResult} /> }
      {results.length > 0 && <RecentResults results={results} setMainResult={setMainResult} />}
    </div>
  );
};

export default App;
