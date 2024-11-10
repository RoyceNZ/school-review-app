import { configureStore } from '@reduxjs/toolkit'
import selectedSchoolSlice from './selectedSchoolSlice'

export default configureStore({
  reducer: {
    // Define a top-level state field named `schools`, handled by `schoolsSlice`
    // schools: schoolsSlice,
    // Define a top-level state field named `selectedSchool`, handled by `selectedSchoolSlice`
    selectedSchool: selectedSchoolSlice,
  },
})