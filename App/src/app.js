import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppForm from './components/app-form';
import AppResults from './components/app-results';

const AppContainer = (props) => {
  return(
    <div className="container-fluid">
      <AppBrand />
      {props.children}
    </div>
  )
}

const AppBrand = () => {
  return(
    <h1 className="brand">everymanmotors</h1>
  )
}

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={AppContainer}>
          <IndexRoute component={AppForm} />
          <Route path='results' component={AppResults} />
        </Route>
      </Router>
    )
  }
}

export default App;

// Render App to the DOM
ReactDOM.render(
  <App/>,
  document.getElementById("app")
)
