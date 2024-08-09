import { configureStore } from '@reduxjs/toolkit';
import gallerySlice from './slice/gallerySlice';

const store = configureStore({
  reducer: { Gallery: gallerySlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
