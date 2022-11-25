import { data } from '../components/charts/pie';
import chartStyles from "../styles/Chart.module.css";

import dynamic from 'next/dynamic';

const MyResponsivePie = dynamic(() => import('../components/charts/pie'), { ssr: false });

const Chart = () => {
  return (
    <div className={chartStyles.divchart}>
      <MyResponsivePie data={data} />
    </div>
  );
};
export default Chart;
