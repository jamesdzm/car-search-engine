import React from 'react';
import 'whatwg-fetch';

class AppSearchAutotrader extends React.Component {
  constructor(){
    super();
    this.state = { results: '' };
  }

  componentWillMount(){
    var url  = "http://localhost:8081/autotraderAPI";
        url += "?make=" + this.props.make;
        url += "&model=" + this.props.model;
    this.searchCar(url);
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

  render() {
    return (
      <h3>{this.state.results}</h3>
    )
  }
}

export default AppSearchAutotrader;
