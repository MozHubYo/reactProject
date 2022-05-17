import React from 'react';
import './home.css';
import FeatureInfo from '../../components/featureInfo/featureInfo';
import Chart from '../../components/chart/chart';
import WidgetSM from '../../components/widgetSM/widgetSM';
import WidgetLG from '../../components/widgetLG/widgetLG';
import { userData } from '../../dummyData';

export default function Home() {
  return (
    <div className="homePage">
      <div className="featured">
        <FeatureInfo title={'Revenue'} actual={'$4,224.45'} mom={'-19.1%'} />
        <FeatureInfo title={'Sales'} actual={'$7,526.19'} mom={'-20.1%'} />
        <FeatureInfo title={'Cost'} actual={'149.47'} mom={'-9.16%'} />
      </div>
      <Chart
        title={'User Analytics'}
        data={userData}
        dataKey={'month'}
        grid={true}
      />
      <div className="homeWidget">
        <WidgetSM />
        <WidgetLG />
      </div>
    </div>
  );
}
