import { createSlice } from '@reduxjs/toolkit';

export interface GalleryState {
  galleryList: number[];
}
const initialState: GalleryState = {
  galleryList: [1],
};

const gallerySlice = createSlice({
  name: 'Gallery',
  initialState,
  reducers: {},
});

export default gallerySlice.reducer;
