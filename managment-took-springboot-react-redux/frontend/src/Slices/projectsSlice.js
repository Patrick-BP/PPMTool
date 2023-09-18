import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = [];

const fetchProjects = async ()=>{
  const  res = await axios.get("http://localhost:8080/api/project/all");
  console.log(res.data);
    initialState = res.data
}


const projectSlice = createSlice({
    name:"projects",
    initialState: fetchProjects(),
    reducers:{
        projectAdded:(state, action)=>{
            axios.post("http://localhost:8080/api/project", action.payload)
            fetchProjects();
            state = initialState;
            
        },

    }
});

export const selectAllProjects = (state) => state.projects;
export const { projectAdded } = projectSlice.actions;
export default projectSlice.reducer