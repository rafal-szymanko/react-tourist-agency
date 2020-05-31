import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import PropTypes from 'prop-types';

import styles from './App.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Home from './components/views/Home/Home';
import Info from './components/views/Info/Info';

import TripsContainer from './components/views/Trips/TripsContainer';
import TripContainer from './components/views/Trip/TripContainer';


import CountriesContainer from './components/views/Countries/CountriesContainer';
import CountryContainer from './components/views/Country/CountryContainer';

import RegionsContainer from './components/views/Regions/RegionsContainer';


import parseTrips from './utils/parseTrips';
import { setMultipleStates } from './redux/globalRedux';

class App extends React.Component {
  static propTypes = {
    trips: PropTypes.array,
    setStates: PropTypes.func,
  }

  constructor(props) {
    super(props);
    // parse trips when App is first created
    parseTrips(this.props.trips, this.props.setStates);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.trips != this.props.trips) {
      // parse trips again if they changed
      parseTrips(this.props.trips, this.props.setStates);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch
            atEnter={{ opacity: 0, top: 200}}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1, top: 0  }}
            className={styles.switchWrapper}
          >
            <Route exact path='/' component={Home} />
            <Route exact path='/trips' component={TripsContainer} />
            <Route exact path='/trip/:id' component={TripContainer} />
            <Route exact path='/info' component={Info} />
            <Route exact path='/countries' component={CountriesContainer} />
            <Route exact path='/country/:id' component={CountryContainer} />
            <Route exact path='/regions' component={RegionsContainer} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips,
});

const mapDispatchToProps = dispatch => ({
  setStates: newState => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
