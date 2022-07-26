import SearchBar from './Search';
import RandomId, { getTillTwoDecimal } from '../helpers/Random';

const Home = () => (
  <div id="Home-holder">
    <SearchBar />
    <div id="List">
      <h1>Stats by coins</h1>
      <div id="coin-grid">
        <div id="Bitcoin">
          <img src="https://static.coinstats.app/coins/1650455588819.png" alt="Bitcoin" />
          <div data-type={RandomId}>
            <h2>Bitcoin </h2>
            <p>{ getTillTwoDecimal(1517.6944303804141) }</p>
          </div>
        </div>
        <div id="Ethereum">
          <img src="https://static.coinstats.app/coins/1650455629727.png" alt="Ethereum" />
          <div datat-ype={RandomId}>
            <h2>Ethereum</h2>
            <p>{ getTillTwoDecimal(1517.6944303804141) }</p>
          </div>
        </div>
        <div id="Tether">
          <img src="https://static.coinstats.app/coins/1650455771843.png" alt="Tether" />
          <div data-type={RandomId}>
            <h2>Tether</h2>
            <p>{ getTillTwoDecimal(1517.6944303804141) }</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
