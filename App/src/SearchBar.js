import React from 'react';
// import Search from './Search';

class SearchBar extends React.Component {
  constructor(){
    super();
    this.state = {value: '' };
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  handleSubmit(e){
    // alert('A form was submitted');
    e.preventDefault();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input className="form-control" value={this.state.value} placeholder="Start typing the make here" type="text" onChange={this.handleChange.bind(this)}/>
          <br/>
          {/* <button type="submit" className="btn btn-info btn-lg">Continue</button> */}
        </form>
        {/* <Search /> */}
      </div>
    )
  }
};

export default SearchBar;
