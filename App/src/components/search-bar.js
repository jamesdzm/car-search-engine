import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class QuestionOneQuestion extends React.Component {
  constructor(props){
    super(props);

    this.state = {car: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({car: e.target.value });
  }

  render(){
    return(
      <div>
        <label>What car do you want?</label>
        <input className="form-control" value={this.state.car} onChange={this.handleChange} placeholder="Start typing make and model" />
        <button disabled={this.state.car.toLowerCase() != "AUDI".toLowerCase()} className="btn btn-info">Next</button>
      </div>
    )
  }
}

class SearchBar extends React.Component {

  handleSubmit(e){
    e.preventDefault();
    // setButtonState to true - button uses React Router to move onto next form
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <QuestionOneQuestion />
        </form>
      </div>
    )
  }
}

export default SearchBar;
