import React from 'react';

export default class FlightsView extends React.Component {

    state = {
        flights: []
    }

    async componentDidMount() {
        const {from, to, departDate, returnDate} = this.props.searchData

        const url = 'https://warsawjs-flights-api.herokuapp.com/flights'
        const result = await fetch(`${url}/${departDate}/${returnDate}/${from}/${to}`)
     
        const flights = await result.json()
        this.setState({flights})
    }
 render() {
   return (
       <ul>
       {
           this.state.flights.map(
               flight => <Flight flight={flight}/>
               
           )
       }
       </ul>
   )
 }
}