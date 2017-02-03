import React from 'react';
import SearchBar from './SearchBar';

class Question extends React.Component {

  render(){
    return(
      <div className="container_inner">
        <h1>Let's start by entering the <strong>make</strong> and <strong>model</strong> are you looking for</h1>
        <br />
        <SearchBar />
      </div>
    )
  }
};

export default Question;
