import ItemList from "../components/ItemList";
import { useState } from "react";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {

   //const [showItems,setShowItems] = useState(false);
   // console.log(data,"debug");
    const handleClick = () => {
    setShowIndex();

    };
    console.log("data",data)
    console.log(data.title);
    return(
    <div>
 <div className = "w-6/12 bg-gray-100 mx-auto my-4 border-b shadow-md p-4">
   <div className="flex justify-between cursor-pointer" onClick = {handleClick}>
    <span className = "font-bold">({data?.title })({data?.itemCards?.length})</span>
    <span>{showItems ? "🔼" : "🔽"}</span>
    </div>
   {showItems && data?.itemCards && <ItemList items = {data.itemCards}/>}
   
 </div>

    </div>
    );
}

export default RestaurantCategory;