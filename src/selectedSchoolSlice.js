import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedSchool: null,
};

export const selectedSchoolSlice = createSlice({
    name: 'selectedSchool',
    initialState,
    reducers: {
        setSelectedSchool(state, action) {
            state.selectedSchool = action.payload;
        },
        clearSelectedSchool(state) {
            state.selectedSchool = null;
        },
    },
});

export const { setSelectedSchool, clearSelectedSchool } = selectedSchoolSlice.actions;

export default selectedSchoolSlice.reducer;