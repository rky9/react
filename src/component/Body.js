//Chunking, Code Splitting, Dynamic bundling, Lazy Loading, On demand loading, Dynamic Import

import React, { useState } from 'react'
import { restaurantList } from '../config'
import RestrauntCard from './RestraurantCard'
const Body = ()=> {
 const [searchText, setSearchText] = useState('')
 const [restaurants, setRestaurants] = useState(restaurantList)

 function filterData(searchText, restaurants){
return restaurants.filter((r)=>r.data.name.includes(searchText))
 }
  return (
    <>  
    <div>
    <input type="text" value={searchText} placeholder='search' onChange={(e)=>{setSearchText(e.target.value)}}/>
    <button onClick={
    ()=>{
      const data = filterData(searchText, restaurants)
      setRestaurants(data)
    }

      }>Search{searchText}</button>
    </div>
    <div className='restaurant-list'>
    {restaurants.map((restaurant)=>{
        return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
    })}
    </div></>
  
  )
}

export default Body