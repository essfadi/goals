import axios from "axios";

const API_URL = "/api/goals/";

// Get Goals
const getGoals = async (token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  }
  const response = await axios.get(API_URL,config);

  if (response.data) {
    localStorage.setItem("goals", JSON.stringify(response.data)); // Save User to Local Storage
  }

  return response.data;
};

// Add Goal
const addGoal = async (goal, token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, goal, config);

  if (response.data) {
    localStorage.setItem("goals", JSON.stringify(response.data)); // Save User to Local Storage
  }

  return response.data;
};

// Delete Gaol
const deleteGoal = async (id, token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);

  return response.data;
}

const goalsService = {
    getGoals,
    addGoal,
    deleteGoal
};

export default goalsService;