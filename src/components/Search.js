/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, filterCoins } from '../redux/home/home';
import INITIAL_DATA from '../API/INITIAL_DATA';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const { coinData } = useSelector((state) => state.home);

  useEffect(() => {
    if (searchText !== '') {
      const filteredData = coinData.filter(({ name }) => {
        const search = searchText.toLowerCase();
        const nameLower = name.toLowerCase();
        return nameLower.includes(search);
      });
      dispatch(filterCoins(filteredData));
    } else {
      dispatch(fetchData(INITIAL_DATA));
    }
  }, [searchText]);

  const handleFilterCoin = ({ target }) => {
    const { value } = target;
    setSearchText(value);
  };

  const clearSearch = () => {
    setSearchText('');
  };

  return (
    <div id="search-bar">
      <input
        type="text"
        value={searchText}
        placeholder="Search Coin"
        onChange={handleFilterCoin}
      />

      <button type="button" onClick={clearSearch}>Clear</button>
    </div>
  );
};

export default SearchBar;
