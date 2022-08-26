import React from "react"
import Search from "./Search"
import Head from "./Head"
import Navbar from "./Navbar"
import './Header.css'

const Header =({cartItem})=>{
    return(
        <>
           <Head/>
           <Search cartItem={cartItem}/>
           <Navbar/>
        </>
    )
}
export default Header