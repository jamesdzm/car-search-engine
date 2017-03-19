import React from 'react';

import AppSearchAutotrader from './app-search-autotrader';

class AppResults extends React.Component {
  render(){
    return(
      <div className="results-container">
        <div className="col-md-12">
          <AppSearchAutotrader make={} model={} />
        </div>
      </div>
    )
  }
}

export default AppResults;
