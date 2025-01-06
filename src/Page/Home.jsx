import Banner from "../Components/Banner";
import ConnectWithUs from "../Components/ConnectWithUs";
import FeatureGame from "../Components/FeatureGame";
import HighestRating from "../Components/HighestRating";
import SuggestedGame from "../Components/SuggestedGame";


const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
<div className="relative top-10">
<section className="my-20 max-w-7xl mx-auto md:p-10 p-3">
        <h3 className=" text-2xl text-center text-gray-300">Highest Rated Games</h3>
        <HighestRating></HighestRating>
       </section>
       <section className="my-20" >
        <h3 className="text-2xl  text-center text-gray-300">Suggested Game to Play</h3>
        <SuggestedGame></SuggestedGame>
       </section>
       <section className="my-20 px-10">
        <h3 className="text-2xl mb-8 text-center text-gray-300">Featured Games of the Month</h3>
        <FeatureGame></FeatureGame>
       </section>
       <section className=" max-w-7xl my-20 px-10 mx-auto">
        <h3 className="text-3xl  py-5 text-gray-300">More about us</h3>
        <ConnectWithUs></ConnectWithUs>
       </section>
</div>
        </div>
    );
};

export default Home;