import PropTypes from 'prop-types';
import { getTillTwoDecimal } from '../../helpers/Random';

const CoinGridItem = ({ icon, name, price }) => (
  <div id={name} className="coin-grid-items rounded-sm relative">
    <div className="overflow-hidden rounded my-3">
      <img className="object-cover h-24 w-24" src={icon} alt={name} />
    </div>
    <div id="grid-data" className="flex flex-col w-full items-center">
      <h2>{name}</h2>
      <p>{ getTillTwoDecimal(price) }</p>
    </div>
    <div className="absolute top-1 right-3">
      <i className="far fa-arrow-circle-right" />
    </div>
  </div>
);

CoinGridItem.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CoinGridItem;
