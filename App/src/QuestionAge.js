import React from 'react';
// import SearchBar from './SearchBar';

class QuestionAge extends React.Component {

  render(){
    return(
      <div className="question-inner">
        <h1>What age would you like your [MAKE] [MODEL] to be? Let's look at some between [OLD] and [NEW]?</h1>
        <br />
        <br />
        {/* <SearchBar /> */}
        <br /><br /><br />
        <h2 className="text-center">2 / 6</h2>
        <br />
        <p className="text-center">Press enter to continue</p>
      </div>
    )
  }
};

export default QuestionAge;
