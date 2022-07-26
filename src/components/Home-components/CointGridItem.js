import PropTypes from 'prop-types';
import { getTillTwoDecimal } from '../../helpers/Random';

const CoinGridItem = ({ icon, name, price }) => (
  <div id={name}>
    <img src={icon} alt={name} />
    <div id="grid-data">
      <h2>{name}</h2>
      <p>{ getTillTwoDecimal(price) }</p>
    </div>
  </div>
);

CoinGridItem.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CoinGridItem;
