import { createSlice } from '@reduxjs/toolkit'

export const backgroundSlice = createSlice({
    name: 'background',
    initialState: {
        value: 'default'
    },
    reducers: {
        switchDefault: (state) => {
            state.value = "default"
        },
        switchAcademic: (state) => {
            state.value = "academic"
        },
        switchProfessional: (state) => {
            state.value = "professional"
        }
    }
})

export const { switchDefault, switchAcademic, switchProfessional } = backgroundSlice.actions
export default backgroundSlice.reducer