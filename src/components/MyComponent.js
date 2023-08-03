import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
import { selectJobs, add, remove } from "../utils/jobsSlice";
import { useDispatch, useSelector } from "react-redux";

function MyComponent(props) {
  const jobs = useSelector(selectJobs);
  const dispatch = useDispatch();

  const handleAddComponent = (newJob) => {
    //this.setState({ jobs: [...this.state.jobs, newJob] });
    dispatch(add(newJob));
  };

  const handleRemoveComponent = (jobId) => {
    // let subJobs = this.state.jobs;
    // this.setState({
    //   jobs: [...subJobs.slice(0, jobIndex), ...subJobs.slice(++jobIndex)],
    // });
    dispatch(remove(jobId));
  };

  return (
    <>
      <h2>
        Name: {props.name} - Age: {props.age}
      </h2>
      <AddComponent onSubmit={handleAddComponent} />
      <ChildComponent
        name="Career history"
        arrJobs={jobs}
        onRemove={handleRemoveComponent}
      />
    </>
  );
}

export default MyComponent;
