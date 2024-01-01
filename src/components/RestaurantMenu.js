import Shimmer from "./Shimmer";
import { CDN_URL, MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {


  const {resId} = useParams(); 
  const rmenu = useRestaurantMenu(resId);
  //console.log(rmenu);
  const [showIndex,setShowIndex] = useState(null);

if(rmenu === null){
    return <Shimmer/>;
}
const {name,cuisines,avgRating,costForTwo} =rmenu?.cards[0]?.card?.card?.info || rmenu?.cards[2].card?.card?.info;
//const {itemCards} = rmenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card;

console.log(rmenu.cards);

const categories =
 rmenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || rmenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
    (c)=>c?.card?.card?.["@type"]===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
 
console.log("CAtegories",categories);
    return (
        <div >
        <div  className="flex justify-center">
            <div className= " border-b p-3  border-slate-200 w-6/12 text-center shadow-md ">
               
         <h1 className = "font-bold text-xl">{name}</h1>
         <p className = "font-bold text-lg">{cuisines} - {costForTwo}</p>
        
         <div className="flex items-center justify-center">
        <h4 className="bg-green-500 rounded-lg p-2 text-white">{avgRating}⭐</h4>
            </div>

         </div>
         </div>

         <div className = "text-center" >
         

        {categories.map((category,index) =>
        //  this is a controlled component
       category?.card?.card.itemCards &&
        <RestaurantCategory 
        key={category[1]?.card?.card?.itemCards[0]?.card?.info?.id}
        data = {category?.card?.card}
        showItems ={index === showIndex?true:false}
        setShowIndex = {() => setShowIndex(index === showIndex ? null : index)}
        />)}
        

        </div>
        </div>
    )
}




export default RestaurantMenu;