import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import { Typewriter } from 'react-simple-typewriter'
import { useState } from "react";

const Layout = () => {
 
    return (
        <div className="dark:bg-[#000d1a] ">
            <header>
<Navbar></Navbar>
            </header>
            <main>
<Outlet></Outlet>
            </main>
<footer>
<Footer></Footer>
</footer>

        </div>
    );
};

export default Layout;