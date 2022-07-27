import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoDataFound from './NoDataFound';
import Loading from './Loading';
import SearchBar from './Home-components/SearchBar';
import RandomId from '../helpers/Random';
import CoinGridItem from './Home-components/CointGridItem';
import { fetchApiData } from '../redux/home/home';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, coinData } = useSelector((state) => state.home);

  useEffect(() => {
    if (coinData.length === 0) {
      dispatch(fetchApiData());
    }
  }, [dispatch]);
  return (
    <div id="Home-holder">
      <SearchBar />
      <div id="List" className="h-full">
        <h1 className="font-title uppercase pl-5 bg-titleBar">Stats by coins</h1>
        {(!coinData.length && !loading) && (<NoDataFound text="Clear Search, To View All Data" />)}

        {loading && (<Loading />)}

        <div id="coin-grid" className="coin-grid">

          {!loading && coinData.map(({
            id, icon, name, price,
          }) => (
            <CoinGridItem
              key={RandomId()}
              id={id}
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
