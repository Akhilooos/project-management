import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList:[],
    loading: false,
    error: null
};

const fetchUSers = createAsyncThunk('getusers', async () => {
    const response = await fetch("https://66225b1f27fcd16fa6c992e4.mockapi.io/api/v1/user");
    const userData = await response.json();
    return userData;
});

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(fetchUSers.pending, (state) => {
            state.loading = true;
        }).addCase(fetchUSers.fulfilled, (state, action) => {
            state.loading = false;
            state.userList = action.payload;
        }).addCase(fetchUSers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message; 
        });
    }
})

export default userSlice.reducer;
export { fetchUSers }; 