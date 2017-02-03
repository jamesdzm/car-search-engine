import React from 'react';
import Question from './Question';
import QuestionAge from './QuestionAge';

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
          <div className="row">
            <div className="question-container">
              <Question />
              {/* <QuestionAge /> */}
            </div>
          </div>
      </div>
    )
  }
};

export default App;
