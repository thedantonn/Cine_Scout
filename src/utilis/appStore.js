import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/userSlice"
import movieReducer from "../Slice/moviesSlice"
import GptReducer from "../Slice/searchGptSlice"
import configReducer from "../Slice/configSlice"

const appStore = configureStore({
    reducer : {
        user : userReducer ,
        movies : movieReducer,
        Gpt : GptReducer,
        config : configReducer
    },
}) 

export default appStore