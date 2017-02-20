import React from 'react';

class SearchBar extends React.Component {

  constructor(props){
    super(props);

    this.state = {car: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({car: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    // setButtonState to true - button uses React Router to move onto next form
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="form-control" value={this.state.car} onChange={this.handleChange} placeholder="Start typing make and model" />
          <button type="submit" disabled={this.state.car.toLowerCase() != "AUDI".toLowerCase()} className="btn btn-info">Next</button>
        </form>
        <p>Your selection so far: {this.state.car}</p>
      </div>
    )
  }
}

export default SearchBar;
