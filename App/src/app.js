import React from 'react';
import 'whatwg-fetch';

import Questions from './Questions';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      postCode: "",
      make: "",
      model: "",
      startYear: "",
      endYear: "",
      colour: ""
    }

  }

  searchCar(url){
    fetch(url)
      .then((response)=>{
        return response.json();
      })
      .then((json) => {
        console.log(json.results);
      })
      .catch((error)=>{
        console.log('Whoops');
      })
  }

  // eBay Search API
  searchEbay(){
    var url  = "http://svcs.ebay.com/services/search/FindingService/v1";
        url += "?OPERATION-NAME=findItemsByKeywords";
        url += "&SERVICE-VERSION=1.0.0";
        url += "&SECURITY-APPNAME=JamesDzi-carsearc-PRD-a2442a3e5-c16d133d";
        url += "&GLOBAL-ID=EBAY-GB";
        url += "&RESPONSE-DATA-FORMAT=JSON";
        url += "&REST-PAYLOAD";
        url += "&keywords=" + this.state.make + "%20" + this.state.model;
    this.searchCar(url);
  }

  // Autotrader Search API
  searchAutotrader(){
    var url  = "http://localhost:8081/autotraderAPI";
        url += "?make=" + this.state.make;
        url += "&model=" + this.state.model;
    this.searchCar(url);
  }

  handleChangeCar(newCar){
    this.setState({ make: newCar.make, model: newCar.model }, () => { this.searchAutotrader() })
  }

  render() {
    return (
      <div className="container-fluid">
        <Questions changeCar={this.handleChangeCar.bind(this)} />
      </div>
    )
  }
};

export default App;
