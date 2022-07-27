import PropTypes from 'prop-types';

const TopBanner = (props) => {
  const { children, flex } = props;

  return (
    <div id="search-bar" className={`banner-container ${flex}`}>
      {children}
    </div>
  );
};

TopBanner.propTypes = {
  children: PropTypes.node.isRequired,
  flex: PropTypes.string.isRequired,
};

export default TopBanner;
