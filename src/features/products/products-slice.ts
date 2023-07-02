import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Product {
  name: string;
  id: string;
  translated: {
    description: string;
    name: string;
  };
  calculatedPrice: {
    totalPrice: number;
  };
}

export enum AvailableSortings {
  PriceDescending = "price-desc",
  PriceAscending = "price-asc",
  None = "",
}

interface ProductsSlice {
  currentProducts: Product[] | null;
  sortValue: AvailableSortings;
}

const initialState: ProductsSlice = {
  currentProducts: null,
  sortValue: AvailableSortings.None,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentProducts(state, action: PayloadAction<Product[]>) {
      state.currentProducts = action.payload;
    },
    setSortValue(state, action: PayloadAction<AvailableSortings>) {
      state.sortValue = action.payload;
    },
  },
});

export const { setCurrentProducts, setSortValue } = productSlice.actions;
export default productSlice.reducer;
