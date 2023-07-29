import { Component } from "react";

export class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showJobs: true,
      date: new Date(),
    };
  }

  componentDidMount() {
    console.log(">>> Component did mount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "🚀 ~ file: ChildComponent.js:18 ~ ChildComponent ~ componentDidUpdate ~ prevState:",
      prevState
    );
  }

  componentWillUnmount() {
    console.log(">>> Component will unmount");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleShowHide = () => {
    this.setState({ showJobs: !this.state.showJobs });
  };

  render() {
    let { name, arrJobs, onRemove } = this.props;
    let { showJobs } = this.state;

    return (
      <>
        <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
        <button onClick={this.handleShowHide}>Toogle Show/Hide</button>
        {showJobs && (
          <>
            <div>Sub records {name}</div>
            <ul>
              {arrJobs.map((job, index) => {
                return (
                  <li key={index}>
                    {job.jobTitle} - ${job.jobSalary} {" --- "}
                    <button onClick={() => onRemove(index)}>❌</button>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
