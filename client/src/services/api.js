// src/services/api.js
import axios from "axios";

const signup = (username, password) => {
  return axios
    .post("/api/auth/signup", { username, password })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const login = (username, password) => {
  return axios
    .post("/api/auth/login", { username, password })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const logout = () => {
  return axios
    .delete("/api/auth/logout")
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

// Upload

const service = axios.create({
  baseURL: "http://localhost:5555/portfolio"
  // withCredentials: true // => you might need this when having the users in the app
});

const errorHandler = err => {
  // console.error(err);
  throw err;
};

export default {
  service,

  handleUpload(theFile) {
    // console.log('file in service: ', theFile)
    return axios
      .post("/imgUpload/upload", theFile)
      .then(res => res.data)
      .catch(errorHandler);
  },

  saveNewThing(newThing) {
    // console.log('new thing is: ', newThing)
    return service
      .post("/things/create", newThing)
      .then(res => res.data)
      .catch(errorHandler);
  }
};

export { signup, login, logout, service };
