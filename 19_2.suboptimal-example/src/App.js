import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { modalActions } from "./store/modal-slice";

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

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        modalActions.setNotification({
          status: "pending",
          title: "sending...",
          message: "Sending cart data!",
        })
      );

      const response = await fetch(
        "https://react-http-f8cdf-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      // const responseData = await response.json();

      dispatch(
        modalActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        modalActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    });
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
