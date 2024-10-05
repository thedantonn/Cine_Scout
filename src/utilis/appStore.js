import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/userSlice"
import movieReducer from "../components/moviesSlice"

const appStore = configureStore({
    reducer : {
        user : userReducer ,
        movies : movieReducer
    },
}) 

export default appStore