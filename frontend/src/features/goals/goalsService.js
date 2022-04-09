import axios from "axios";

const API_URL = "/api/goals/";

// Get Goals
const getGoals = async (user) => {
  const response = await axios.get(API_URL, user);

  if (response.data) {
    localStorage.setItem("goals", JSON.stringify(response.data)); // Save User to Local Storage
  }

  return response.data;
};

const goalsService = {
    getGoals,
};

export default goalsService;