import { Component } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        { jobTitle: "SW", jobSalary: 400 },
        { jobTitle: "IT", jobSalary: 500 },
        { jobTitle: "Manager", jobSalary: 1000 },
      ],
    };
  }

  handleAddComponent = (newJob) => {
    this.setState({ jobs: [...this.state.jobs, newJob] });
  };

  handleRemoveComponent = (jobIndex) => {
    let subJobs = this.state.jobs;
    this.setState({
      jobs: [...subJobs.slice(0, jobIndex), ...subJobs.slice(++jobIndex)],
    });
  };

  render() {
    console.log("Re-render component!!!");

    let { name, age } = this.props;
    let { jobs } = this.state;

    return (
      <>
        <h2>
          Name: {name} - Age: {age}
        </h2>
        <AddComponent arrJobs={jobs} onSubmit={this.handleAddComponent} />
        <ChildComponent
          name="Career history"
          arrJobs={jobs}
          onRemove={this.handleRemoveComponent}
        />
      </>
    );
  }
}

export default MyComponent;
