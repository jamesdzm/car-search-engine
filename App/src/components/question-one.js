import React from 'react';

import SearchBar from './search-bar';

class QuestionOne extends React.Component {
  render(){
    return (
      <div className="question-container">
        <div className="question-inner">
          <h1>What car do you want mate?</h1>
          <SearchBar />
        </div>
      </div>
    )
  }
}

export default QuestionOne;
