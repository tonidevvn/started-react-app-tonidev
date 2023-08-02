import React, { Component } from "react";
import { toast } from "react-toastify";

const withLoader = (WrappedComponent) => {
  class WithLoader extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
      };
    }

    componentDidMount() {
      console.log("WithLoader did mount");
      console.log(this);
      toast.info("🚀 Loading page...", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      let interval = setInterval(() => {
        this.setState({ loading: false });
        clearInterval(interval);
        console.log(this);
      }, 1000);
    }

    getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    render() {
      console.log("WithLoader did render");
      let { loading } = this.state;
      return (
        <div style={{ color: this.getRandomColor() }}>
          {!!loading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <WrappedComponent {...this.props} loading={loading} />
          )}
        </div>
      );
    }
  }

  WithLoader.displayName = `WithLoader(${WrappedComponent.name})`;
  return WithLoader;
};

export default withLoader;
