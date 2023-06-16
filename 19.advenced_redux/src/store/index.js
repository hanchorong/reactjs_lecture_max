import { configureStore } from "react-redux";

import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: { cart: cartReducer },
});

export default store;
