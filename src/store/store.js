import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'

const store = configureStore({
    reducer: {
        auth: authReducer, // ✅ Fix — added key
    },
})

export default store