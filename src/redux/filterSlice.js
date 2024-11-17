// import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
//     city: '',
//     fromPrice: '',
//     toPrice: '',
//     fromAge: '',
//     toAge: '',
//     fromChest: '',
//     toChest: '',
//     fromHeight: '',
//     toHeight: '',
//     fromWeight: '',
//     toWeight: '',
//   };
//   const filterSlice = createSlice({
//     name: 'filters',
//     initialState,
//     reducers: {
//       setFilters: (state, action) => {
//         return { ...state, ...action.payload };
//       },
//       clearFilters: (state) => {
//         return initialState;
//       },
//     },
//   });
  
//   export const { setFilters, clearFilters } = filterSlice.actions;
//   export default filterSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: '',
  fromPrice: '',
  toPrice: '',
  fromAge: '',
  toAge: '',
  fromChest: '',
  toChest: '',
  fromHeight: '',
  toHeight: '',
  fromWeight: '',
  toWeight: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearFilters: () => initialState,
  },
});

export const { setFilters, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
