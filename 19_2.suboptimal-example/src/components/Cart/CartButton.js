import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const cartModalHandler = (e) => {
    e.preventDefault();
    dispatch(modalActions.modalToggle());
  };

  return (
    <button className={classes.button} onClick={cartModalHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
