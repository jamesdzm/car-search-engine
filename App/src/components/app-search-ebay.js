import React from 'react';
import 'whatwg-fetch';

class AppSearchEbay extends React.Component {
  constructor(){
    super();
    this.state = { results: '' };
  }

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

  render() {
    return (
      <h3>{this.state.results}</h3>
    )
  }
}

export default AppSearchEbay;
