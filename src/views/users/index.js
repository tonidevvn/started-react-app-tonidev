import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import queryString from "query-string";
import { getUsers } from "../../services/getUsers";

export class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      page: 1,
    };
  }
  async loadUsers(pageNo) {
    // a little bit delay to see loading status
    let delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(1000);

    let listUser = await getUsers(pageNo);
    this.setState({
      users: !!listUser && !!listUser.data ? listUser.data : [],
      loading: false,
      page: pageNo,
    });
  }

  async componentDidMount() {
    console.log("ListUser did mount");
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

    // get the current page
    const params = queryString.parse(this.props.location.search);
    console.log(
      "🚀 ~ file: index.js:36 ~ ListUser ~ componentDidMount ~ params:",
      params
    );

    // and then get the list of users
    await this.loadUsers(params.page);
  }

  async componentDidUpdate() {
    console.log("ListUser did update");
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

    // get the current page
    const params = queryString.parse(this.props.location.search);
    let pageNo = params.page || 1;

    if (pageNo !== this.state.page) {
      // and then get the list of users
      await this.loadUsers(pageNo);
    }
  }

  render() {
    console.log("ListUser did render");
    let { users, loading } = this.state;

    // get the current page
    const params = queryString.parse(this.props.location.search);
    let currentPage = params.page || 1;
    console.log(
      "🚀 ~ file: index.js:83 ~ ListUser ~ render ~ currentPage:",
      currentPage
    );

    return (
      <>
        <h3>
          List of Users from API (<i>Src: reqres.in</i>)
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
          <>
            <div className="table-responsive">
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th>Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Photo</th>
                  </tr>
                </thead>
                <tbody>
                  {!!users &&
                    users.map((user) => {
                      return (
                        <tr key={user.id}>
                          <td>
                            <Link to={`/user/${user.id}`}>{user.id}</Link>
                          </td>
                          <td>{user.first_name}</td>
                          <td>{user.last_name}</td>
                          <td>{user.email}</td>
                          <td>
                            <img
                              src={user.avatar}
                              alt={user.first_name}
                              style={{ width: "50px" }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination d-flex justify-content-center">
                {[1, 2].map((pageNo) => {
                  return (
                    <li key={pageNo} className="page-item">
                      <NavLink
                        exact={true}
                        className={`page-link ${
                          currentPage == pageNo ? "active" : ""
                        }`}
                        activeClassName="__trick"
                        to={`/users?page=${pageNo}`}
                      >
                        {pageNo}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </>
        )}
      </>
    );
  }
}

export default withRouter(ListUser);
