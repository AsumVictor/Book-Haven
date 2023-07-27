import {configureStore} from '@reduxjs/toolkit'


const store = configureStore({
    reducer: {
        book: bookReducer,
        category: categoryReducer,
    }
})

export default store