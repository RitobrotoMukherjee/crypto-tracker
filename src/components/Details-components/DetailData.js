import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RandomId from '../../helpers/Random';
import { fetchCoinDetail } from '../../redux/details/details';
import Loading from '../Loading';
import NoDataFound from '../NoDataFound';
import DataRow from './DataRow';

const DetailData = ({ coinId }) => {
  const dispatch = useDispatch();
  const { loading, coinDetails } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchCoinDetail(coinId));
  }, [dispatch]);
  return (
    <>
      {(!coinDetails.length && !loading) && (<NoDataFound text="No data found for this coin. Please select another coin." />)}

      {loading && (<Loading />)}

      {!loading && coinDetails.map(({ price, exchange, pair }) => (
        <DataRow
          key={`${RandomId()}-${exchange}`}
          price={price}
          exchange={exchange}
          pair={pair}
        />
      ))}
    </>
  );
};

DetailData.propTypes = {
  coinId: PropTypes.string.isRequired,
};

export default DetailData;
