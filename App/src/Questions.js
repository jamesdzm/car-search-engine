import React from "react";

class Questions extends React.Component {

  constructor(){
    super();

    this.state = {
      updateCar: {}
    }
  }

  handleSubmit(e){
    this.setState({
      updateCar: {
        make: this.refs.make.value,
        model: this.refs.model.value
      }
    },
    function() {
      this.props.changeCar(this.state.updateCar);
    });
    this.refs.make.value = '';
    this.refs.model.value = '';
    e.preventDefault();
  }

  render(){
    return (
      <div className="question-container">
        <div className="question-inner">
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <input type="text" className="form-control" ref="make" placeholder="Make" autoFocus={true} />
              <input type="text" className="form-control" ref="model" placeholder="Model" />
              <button type="submit" className="btn btn-info">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Questions;
