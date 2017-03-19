import React from "react";
import { Link } from 'react-router';
import { Form } from 'react-router-form';
import 'whatwg-fetch';

class AppForm extends React.Component {

  constructor() {
    super();
    this.state = { postcode: "", make: "", model: "", startYear: "", endYear: "", colour: "", results: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleSubmit(e){
    this.setState(
      {
        make: this.refs.make.value,
        model: this.refs.model.value,
        color: this.refs.color.value,
        startYear: this.refs.startYear.value,
        endYear: this.refs.endYear.value,
        postcode: this.refs.postcode.value
      },
      function() {
        this.searchAutotrader();
      });

      e.preventDefault();
  }

  handleClearForm(e){
    this.refs.make.value = '';
    this.refs.model.value = '';
    this.refs.color.value = '';
    this.refs.startYear.value = '';
    this.refs.endYear.value = '';
    this.refs.postcode.value = '';

    e.preventDefault();
  }

  render(){
    return (
      <div className="question-container">
        <div className="question-inner">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="col-md-4">
                <input type="text" className="form-control" ref="make" placeholder="Make" autoFocus={true} />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" ref="model" placeholder="Model" />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" ref="color" placeholder="Colour" />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" ref="startYear" placeholder="Age" />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" ref="endYear" placeholder="Age" />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" ref="postcode" placeholder="Postcode" />
              </div>
              <div className="col-md-12">
                <Link to="/results"><button type="submit" className="btn btn-info" clearForm={this.handleClearForm}>Submit</button></Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AppForm;
