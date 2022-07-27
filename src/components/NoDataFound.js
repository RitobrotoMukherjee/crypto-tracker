import PropTypes from 'prop-types';

const NoDataFound = ({ text }) => (
  <div className="flex flex-col items-center w-full h-screen">
    <h2 className="text-2xl font-bold">No Data Found</h2>
    <p className="text-lg font-title font-semibold">{text}</p>
  </div>
);

NoDataFound.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NoDataFound;
