import { createSlice } from '@reduxjs/toolkit'

export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        value: "en"
    },
    reducers: {
        switchFr: (state) => {
            state.value = "fr"
        },
        switchEn: (state) => {
            state.value = "en"
        }
    }
})

export const { switchFr, switchEn } = languageSlice.actions
export default languageSlice.reducer