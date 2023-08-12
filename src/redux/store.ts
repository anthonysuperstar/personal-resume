import { configureStore } from "@reduxjs/toolkit"
import languageReducer from "./features/languageSlice"
import skillReducer from "./features/skillsSlice"
import backgroundReducer from "./features/backgroundSlice"

export default configureStore({
    reducer: {
        language: languageReducer,
        skills: skillReducer,
        background: backgroundReducer
    },
})
