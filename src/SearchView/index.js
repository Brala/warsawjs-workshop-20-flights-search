import React, {Component} from 'react';

class SearchView extends Component {

 state = {
   from: "LON",
   to: "WAW",
   departTime: "2018-10-12",
   arrivalTime: "2018-12-12"
 };

 onFormChange = path => e => {
   this.setState({[path]: e.target.value});
 }

 onSubmit = e => {
   e.preventDefault()
   this.props.onSearch(this.state)
 }

 render() {
   const {to, from, departTime, arrivalTime} = this.state

   return (
     <form onSubmit={this.onSubmit}>
     <label>From</label>
     <select value={from} onChange={this.onFormChange('from')}>
       <option>WAW</option>
       <option>LON</option>
     </select>

     <label>To</label>
     <select value={to} onChange={this.onFormChange('to')}>
       <option>WAW</option>
       <option>LON</option>
     </select>

     <label>Depart Date</label>
     <input type="date" value={departTime} onChange={this.onFormChange('departTime')}/>

     <label>Return Date</label>
     <input type="date" value={arrivalTime} onChange={this.onFormChange('arrivalTime')}/>

     <button type="submit">Search</button>
   </form>)
 }
}

export default SearchView;