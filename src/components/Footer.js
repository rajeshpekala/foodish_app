import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const Footer = () => 
 <div
className = "bg-black flex flex-row "
>
    <div className = "font-bold py-1 list-none text-white">

<li>&copy; All rights reserved to Magicc &#169;</li>
</div>

<div  className = "flex flex-col px-8 py-1 mx-8 list-none text-white">
    <h3 className ="font-bold">Contact Us</h3>
    <li className="py-2 text-lg"><FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#fefbfb",}} /></li>
    <li className="py-2  text-lg"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#fefbfb",}} /></li>
    <li className ="py-2 text-white" > <FontAwesomeIcon icon={faPhone} size="xl" style={{color: "#fefbfb",}} /> 1800128283</li>
</div>

<div className = "flex flex-col px-8 py-1 list-none">
    <h3 className ="font-bold text-white">Head Office</h3>
    <li className =" text-white">Srikakulam</li>
    <li className =" text-white">AndhraPradesh</li>
</div> 

<div className = "flex flex-col px-8 py-1 list-none">
    <h3 className ="font-bold text-white">We Deliver to:</h3>
    <li className =" text-white">Bangalore</li>
    <li className =" text-white">Hyderabad</li>
    <li className =" text-white">Vishakapatnam</li>
    <li className =" text-white">Chennai</li>
</div>


</div>









export default Footer;
