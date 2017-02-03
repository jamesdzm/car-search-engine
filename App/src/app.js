import React from 'react';
import Question from './Question';

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
          <div className="row">
            <div className="question-container">
              <Question />
            </div>
          </div>
      </div>
    )
  }
};

export default App;
