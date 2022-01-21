import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE,
} from 'redux-persist/es/constants';
import cartSlice from './cart/cartSlice';
import productsSlice from './products/productsSlice';
import { productsApi } from '../services/productsApi';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [productsApi.reducerPath],
};

const rootReducer = combineReducers({
  cart: cartSlice,
  products: productsSlice,
  [productsApi.reducerPath]: productsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    },
  ).concat(productsApi.middleware),
});

export const persistor = persistStore(store);
