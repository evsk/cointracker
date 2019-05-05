import React, { useState } from 'react';
import Search from './Search.jsx';
import SavedResults from './SavedResults.jsx';

const App = () => {
  const [recentSearches, setRecentSearches] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div>
      <Search setSearchResult={result => setSearchResult(result)} />
      <SavedResults />
    </div>
  );
};

export default App;
