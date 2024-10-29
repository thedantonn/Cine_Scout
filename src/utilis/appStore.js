import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/userSlice"
import movieReducer from "../Slice/moviesSlice"
import GptReducer from "../Slice/searchGptSlice"
import configReducer from "../Slice/configSlice"
import recommendedReducer from "../Slice/recommendedSlice"
import seriesReducer from "../Slice/seriesSlice"
import selectedmediaReducer from "../Slice/selectedMediaSlice"

const appStore = configureStore({
    reducer : {
        user : userReducer ,
        recommended : recommendedReducer,
        selectedmedia :selectedmediaReducer,
        movies : movieReducer,
        series : seriesReducer,
        Gpt : GptReducer,
        config : configReducer
    },
}) 

export default appStore