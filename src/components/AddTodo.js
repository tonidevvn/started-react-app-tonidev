import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import { toast } from "react-toastify";

export class AddTodo extends Component {
  state = {
    todoDesc: "",
  };

  handleTodoDescChangeEvent = (event) => {
    let desc = event.target.value;
    this.setState({ todoDesc: desc });
  };

  handleClickEvent = (event) => {
    event.preventDefault();

    if (!!this.state.todoDesc) {
      let { onSubmit } = this.props;
      let { todoDesc } = this.state;

      const date = new Date();
      let newTodoItem = { id: date.getTime(), desc: todoDesc, status: false };
      onSubmit(newTodoItem);

      this.setState({ todoDesc: "" });
    } else {
      toast.error("Missing todo description", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  render() {
    console.log("Re-render component!!!");

    return (
      <div className="container">
        <form className="p-1">
          <label htmlFor="todoDesc"> Description:</label> <br />
          <input
            type="text"
            id="todoDesc"
            value={this.state.todoDesc}
            onChange={this.handleTodoDescChangeEvent}
          />
          <br />
          <Button variant="primary" onClick={this.handleClickEvent}>
            Add
          </Button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
