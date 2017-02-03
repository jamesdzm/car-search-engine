import React from 'react';
import Search from './Search';

class SearchBar extends React.Component {

  render(){
    return (
      <div>
        {/*<input className="form-control" placeholder="Start typing the make here" type="text" />*/}
        <Search />
      </div>
    )
  }
};

export default SearchBar;
