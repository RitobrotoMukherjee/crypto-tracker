import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiData, filterCoins } from '../../redux/home/home';
import TopBanner from '../TopBanner';
import logo from '../../assets/logo.png';

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
      dispatch(fetchApiData());
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
    <TopBanner flex="flex-col">
      <div className="overflow-hidden rounded my-3">
        <img className="object-cover w-32 h-32" alt="Crypto Stats" src={logo} />
      </div>
      <div className="search-container">
        <input
          className="w-full md:w-3/4 rounded p-3 text-gray-600"
          type="text"
          value={searchText}
          placeholder="Search Coin"
          onChange={handleFilterCoin}
        />

        <button className="search-button" type="button" onClick={clearSearch}>Clear Search</button>
      </div>
    </TopBanner>
  );
};

export default SearchBar;
