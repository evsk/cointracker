import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import MainResultDetails from './MainResultDetails.jsx';
import RecentResults from './RecentResults.jsx';

const App = () => {
  const [mainResult, setMainResult] = useState(null);
  const [results, setResults] = useState([]);

  const fetchResults = () => {
    fetch('/results')
      .then(response => response.json())
      .then(response => setResults(response))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div>
      <Search setMainResult={setMainResult} fetchResults={fetchResults} />
      {mainResult && <MainResultDetails mainResult={mainResult} />}
      <RecentResults results={results} setMainResult={setMainResult} fetchResults={fetchResults} />
    </div>
  );
};

export default App;
