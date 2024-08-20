import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { galleryApi } from './slice/gallery';

const store = configureStore({
  reducer: {
    [galleryApi.reducerPath]: galleryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(galleryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
setupListeners(store.dispatch);
export default store;
