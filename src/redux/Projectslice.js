import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectList: [],
    error: null,
    loading: false
};

const fetchProjects = createAsyncThunk('getprojects', async (userId) => {
    console.log(userId);
    const response = await fetch(`https://6620fbc83bf790e070b17015.mockapi.io/api/v1/user/${userId}/project`);
    const userData = await response.json();
    return userData;
});

const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.loading = false;
                state.projectList = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default projectSlice.reducer;
export { fetchProjects };
