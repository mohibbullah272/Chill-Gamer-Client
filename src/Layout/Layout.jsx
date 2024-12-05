import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";


const Layout = () => {
    return (
        <div>
            <header>
<Navbar></Navbar>
<div className="md:my-14 mt-28  md:max-w-5xl mx-auto">
<h3 className='text-3xl font-bold text-gray-300'>Level Up Your Game Knowledge</h3> 
<p className="text-gray-400  pb-3">Expert Reviews on the Hottest Multiplayer Titles</p>
<Banner></Banner>
</div>
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