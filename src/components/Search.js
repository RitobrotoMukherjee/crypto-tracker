import { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.warn('perform dispatch');
  }, [searchText]);

  const handleFilterCoin = ({ target }) => {
    const { value } = target;
    setSearchText(value);
  };

  return (
    <div id="search-bar">
      <input
        type="text"
        value={searchText}
        placeholder="Search Coin"
        onChange={handleFilterCoin}
      />
    </div>
  );
};

export default SearchBar;
