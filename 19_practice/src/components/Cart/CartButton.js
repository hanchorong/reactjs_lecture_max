import { useDispatch, useSelector } from "react-redux";

import { modalActions } from "../../store/modalSlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const count = useSelector((items) => items.cart.totalQuantity);
  const dispatch = useDispatch();

  const cartButtonHandler = () => {
    dispatch(modalActions.toggle());
  };

  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
