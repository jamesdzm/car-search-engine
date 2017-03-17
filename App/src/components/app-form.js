import React from "react";
import { Link } from 'react-router';
import 'whatwg-fetch';

class AppForm extends React.Component {

  constructor() {
    super();
    this.state = { postcode: "", make: "", model: "", startYear: "", endYear: "", colour: "", results: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    this.setState(
      {
        make: this.refs.make.value,
        model: this.refs.model.value,
        color: this.refs.color.value,
        startYear: this.refs.startYear.value,
        endYear: this.refs.endYear.value,
        postcode: this.refs.postcode.value
      },
      function() {
        this.searchAutotrader();
      });
      this.refs.make.value = '';
      this.refs.model.value = '';
      this.refs.color.value = '';
      this.refs.startYear.value = '';
      this.refs.endYear.value = '';
      this.refs.postcode.value = '';
      e.preventDefault();
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


  render(){
    return (
      <div className="question-container">
        <div className="question-inner">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="col-md-4">
                <input type="text" className="form-control" ref="make" placeholder="Make" autoFocus={true} />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" ref="model" placeholder="Model" />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" ref="color" placeholder="Colour" />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" ref="startYear" placeholder="Age" />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" ref="endYear" placeholder="Age" />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" ref="postcode" placeholder="Postcode" />
              </div>
              <div className="col-md-12">
                {/* <Link to='/results'><button type="submit" className="btn btn-info">Submit</button></Link> */}
                <button type="submit" className="btn btn-info">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AppForm;
