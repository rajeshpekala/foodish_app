
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
    <div className="min-h-screen bg-gradient-to-t to-black from-slate-500 ">
      <div className="flex justify-center ">
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-4xl ml-10">About Us</h1>

          <UserClass name="First" location="Srikakulam" />
        </div>
      </div>
    </div>
  );
 
  }
}
export default About;