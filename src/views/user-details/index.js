import React, { Component } from "react";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import { getUser } from "../../services/getUsers";

export class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
    };
  }

  async loadUser(id) {
    // a little bit delay to see loading status
    let delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(1000);

    let user = await getUser(id);
    this.setState({
      user: !!user && !!user.data ? user.data : null,
      loading: false,
    });
  }

  async componentDidMount() {
    console.log("UserDetails did mount");
    toast.info("🚀 Loading data...", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    let id = this.props.match.params.id;
    console.log(
      "🚀 ~ file: index.js:40 ~ UserDetails ~ componentDidMount ~ this.props:",
      this.props
    );
    console.log(
      "🚀 ~ file: index.js:41 ~ UserDetails ~ componentDidMount ~ id:",
      id
    );
    await this.loadUser(id);
  }

  render() {
    let { user, loading } = this.state;
    return (
      <>
        <h3>
          User information from API (<i>Src: reqres.in</i>)
        </h3>
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
          <div className="d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/220/120"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Info of {user.first_name + " " + user.last_name}
                </h5>
                <p className="card-text">
                  <img
                    src={user.avatar}
                    width={"80px"}
                    alt={`Id = ${user.id}`}
                    title={`Id = ${user.id}`}
                  />
                  <br />
                  First name: {user.first_name}
                  <br />
                  Last name: {user.last_name}
                  <br />
                  Email: {user.email}
                </p>
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={this.props.history.goBack}
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(UserDetails);
