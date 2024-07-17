import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ItemList from  "../components/ItemList";

import { clearCart, removeItem } from "../utils/cartSlice";



 const Cart = () => {
    ///subscribing the items
const cartItems = useSelector((store) => store.cart.items);

{console.log(cartItems)}

const dispatch = useDispatch();

const handleClearCart = (item) => {
    dispatch(clearCart(item));
};

const hanldeRemoveCart = (item) =>{
    dispatch(removeItem(item))
    notify("Item Removed");
}

 const notify = (itemName) => {
   toast.error(itemName + " ", {
     position: "bottom-left",
     autoClose: 3000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "dark",
   });
 };


    return (
      <div className="bg-red-300">
        <div className="text-center font-bold text-xl mb-4">Cart</div>
        <div className="text-center">
          <button
            className=" font-bold  bg-black text-white p-2 rounded-md"
            onClick={handleClearCart}
          >
            ClearCart
          </button>
          <button
            className=" font-bold  bg-black text-white p-2 ml-4 rounded-md"
            onClick={hanldeRemoveCart}
          >
            Remove last Item
          </button>
          <ToastContainer />
          {cartItems.length === 0 && (
            <div className="bg-red-300 flex">
              <img
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                className="w-72"
              />
              <h1 className="text-3xl mt-36 font-bold ml-16">
                Cart is Empty Add Some Items😊
              </h1>
            </div>
          )}
        </div>
        <div className="w-6/12 m-auto">
          <ItemList items={cartItems} />
        </div>
      </div>
    );
 }

 export default Cart