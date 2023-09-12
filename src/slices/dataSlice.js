import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Acción asíncrona para obtener los datos desde la API
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('https://botw-compendium.herokuapp.com/api/v3/compendium/');
  return response.data.data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: { categories: {}, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Aquí, procesamos la estructura para categorías
        action.payload.forEach(item => {
            if (!state.categories[item.category]) {
                state.categories[item.category] = [];
            }
            state.categories[item.category].push(item);
        });
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default dataSlice.reducer;
