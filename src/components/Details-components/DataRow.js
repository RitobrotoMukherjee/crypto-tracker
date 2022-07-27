import PropTypes from 'prop-types';
import { getTillTwoDecimal } from '../../helpers/Random';

const DataRow = ({ price, exchange, pair }) => (
  <div
    className="flex flex-col xs:flex-row justify-between items-center px-1 sm:px-6 py-3 odd:bg-filterBgEven"
  >
    <div className="flex-[1_1_24%] text-left">
      <h3>{exchange}</h3>
    </div>
    <div className="flex-[1_1_24%] text-center">
      <h3>{pair}</h3>
    </div>
    <div className="flex-[1_1_24%] text-right">
      <h3>{getTillTwoDecimal(price)}</h3>
    </div>
  </div>
);

DataRow.propTypes = {
  price: PropTypes.number.isRequired,
  exchange: PropTypes.string.isRequired,
  pair: PropTypes.string.isRequired,
};

export default DataRow;
