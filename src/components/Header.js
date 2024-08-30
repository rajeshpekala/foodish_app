import { LOGO_URL } from "../utils/constants";
import {useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
const [btnname,setBtnname] = useState("login");
const onlinestatus =useOnlineStatus();

const {loggedInUser} = useContext(UserContext);

//subscribing to the store using selector
const cartItems = useSelector((store) => store.cart.items);




// console.log("page rendered");
// useEffect(
//     () => {
//         console.log("useeffect render");
//     },[btnname]
// ); 

    return (
      <div className="flex justify-between  bg-gradient-to-tr from-yellow-300 to-red-300 shadow-md m-">
        <div className="logo-container">
          <Link to="/">
            <img className="w-24 md:w-32 lg:w-24" src={LOGO_URL} alt="logo" />
          </Link>
        </div>

        <div className="flex  items-center">
          <ul className="flex p-3 m-3">
            <li className="px-4 font-bold text-lg hidden md:block">
              OnlineStatus:{onlinestatus ? "✅" : "🚨"}
            </li>
            <li className="px-4">
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} size="2xl" />
              </Link>
            </li>
            <li className="px-4 font-bold text-lg  ">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 font-bold text-lg hidden md:block">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4 font-bold text-lg hidden md:block">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4 text-lg font-bold">
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="2xl"
                  style={{ color: "#183153" }}
                />
                ({cartItems.length}-Items)
              </Link>
            </li>

            <button
              className="font-bold text-lg hidden md:block"
              onClick={() => {
                btnname === "login"
                  ? setBtnname("logout")
                  : setBtnname("login");
              }}
            >
              {btnname}
            </button>
            <li className="px-4 py-1 font-bold text-lg hidden md:block">
              {loggedInUser}
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    );
};

export default Header;