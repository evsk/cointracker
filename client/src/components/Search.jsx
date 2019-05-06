import React, { Fragment, useState, useEffect } from 'react';

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
    <Fragment>
      <span>
        Search: 
      </span>
      <input type="textarea" value={query} onChange={e => setQuery(e.target.value)} />
      <button type="button" onClick={() => setSearch(query)}>Go</button>
    </Fragment>

  );
};

export default Search;
