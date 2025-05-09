import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Category } from '../types';

interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};

// Get All Categories
export const getAllCategories = createAsyncThunk<Category[]>(
  'category/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await useGetData('/api/v1/categories');
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'فشل في جلب التصنيفات');
      }
      return rejectWithValue('فشل في جلب التصنيفات');
    }
  }
);

// Get One Category
export const getCategory = createAsyncThunk<Category, string>(
  'category/getOne',
  async (id, { rejectWithValue }) => {
    try {
      const response = await useGetData(`/api/v1/categories/${id}`);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'فشل في جلب التصنيف');
      }
      return rejectWithValue('فشل في جلب التصنيف');
    }
  }
);

// Create Category
export const createCategory = createAsyncThunk<Category, FormData>(
  'category/create',
  async (categoryData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/v1/categories', categoryData);
      return response.data.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'فشل في إنشاء التصنيف');
      }
      return rejectWithValue('فشل في إنشاء التصنيف');
    }
  }
);

// Update Category
export const updateCategory = createAsyncThunk<Category, { id: string; categoryData: FormData }>(
  'category/update',
  async ({ id, categoryData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/v1/categories/${id}`, categoryData);
      return response.data.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'فشل في تحديث التصنيف');
      }
      return rejectWithValue('فشل في تحديث التصنيف');
    }
  }
);

// Delete Category
export const deleteCategory = createAsyncThunk<string, string>(
  'category/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/v1/categories/${id}`);
      return id;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'فشل في حذف التصنيف');
      }
      return rejectWithValue('فشل في حذف التصنيف');
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get All Categories
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Get One Category
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.categories.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) {
          state.categories[index] = action.payload;
        } else {
          state.categories.push(action.payload);
        }
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(createCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.categories.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.filter((c) => c.id !== action.payload);
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = categorySlice.actions;
export default categorySlice.reducer;
