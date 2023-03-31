import React from "react";
import { Link } from "react-router-dom";

const NavBar = ()=>{
    return(
        <nav className="bg-[#03203C] text-[#CAD5E2] sticky top-[-1px] right-0 left-0">
            <ul className="flex justify-end items-center p-4 text-2xl">
                <li className="mr-7">
                    <Link to='/' >Home</Link>
                </li>
                <li className="mr-7">
                    <Link to='/card'>Card</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;