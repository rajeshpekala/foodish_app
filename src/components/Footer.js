import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const Footer = () => 
 <div
className = "bg-black flex flex-col sm:flex-row sm:mt-12 justify-center "
>
    
    <div className = "font-bold py-1 list-none text-white mr-8">

<li>&copy; All rights reserved to Magicc &#169;</li>
</div>



<div  className = "flex flex-col px-8 py-1  list-none text-white mx-8">
    <h3 className ="font-bold">Follow Us on</h3>
    <li className="py-2 text-lg"><Link to = "https://www.facebook.com/" target="_blank">  <FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#fefbfb",}} /></Link></li>
    <li className="py-2  text-lg"><Link to = "https://www.instagram.com/myself__p_r_e_m/" target="_blank"> <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#fefbfb",}} /></Link></li>
    <li className ="py-2 text-white" > <FontAwesomeIcon icon={faPhone} size="xl" style={{color: "#fefbfb",}} /> 1800128283</li>
</div >

<div className = "flex flex-col px-8 py-1 list-none mx-8">
    <h3 className ="font-bold text-white ">Contact Us</h3>
    <li className ="font-bold text-white text-sm pt-2">Head Office</li>
    <li className =" text-white">Srikakulam</li>
    <li className =" text-white">AndhraPradesh</li>
    <li className="py-2  text-lg">< Link to = "https://www.linkedin.com/in/rajesh-pekala-a6827b259/" target="_blank"> <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#fefbfb",}} /></Link></li>
</div> 

<div className = "flex flex-col px-8 py-1 list-none ml-8">
    <h3 className ="font-bold text-white">We Deliver to:</h3>
    <li className =" text-white">Bangalore</li>
    <li className =" text-white">Hyderabad</li>
    <li className =" text-white">Vishakapatnam</li>
    <li className =" text-white">Chennai</li>
</div>





</div>









export default Footer;
