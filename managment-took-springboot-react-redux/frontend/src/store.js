import  {configureStore} from "@reduxjs/toolkit";
import projectsReducer from "./Slices/projectsSlice";
import usersReducer from "./Slices/userSlice"


export const store =  configureStore({
    reducer:{
       projects: projectsReducer,
       users: usersReducer
    }
});