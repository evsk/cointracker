import React, { Fragment, useState, useEffect } from 'react';

const Search = ({ setSearchResult }) => {
  const [txId, setTxId] = useState(0);
  const [query, setQuery] = useState(null);

  const [search, setSearch] = useState(null);
  useEffect(() => {
    if (search) {
      fetch(`/search/${search}`)
        .then(result => result.json())
        .then((result) => {
          setSearchResult(result);
        })
        .catch((err) => {
          console.log(err);
          alert('Invaild Transaction ID');
        });
    }
  }, [search]);

  return (
    <Fragment>
      <span>
        Search: 
      </span>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button type="button" onClick={() => setSearch(query)}>Go</button>
    </Fragment>

  );
};

export default Search;
