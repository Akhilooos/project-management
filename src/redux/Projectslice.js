import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectList: [],
    error: null,
    loading: false
};

const fetchProjects = createAsyncThunk('projects/getprojects', async (userId) => {
    console.log(userId);
    const response = await fetch(`https://66225b1f27fcd16fa6c992e4.mockapi.io/api/v1/user/${userId}/project`);
    console.log(response);
    const userData = await response.json();
    return userData;
});
const addProject = createAsyncThunk('projects/addProject', async ({ userId, projectName, projectDetails }) => {
    const response = await fetch(`https://66225b1f27fcd16fa6c992e4.mockapi.io/api/v1/user/${userId}/project`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: projectName, details: projectDetails }),
    });

    if (!response.ok) {
        throw new Error('Failed to add project');
    }

    const projectData = await response.json();
    return projectData;
});

const deleteProject = createAsyncThunk('projects/deleteProject', async ({ userId, projectId }) => {
    const response = await fetch(`https://66225b1f27fcd16fa6c992e4.mockapi.io/api/v1/user/${userId}/project/${projectId}`, {
       method: 'DELETE',
    });
   
    if (!response.ok) {
       throw new Error('Failed to delete project');
    }
   
    return projectId;
   });
   const editProject = createAsyncThunk('projects/editProject', async ({ userId, projectId, projectName, projectDetails }) => {
    const response = await fetch(`https://66225b1f27fcd16fa6c992e4.mockapi.io/api/v1/user/${userId}/project/${projectId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: projectName, details: projectDetails }),
    });

    if (!response.ok) {
        throw new Error('Failed to edit project');
    }

    const projectData = await response.json();
    return projectData;
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
                if(action.payload==="Not found"){
                    state.projectList=[];
                }
                else{
                state.projectList = action.payload;
                }
                
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addProject.fulfilled, (state, action) => {
                state.projectList.push(action.payload);
            })
            .addCase(deleteProject.fulfilled, (state, action) => {
                state.projectList = state.projectList.filter(project => project.id !== action.payload);
               })
            .addCase(editProject.fulfilled, (state, action) => {
                const index = state.projectList.findIndex(project => project.id === action.payload.id);
                if (index !== -1) {
                    state.projectList[index] = action.payload;
                }
            });
            
    }
});

export default projectSlice.reducer;
export { fetchProjects,addProject,deleteProject,editProject};
