import React from 'react';

import SearchBar from './search-bar';

class QuestionOne extends React.Component {
  render(){
    return (
      <div className="question-container">
        <div className="question-inner">
          <SearchBar />
        </div>
      </div>
    )
  }
}

export default QuestionOne;
