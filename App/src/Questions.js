import React from "react";
import { Router, Route, Link, browserHistory } from "react-router";

class QuestionOne extends React.Component {
  render(){
    return (
      <div className="form-group">
        <label><h1>What make and model do you want?</h1></label>
        <input type="text" className="form-control" placeholder="Start typing make and model here" autoFocus={true} />
        <Link to="/question-two">
          <button className="btn btn-info">Next</button>
        </Link>
      </div>
    )
  }
}

class QuestionTwo extends React.Component {
  render(){
    return (
      <div className="form-group">
        <label>What age do you want?</label>
        <input type="text" className="form-control" placeholder="Start typing age here" autoFocus={true} />
        <Link to="/question-three">
          <button className="btn btn-info">Next</button>
        </Link>
      </div>
    )
  }
}

class QuestionThree extends React.Component {
  render(){
    return (
      <div className="form-group">
        <label>What color do you want?</label>
        <input type="text" className="form-control" placeholder="Start typing color here" autoFocus={true} />
        <Link to="/question-four">
          <button className="btn btn-info">Search</button>
        </Link>
      </div>
    )
  }
}

class QuestionFour extends React.Component {
  render(){
    return (
      <div className="form-group">
        <label>What is your postcode?</label>
        <input type="text" className="form-control" placeholder="Enter postcode here" autoFocus={true} spellCheck={false} />
        <Link to="/">
          <button className="btn btn-info">Search</button>
        </Link>
      </div>
    )
  }
}

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { make: '', model: '', age: '', color: '', postcode: '' };
  }

  handleChange(e) {
    this.setState({make: e.target.make, model: e.target.model, age: this.target.age, color: this.target.color, postcode: this.target.postcode })
  }

  render(){
    return (
      <div className="question-container">
        <div className="question-inner">
          <form>
            <Router history={browserHistory}>
              <Route path="/" component={QuestionOne} />
              <Route path="question-two" component={QuestionTwo} />
              <Route path="question-three" component={QuestionThree} />
              <Route path="question-four" component={QuestionFour} />
            </Router>
          </form>
        </div>
      </div>
    )
  }
}

export default Questions;
