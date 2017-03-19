import React from 'react';
import 'whatwg-fetch';

class AppSearchAutotrader extends React.Component {
  constructor(){
    super();
    this.state = { results: '' };
  }

  // Use Fetch to ajax the json from REST API
  searchCar(url){
    fetch(url)
      .then((response)=>{
        return response.json();
      })
      .then((json) => {
        console.log(json.results);
        this.setState({results: json.results.replace(/\D/g, '')});
      })
      .catch((error)=>{
        console.log('Whoops');
      })
  }

  // Autotrader Search API
  searchAutotrader(){
    var url  = "http://localhost:8081/autotraderAPI";
        url += "?make=" + this.state.make;
        url += "&model=" + this.state.model;
    this.searchCar(url);
  }

  render() {
    return (
      <h3>{this.state.results}</h3>
    )
  }
}

export default AppSearchAutotrader;
