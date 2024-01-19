
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
  <div className = "min-h-screen" >
    <h1 className="font-bold text-lg ml-4 rounded-lg px-6 py-1 bg-gradient-to-b from-yellow-400 to-red-500 inline">About Us</h1>
    
    <UserClass name = "First" location = "Srikakulam"/>
    

</div> );
 
  }
}
export default About;