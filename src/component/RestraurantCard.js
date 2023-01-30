import React from 'react'
import { IMG_CDN_URL } from '../config'

const RestrauntCard = ({name,cuisines, cloudinaryImageId, LastMileTravelString})=>{
    return(
        <div className='card'>
<img srv={IMG_CDN_URL}/>
<h2>{name}</h2>
        </div>
    )
}

export default RestrauntCard