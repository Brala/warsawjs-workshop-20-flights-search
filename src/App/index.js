import React, {Component} from 'react';
import SearchView from '../SearchView'
import FlightsView from '../FlightsView'

export default class App extends Component {
 state = {
   view: 'search',
   searchData: {
     from: null,
     to: null,
     departDate: null,
     returnDate: null
   }
 }
 onSearch = (searchData) => {
   this.setState({
     view: 'flights',
     searchData: searchData
   })
 }
 render() {
   switch (this.state.view) {
     case 'search':
       return <SearchView onSearch={this.onSearch}/>
     case 'flights':
       return <FlightsView searchData={this.state.searchData}/>
     default:
       return <p>
         Ajc
       </p>
   }
 }
}