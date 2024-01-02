import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const Footer = () => 
 <div
className = "bg-black border "
>
    <div className=" items-center  sm:items-start  flex flex-col sm:flex-row     ">
  <div>
<h3 className = "font-bold py-1  text-white text-xl ml-3 ">&copy; All rights reserved to Magicc &#169;</h3>
</div>
<div  className = "flex flex-col px-8 py-1  list-none text-white mx-8">
    <h3 className ="font-bold text-xl">Follow Us on</h3>
    <li className="py-2 text-lg"><Link to = "https://www.facebook.com/" target="_blank">  <FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#fefbfb",}} /></Link></li>
    <li className="py-2  text-lg"><Link to = "https://www.instagram.com/myself__p_r_e_m/" target="_blank"> <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#fefbfb",}} /></Link></li>
    <li className ="py-2 text-white" > <FontAwesomeIcon icon={faPhone} size="xl" style={{color: "#fefbfb",}} /> 1800128283</li>
</div >

<div className = "flex flex-col px-8 py-1 list-none mx-8  text-white">
    <h3 className ="font-bold text-xl">Contact Us</h3>
    <li className ="font-bold text-sm pt-2">Head Office</li>
    <li className ="">Srikakulam</li>
    <li className =" ">AndhraPradesh</li>
    <li className="py-2  text-lg">< Link to = "https://www.linkedin.com/in/rajesh-pekala-a6827b259/" target="_blank"> <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#fefbfb",}} /></Link></li>
</div> 

<div className = "flex flex-col px-8 sm:py-0 list-none ml-8  text-white">
    <h3 className ="font-bold text-white text-xl">We Deliver to:</h3>
    <li className ="">Bangalore</li>
    <li className =" ">Hyderabad</li>
    <li className =" ">Vishakapatnam</li>
    <li className =" ">Chennai</li>
</div>

<div className = "flex flex-col px-8 sm:py-0 list-none ml-8  text-white">
    <h3 className ="font-bold text-white text-xl">Legal</h3>
    <li className ="">Terms & Conditions</li>
    <li className =" ">Cookie Policy</li>
    <li className =" ">Privacy Policy</li>
    <li className =" ">Chennai</li>
</div>

</div>


</div>









export default Footer;
