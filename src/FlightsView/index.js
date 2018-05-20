import React from 'react';
import Flight from './Flight'

export default class FlightsView extends React.Component {

    state = {
        flights: []
    }

    onBackClick = e => {
        e.preventDefault()
        this.props.onBackClick(this.state)
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
       <React.Fragment>
           
     <button type="submit">Search</button>
       <button onClick={this.onBackClick}> {this.props.onBackClick}Back</button>

       <ul>
       {
           this.state.flights.map(
               flight => <Flight flight={flight}/>
           )
       }
       </ul>
       </React.Fragment>
   )
 }
}