import axios from "axios";

export const getUser = async (id) => {
  console.log("Calling reqres.in to get an user based on id");
  const response = await axios.get(
    `https://reqres.in/api/users/${!!id ? id : 1}`
  );
  console.log("🚀 ~ file: getUsers.js:8 ~ getUser ~ response:", response);
  return response.data;
};

export const getUsers = async (pageNo) => {
  console.log("Calling reqres.in to get the list of users");
  const response = await axios.get(
    `https://reqres.in/api/users?page=${!!pageNo ? pageNo : 1}`
  );
  console.log("🚀 ~ file: getUsers.js:6 ~ getUsers ~ response:", response);
  return response.data;
};
