import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState: {
        userInfo: null,
        collection: {
            movies: [],
        },
    },

    reducers:{
        createUser:(state,action) => {
           return action.payload
        },
        addCollection:(state,action) => {
            state.collection.movies.push(action.payload)
        },
        removeUser: (state,action) => {
            return null
        }
    }
})
export const {createUser,removeUser,addCollection} = userSlice.actions
export default userSlice.reducer