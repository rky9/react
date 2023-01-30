import React from 'react'

export const Title = ()=>(
    <a href='/'><img alt='Logo' src='#'/></a>
)

const Header = ()=>{
    return(<div className='header'>
<Title/>
<ul>
    <li>Nav</li>
    <li>Nav</li>
    <li>Nav</li>
    </ul>
    </div>)
}

export default Header