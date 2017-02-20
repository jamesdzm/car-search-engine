import React from 'react';

// import QuestionOne from './components/question-one';
import Questions from './Questions';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {/* <QuestionOne /> */}
        <Questions />
      </div>
    )
  }
};

export default App;
