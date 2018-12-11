import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Guard from './components/guard/Guard';
import MyTripsPage from './components/pages/MyTrips_page';
import AuthPage from './components/pages/Auth_page';
import TripDetailsPage from './components/pages/TripDetails_page';
import ProfilePage from './components/pages/Profile_page';
import TripDetailsDestinationPage from './components/pages/TripDetailsDestination_page';
import TripDetailsParticipantsPage from './components/pages/TripDetailsParticipants_page';
import TripDetailsCalendarPage from './components/pages/TripDetailsCalendar_page';
import TripDetailsBudgetPage from './components/pages/TripDetailsBudget_page';
import TripDetailsCalendarAddPage from './components/pages/TripDetailsCalendarAddPage';
import { AddTripPage } from './components/pages/AddTripPage';
import ChatPage from './components/pages/ChatPage';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Guard exact path="/" component={MyTripsPage} />
            <Route path="/auth" component={AuthPage} />
            <Guard path="/mytrips" component={MyTripsPage} />
            <Guard exact path="/tripdetails/:id" component={TripDetailsPage} />
            <Guard path="/tripdetails/:id/destination" component={TripDetailsDestinationPage} />
            <Guard exact path="/tripdetails/:id/calendar" component={TripDetailsCalendarPage} />
            <Guard path="/tripdetails/:id/calendar/add" component={TripDetailsCalendarAddPage} />
            <Guard path="/tripdetails/:id/participants" component={TripDetailsParticipantsPage} />
            <Guard path="/tripdetails/:id/budget" component={TripDetailsBudgetPage} />
            <Guard path="/addtrip" component={AddTripPage} />
            <Guard path="/profile" component={ProfilePage} />
            <Guard path="/profile" component={ProfilePage} />
            <Guard path="/tripdetails/:id/chat/:type" component={ChatPage} />
            <Redirect to='/mytrips' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
