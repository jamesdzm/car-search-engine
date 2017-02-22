import React from 'react';
import Questions from './Questions';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      car: []
    }
  }

  componentWillMount(){
    this.setState({
      car: [
        {
          postCode: "RH15 8HU",
          make: "audi",
          model: "a1",
          startYear: "2010",
          endYear: "2017",
          colour: "white"
        }
      ]
    })
  }

  handleChangeCar(newCar){
    this.setState({
      car: [
        {
          make: newCar.make
        }
      ]
    }, function(){
      console.log(this.state.car);
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <Questions car={this.state.car} changeCar={this.handleChangeCar.bind(this)} />
      </div>
    )
  }
};

export default App;
