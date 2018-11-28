import React, { Component } from 'react';
import { Query } from "react-apollo";
import GET_DESTINATION_DETAILS from '../apollo/get_destination_details';
import DestinationDashboard from '../container/CalendarDashboard';


// const GeneralInfo = styled('div')`
//   width: 100vw;
//   height: 90vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-top: 5vh;
// `;

class TripDetailsDestination_page extends Component {

  render() {
    const tripID = this.props.location.pathname.split('/')[2];
    const DestinationDetailsApollo = () => (
      <Query
      query={GET_DESTINATION_DETAILS}
      errorPolicy="all"
      variables ={{tripID : tripID}}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) console.log(error);
        if (data.trip) {
          return (
            <div>
              <DestinationDashboard info={data}/>
          </div>
          );
        }
        else if (!data.trip) {
          return (
            <h1>
              Sorry, trip not found
            </h1>
          )
        }
      }
    }
    </Query>
    );
    return (
      <DestinationDetailsApollo />
    );
  }
}

export default TripDetailsDestination_page

/*
  Here we should go knowing both the user id and the trip id. We will get from the db:
  on schema:
    - name,
    - participants,
    - destination.
    - budget,
    - timeFrame

  should the id it will try to fetch from graphql should come from the url -> allow for direct access to the url and
  independence
*/