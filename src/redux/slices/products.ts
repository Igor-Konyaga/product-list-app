import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../../services/api.ts";
import { ProductType } from "../../models/models.ts";

export type InitialStateType = {
  productsData: ProductType[];
  filteredProducts: ProductType[];
  minPriceFilter: string | number;
  maxPriceFilter: string | number;
  cheapToExpensiveSorting: boolean;
  expensiveToCheapSorting: boolean;
  isLoading: boolean;
  error: unknown | null;
}

export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkAPI) => {
    try {
      const data: ProductType[] = await fetchAllProducts();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState: InitialStateType = {
  productsData: [],
  filteredProducts: [],
  minPriceFilter: "",
  maxPriceFilter: "",
  cheapToExpensiveSorting: false,
  expensiveToCheapSorting: false,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setMinPriceFilter(state, action) {
      state.minPriceFilter = action.payload;
    },
    setMaxPriceFilter(state, action) {
      state.maxPriceFilter = action.payload;
    },
    setCheapToExpensiveSorting(state, action) {
      state.cheapToExpensiveSorting = action.payload;
    },
    setExpensiveToCheapSorting(state, action) {
      state.expensiveToCheapSorting = action.payload;
    },
    setFilteredProducts(state, action) {
      state.filteredProducts = action.payload;
    },


  },
  extraReducers: builder =>
    builder
      .addCase(getAllProducts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsData = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const {
  setMinPriceFilter,
  setMaxPriceFilter,
  setFilteredProducts,
  setCheapToExpensiveSorting,
  setExpensiveToCheapSorting,
} = productsSlice.actions;

export default productsSlice.reducer;