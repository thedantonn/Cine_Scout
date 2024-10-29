import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
    name:"series",
    initialState:{
        airingtoday: null,
        ontheair:null,
        popular:null,
        toprated:null
    },
    reducers : {
        addAiringtoday : (state,action) => {
            state.airingtoday = action.payload
        },
        addOntheair : (state,action) => {
            state.ontheair = action.payload
        },
        addPopular : (state,action) => {
            state.popular = action.payload
        },
        addToprated : (state,action) => {
            state.toprated = action.payload
        },
    }   
})

export const{addAiringtoday,addOntheair,addPopular,addToprated} = seriesSlice.actions
export default seriesSlice.reducer