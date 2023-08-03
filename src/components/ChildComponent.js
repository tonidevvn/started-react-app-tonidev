import { Component } from "react";
import Accordion from "react-bootstrap/Accordion";

export class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    console.log(">>> Component did mount");
    this.timerID = setInterval(() => this.tick(), 1000);
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

  render() {
    let { name, arrJobs, onRemove } = this.props;

    return (
      <>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{name}</Accordion.Header>
            <Accordion.Body>
              <div className="list-group">
                {arrJobs.map((job, index) => {
                  return (
                    <a
                      className="list-group-item list-group-item-action"
                      key={index}
                    >
                      {job.jobTitle} - ${job.jobSalary} {"   "}
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => onRemove(job.id)}
                      >
                        ❌
                      </span>
                    </a>
                  );
                })}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
  }
}

export default ChildComponent;
