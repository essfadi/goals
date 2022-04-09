import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import goalsService from './goalsService';

//Get Goals From Local Storage
const goals = JSON.parse(localStorage.getItem("goals"));

const initialState = {
    goals: goals ? goals : [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Get Goals
export const getGoals = createAsyncThunk(
    "goals/getGoals",
    async (user, thunkAPI) => {
        try {
            return await goalsService.getGoals();
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const goalsSlice = createSlice({
    name: "goals",
    initialState,
    reducers: {
        reset: (state) => {
            state.goals = [];
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGoals.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getGoals.fulfilled, (state, action) => {
                state.goals = action.payload;
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(getGoals.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    }
});
console.log(goalsSlice);
export const {reset} = goalsSlice.actions;
export default goalsSlice.reducer;