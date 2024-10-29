import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name : "config",
    initialState : {
        lang : "english",
        volume : false
    },
    reducers : {
        changeLanguage : (state,action) => {
            state.lang = action.payload
        },
        changeVolume : (state,action) => {
            state.volume = !state.volume
        }
    }
})

export const {changeLanguage,changeVolume} = configSlice.actions
export default configSlice.reducer