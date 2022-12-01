import React from 'react';
import { Route, Switch } from 'react-router';
import PageNotFound from './pages/PageNotFound';
import MainLayout from './components/layouts/MainLayout';
import DashboardLayout from './components/layouts/DashboardLayout';

const Home = React.lazy(() => import('./pages/Home'));
const Room = React.lazy(() => import('./pages/Room'));
const Booking = React.lazy(() => import('./pages/Booking'));
const Success = React.lazy(() => import('./pages/Success'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const PurchaseList = React.lazy(() => import('./pages/PurchaseList'));
const SearchResultHotel = React.lazy(() => import('./pages/SearchResultHotel'));
const SearchResultsFlight = React.lazy(() => import('./pages/SearchResultsFlight'));
const Landing = React.lazy(() => import('./pages/Landing'));
const BookingInquiry = React.lazy(() => import('./pages/BookingInquiry'));
const DetailBusinessTrip = React.lazy(() => import('./pages/DetailBusinessTrip'));

function LazyLoadComponent({
  component: Component,
  ...rest
}: {
  component: React.FunctionComponent | any;
  [key: string]: any;
}) {
  return (
    <React.Suspense fallback={<div />}>
      <Component {...rest} />
    </React.Suspense>
  );
}

function Routes() {
  return (
    <Switch>
      <Route
        exact
        path={[
          '/home',
          '/',
          '/room',
          '/flights',
          '/trains',
          '/hotels',
          '/booking',
          '/booking-inquiry',
          '/success',
          '/search/flights',
          '/search/hotels',
          '/purchase-list',
          '/detail-business-trip',
        ]}
      >
        <MainLayout>
          <Switch>
            <Route exact path="/" render={() => <LazyLoadComponent component={Landing} />} />
            <Route exact path="/home" render={() => <LazyLoadComponent component={Home} />} />
            <Route exact path="/room" render={() => <LazyLoadComponent component={Room} />} />
            <Route
              exact
              path="/flights"
              render={() => <LazyLoadComponent activeTab="flights" component={Home} />}
            />
            <Route
              exact
              path="/trains"
              render={() => <LazyLoadComponent activeTab="trains" component={Home} />}
            />
            <Route
              exact
              path="/hotels"
              render={() => <LazyLoadComponent activeTab="hotels" component={Home} />}
            />
            <Route
              exact
              path="/search/flights"
              render={() => <LazyLoadComponent component={SearchResultsFlight} />}
            />
            <Route
              exact
              path="/search/hotels"
              render={() => <LazyLoadComponent component={SearchResultHotel} />}
            />
            <Route exact path="/booking" render={() => <LazyLoadComponent component={Booking} />} />
            <Route exact path="/success" render={() => <LazyLoadComponent component={Success} />} />
            <Route
              exact
              path="/booking-inquiry"
              render={() => <LazyLoadComponent component={BookingInquiry} />}
            />
            <Route
              exact
              path="/purchase-list"
              render={() => <LazyLoadComponent component={PurchaseList} />}
            />
            <Route
              exact
              path="/detail-business-trip"
              render={() => <LazyLoadComponent component={DetailBusinessTrip} />}
            />
          </Switch>
        </MainLayout>
      </Route>
      <Route exact path={['/dashboard']}>
        <MainLayout>
          <DashboardLayout>
            <Switch>
              <Route
                exact
                path="/dashboard"
                render={() => <LazyLoadComponent component={Dashboard} />}
              />
            </Switch>
          </DashboardLayout>
        </MainLayout>
      </Route>
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
