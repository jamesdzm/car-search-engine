import React from 'react';
import SearchBar from './SearchBar';

class Question extends React.Component {

  render(){
    return(
      <div className="question-inner">
        <h1>Let's start by entering the <strong>make</strong> and <strong>model</strong> of the car you are looking for below.</h1>
        <br />
        <br />
        <SearchBar />
        <br /><br /><br />
        <h2 className="text-center">1 / 6</h2>
        <br />
        <p className="text-center">Press enter to continue</p>
      </div>
    )
  }
};

export default Question;
