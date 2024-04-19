import { configureStore } from "@reduxjs/toolkit"
import Userslice from "./Userslice"
import Projectslice from "./Projectslice"



const store = configureStore({
    reducer:{
        users: Userslice,
        projects: Projectslice

    }
})

export default store;