import React, { useState, useEffect } from 'react';

const Search = ({ setMainResult }) => {
  const [query, setQuery] = useState(null);

  const [search, setSearch] = useState(null);
  useEffect(() => {
    if (search) {
      fetch(`/search/${search}`)
        .then(response => response.json())
        .then(response => setMainResult(response))
        .catch((err) => {
          console.log(err);
          alert('Invaild Transaction ID');
        });
    }
  }, [search]);

  return (
    <div className="search">
      <h4>Search the Bitcoin Blockchain</h4>
      <span className="search-field-title">
        Enter a Transaction Hash:
      </span>
      <input className="search-input" type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button className="search-button" type="button" onClick={() => setSearch(query)}>Go</button>
    </div>

  );
};

export default Search;
