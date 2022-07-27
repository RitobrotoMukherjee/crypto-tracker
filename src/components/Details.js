import { useSearchParams, useParams } from 'react-router-dom';
import TopBanner from './TopBanner';
import DetailData from './Details-components/DetailData';
import { getTillTwoDecimal } from '../helpers/Random';

const Details = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();

  const name = searchParams.get('name');
  const price = +searchParams.get('price');
  const icon = searchParams.get('icon');
  return (
    <div id="Details-holder">
      <TopBanner flex="flex-row">
        <div className="flex-[0_1_50%] overflow-hidden rounded text-center">
          <img className="object-cover w-32 h-32" alt="Crypto Stats" src={icon} />
        </div>
        <div className="flex-[0_1_50%] flex flex-col w-full items-center justify-center">
          <h2>{name}</h2>
          <p>{ getTillTwoDecimal(price) }</p>
        </div>
      </TopBanner>
      <div id="List" className="h-full">
        <h1 className="font-title uppercase pl-5 bg-titleBar">{`Stats Of ${name}`}</h1>
        <DetailData coinId={params.coinId} />
      </div>
    </div>
  );
};

export default Details;
