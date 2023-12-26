import React from "react";

class UserClass extends React.Component{
    constructor(props){
          super(props);

          this.state = {
            userInfo :{
                name : "Something"

            }
            
          }
          //console.log(this.props.name +"Child Constructor");
    }
   async componentDidMount(){
         const data = await fetch("https://api.github.com/users/rajeshpekala");
         const json = await data.json();
         console.log(json);

         this.setState(
            {
                userInfo :json,
            }
         );

       // console.log(this.props.name +"Child componentdidmount");
      }
    render(){
        //console.log(this.props.name+"Child render");
     const {name,location,avatar_url} = this.state.userInfo;  
      
        return (
    
            <div className="m-4 p-2 w-[235px] rounded-lg bg-amber-200">
                <img src = {avatar_url}/>
                <h2 className="font-bold">Name:{name}</h2>
                <h2 className="font-bold">Location:{location}</h2>
                <h2 className="font-bold">pekalarajesh001gmail.com</h2>
            </div>
        );
    }
}

export default UserClass;