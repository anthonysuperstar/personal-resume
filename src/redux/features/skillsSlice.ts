import { createSlice } from '@reduxjs/toolkit'

export const skillsSlice = createSlice({
    name: 'skills',
    initialState: {
        value: "default",
    },
    reducers: {
        switchSoftSkills: (state) => {
            state.value = "softSkills"
        },
        switchHardSkills: (state) => {
            state.value = "hardSkills"
        },
        switchLanguages: (state) => {
            state.value = "languages"
        },
        switchDefault: (state) => {
            state.value = "default"
        }
    }
})

export const { switchSoftSkills, switchHardSkills, switchDefault, switchLanguages} = skillsSlice.actions
export default skillsSlice.reducer