import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class AddComponent extends Component {
  state = {
    jobTitle: "",
    jobSalary: "",
  };

  handleJobTitleChangeEvent = (event) => {
    this.setState({ jobTitle: event.target.value });
  };

  handleJobSalaryChangeEvent = (event) => {
    this.setState({ jobSalary: event.target.value });
  };

  handleClickEvent = (event) => {
    event.preventDefault();

    if (!!this.state.jobTitle && !!this.state.jobSalary) {
      let { onSubmit } = this.props;
      let { jobTitle, jobSalary } = this.state;

      let newJob = { jobTitle: jobTitle, jobSalary: jobSalary };
      onSubmit(newJob);
      console.log(newJob);
      // alert(`hello ${this.state.jobTitle} ${this.state.jobSalary}`);
    } else {
      alert("Input required information (title & salary)");
    }
  };

  render() {
    return (
      <div className="container">
        <form className="p-3">
          <label htmlFor="jobTitle">Job title:</label>
          <br />
          <input
            type="text"
            id="jobTitle"
            value={this.state.jobTitle}
            onChange={this.handleJobTitleChangeEvent}
          />
          <br />
          <label htmlFor="jobSalary">Job salary:</label>
          <br />
          <input
            type="text"
            id="jobSalary"
            value={this.state.jobSalary}
            onChange={this.handleJobSalaryChangeEvent}
          />
          <br />
          <br />
          <Button variant="primary" onClick={this.handleClickEvent}>
            Add
          </Button>
        </form>
      </div>
    );
  }
}
