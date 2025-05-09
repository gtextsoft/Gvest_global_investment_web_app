// // import { configureStore } from '@reduxjs/toolkit';
// // import authReducer from './slices/authSlice';
// // import userReducer from './slices/userSlice';
// // import ordersReducer from './slices/ordersSlice';
// // import productsReducer from './slices/productsSlice';
// // import customersReducer from './slices/customersSlice';
// // import uiReducer from './slices/uiSlice';
// // import logger from './middleware/logger';
// // import { apiSlice } from './middleware/api';

// import { combineReducers } from "@reduxjs/toolkit"

// // export const store = configureStore({
// //   reducer: {
// //     auth: authReducer,
// //     user: userReducer,
// //     orders: ordersReducer,
// //     products: productsReducer,
// //     customers: customersReducer,
// //     ui: uiReducer,
// //     [apiSlice.reducerPath]: apiSlice.reducer,
// //   },
// //   middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware().concat(apiSlice.middleware, logger),
// //   devTools: process.env.NODE_ENV !== 'production',
// // });

// // export type RootState = ReturnType<typeof store.getState>;
// // export type AppDispatch = typeof store.dispatch;

// // import { configureStore } from '@reduxjs/toolkit'
// // import userSlice from './user/userSlice'
// // import authSlice from './auth/authSlice'

// // const store = configureStore({
// //   reducer: {
// //     user: userSlice,
// //     auth: authSlice,
// //   },
// //   devTools: true,
// // })

// // export default store
// import { configureStore } from '@reduxjs/toolkit'
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from './storage'

// import { combineReducers } from 'redux'
// import userReducer from './user/userSlice'
// import authReducer from './auth/authSlice'

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   whitelist: ['user'],
//   blacklist: ['auth'],
// }

// const rootReducer = combineReducers({
//   user: userReducer,
//   auth: authReducer,
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })
// // The store now has redux-thunk added and the Redux DevTools Extension is turned on

// a,

// export { store, persistor }

// store/store.ts
// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './slices/authSlice'
// import userReducer from './slices/userSlice'
// import ordersReducer from './slices/ordersSlice'
// import productsReducer from './slices/productsSlice'
// import customersReducer from './slices/customersSlice'
// import uiReducer from './slices/uiSlice'

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     // user: userReducer,
//     // orders: ordersReducer,
//     // products: productsReducer,
//     // customers: customersReducer,
//     // ui: uiReducer,
//   },
//   devTools: process.env.NODE_ENV !== 'production',
// })

// src/redux/store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  auth: authReducer,
  // user: userReducer,
  // settings: settingsReducer,
  // tenants: tenantsReducer,
  // dashboard: dashboardReducer,
  // billing: billingReducer,
  // notifications: notificationsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
