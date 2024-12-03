import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";


const Layout = () => {
    return (
        <div>
            <header>
<Navbar></Navbar>
<div className="my-20  md:max-w-4xl mx-auto">
<h3 className='text-3xl font-bold text-gray-300'>Level Up Your Game Knowledge</h3> 
<p className="text-gray-400">Expert Reviews on the Hottest Multiplayer Titles</p>
<Banner></Banner>
</div>
            </header>
            <main>
<Outlet></Outlet>
            </main>
<footer>

</footer>

        </div>
    );
};

export default Layout;