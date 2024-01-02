
import HamburgerButton from "../utils/HamburgerButton";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
  constructor(props){
   super(props);
   //console.log("PArent Constructor");
  }
  componentDidMount(){
    //console.log("Parent componentdidmount");
  }
render(){
   //console.log("Parent render");
  return ( 
  <div >
    <h1 className="font-bold text-lg ml-8">About Us</h1>
    
    <UserClass name = "First" location = "Srikakulam"/>
    

</div> );
 
  }
}
export default About;