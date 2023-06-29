import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { sendCartData, fetchCartData } from "./store/cart-action";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.modalIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.modal.notification);

  console.log(notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showModal && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
