import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './Search';
import RandomId from '../helpers/Random';
import CoinGridItem from './Home-components/CointGridItem';
import { fetchData } from '../redux/home/home';
import INITIAL_DATA from '../API/INITIAL_DATA';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, coinData } = useSelector((state) => state.home);

  useEffect(() => {
    if (coinData.length === 0) {
      dispatch(fetchData(INITIAL_DATA));
    }
  }, [dispatch]);
  return (
    <div id="Home-holder">
      <SearchBar />
      <div id="List">
        <h1>Stats by coins</h1>
        <div id="coin-grid">
          {loading && (<h2 className="text-green-700">Loading...</h2>)}
          {!loading && coinData.map(({ icon, name, price }) => (
            <CoinGridItem
              key={RandomId()}
              icon={icon}
              name={name}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
