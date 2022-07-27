import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getTillTwoDecimal } from '../../helpers/Random';

const CoinGridItem = ({
  id, icon, name, price,
}) => (
  <Link className="coin-grid-items rounded-sm relative" to={`/details/${id}?name=${name}&price=${price}&icon=${icon}`}>
    <div id={name}>
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
  </Link>
);

CoinGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CoinGridItem;
