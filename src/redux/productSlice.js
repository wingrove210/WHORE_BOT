import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронное действие для получения товаров
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
  try {
  const response = await axios.get('https://backend.angels-agency.ru/model/');
  const formattedData = response.data
    .filter(item => item.Model && item.Model.id && item.Model.img && item.Model.img.length > 0)
    .map(item => ({
      id: item.Model.id,
      name: item.Model.name,
      city: item.Model.city || 'Неизвестный город',
      height: item.Model.height || 'Неизвестно',
      weight: item.Model.weight || 'Неизвестно',
      chest: item.Model.chest || 'Неизвестно',
      age: item.Model.age || 'Неизвестно',
      photo: item.Model.img,
      shoes: item.Model.shoes || 'Неизвестно',
      cloth: item.Model.cloth || 'Неизвестно',
      hair: item.Model.hair || 'Неизвестно',
      appereance: item.Model.appereance || 'Неизвестно',
      price1Hour: item.Model.day_1_hour || '--',
      price2Hours: item.Model.day_2_hour || '--',
      price1HourNight: item.Model.night_1_hour || '--',
      priceAllNight: item.Model.night_all || '--'
    }));
  return formattedData;
} catch (error) {
  console.log(error);
  console.log(rejectWithValue(error.response?.data?.message || 'Произошла ошибка'))
  return rejectWithValue({
    message: error.response?.data?.message || 'Произошла ошибка',
    statusCode: error.response?.status || 500,
  }
);
}
  });

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    selectedProduct: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


// Загрузка сохраненного состояния о товаре

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
