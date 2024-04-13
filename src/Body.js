import Restaurant,{withOpenedLabel} from "./components/Restaurant";
import { useState,useEffect } from "react";
import Shimmer from "./components/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";


const AppBody = () => {
    const [ListofRestaurant,setListofRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");
    const[Filteredlist,setFilteredlist] = useState([]);
   
    const RestaurantClosed = withOpenedLabel(Restaurant);
    
    

    useEffect(() =>{
      fetchdata();
    },
    []
    );
    
    const fetchdata = async () => {
        const data = await fetch(
          "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonvalue = await data.json();
        console.log(jsonvalue);
        setListofRestaurant( jsonvalue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
             jsonvalue?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
             jsonvalue?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
             );
        setFilteredlist( jsonvalue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
            jsonvalue?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
            jsonvalue?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
    //   https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    }
    

    
    const onlinestatus = useOnlineStatus();
    if (onlinestatus === false)
   return (<h1>You are Offline</h1>)
    ///u need to use to return to get render in react
    
    if (!ListofRestaurant || ListofRestaurant.length === 0) {
        return <Shimmer />;
      }

    


    return(
        
        <div className = "min-h-screen">
            <div className="flex flex-col sm:flex sm:flex-row sm:justify-center" >
         
            <div className=" my-3 sm:my-0">
            <input
            className="  border-2 border-black rounded-md ml-4 sm:ml-0 sm:px-0"
             type="text"
             placeholder="Search restaurants..."
             value = {searchText}
             onChange={ (e) => {
              setSearchText(e.target.value);
             }
            }
                  />
                  <button
                  className="px-2  sm:m-2 ml-4 mr-2 bg-blue-300  rounded-lg "
                  onClick={() =>{
                    
                    const list1 = ListofRestaurant.filter((val) =>
              val.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredlist(list1);
                  
                  }}
                  >Find Restaurants</button>
            </div>
            
            <div className ="sm:mt-1 m-auto sm:m-0 sm:ml-4 px-1">
                <button className = "  bg-red-300 rounded-lg py-1"  type = "button"
                onClick={ ()=>{
                    
                    const filteredList = ListofRestaurant.filter(
                       (res) => 
                         res.info.avgRating > 4.0   
                    );
                    setFilteredlist(filteredList);
                }} 

                >TopRatedRestaurants</button>
               </div>
            </div >

            <div className = "flex flex-wrap justify-center">
        {Filteredlist.map((restaurant) =>  (
       <Link
       className = "resline"
       key ={restaurant.info.id}
       to ={"/restaurants/"+restaurant.info.id}>
       {restaurant.info.availability.opened? 
       <Restaurant resdata = {restaurant}/>:
       <RestaurantClosed resdata = {restaurant}/>}
        
        </Link> 
        )
        )}
            
        </div>
        </div>

    );
};

export default AppBody;