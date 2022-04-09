import axios from "axios";

const API_URL = "/api/users/";

//Register User
const register = async (user) => {
  const response = await axios.post(API_URL, user);
  
  if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));    // Save User to Local Storage
  }

  return response.data;
};
// Logout User
const logout =  () => {
  localStorage.removeItem("user");
};
//Login User
const login = async (user) => {
  const response = await axios.post(API_URL + 'login', user);
  
  if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));    // Save User to Local Storage
  }

  return response.data;
};

const authService = {
    register,
    logout,
    login
};

export default authService;
