import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import qs from 'qs';
import _isEmpty from 'lodash/isEmpty';
import { useHistory, useParams } from 'react-router-dom';
import SearchFlight from 'src/components/Flight/SearchFlight';
import SearchHotel from 'src/components/Hotels/SearchHotel';
import SearchTrains from 'src/components/Trains/SearchTrains';
import './Home.less';

const { TabPane } = Tabs;

function Home(props: { activeTab?: 'flights' | 'hotels' | 'trains' }) {
  const [homeState, setHomeState] = useState({});
  const history = useHistory();
  const params = useParams();
  useEffect(() => {
    setHomeState(qs.parse(history.location.search, { ignoreQueryPrefix: true }));
  }, [params]);
  return (
    <div className="home-page">
      <div className="home-banner">Let's plan your business trip!</div>
      <div className="container">
        <div className="card-container">
          <Tabs
            type="card"
            animated={false}
            onChange={active => history.push(['/', active].join(''))}
            defaultActiveKey={props.activeTab}
          >
            <TabPane tab="Flights" key="flights">
              <SearchFlight />
            </TabPane>
            <TabPane tab="Trains" key="trains">
              <SearchTrains />
            </TabPane>
            <TabPane tab="Hotels" key="hotels">
              <SearchHotel />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

Home.defaultProps = {
  activeTab: 'flights',
};

export default Home;
