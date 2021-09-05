// import { configureStore } from '@reduxjs/toolkit'
// import photoReducer from '../features/Photo/photoSlice'


// const rootReducer = {
//     photos: photoReducer,
// }

// const store = configureStore({
//     reducer: rootReducer,
// })

// export default store

import { configureStore } from "@reduxjs/toolkit";
import photoReducer from 'features/Photo/photoSlice';
// import userReducer from "./userSlice";

const rootReducer = {
  photos: photoReducer,
//   user: userReducer,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;