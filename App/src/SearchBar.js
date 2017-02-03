import React from 'react';

class SearchBar extends React.Component {
  render(){
    return (
      <input className="form-control" placeholder="Start Typing To See Suggestions*" type="text" />
    )
  }
};

export default SearchBar;
