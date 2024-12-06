import ConnectWithUs from "../Components/ConnectWithUs";
import HighestRating from "../Components/HighestRating";
import SuggestedGame from "../Components/SuggestedGame";


const Home = () => {
    return (
        <div>
       <section className="max-w-7xl mx-auto md:p-10 p-3">
        <h3 className="text-2xl text-center text-gray-300">Highest Rated Games</h3>
        <HighestRating></HighestRating>
       </section>
       <section>
        <h3 className="text-2xl text-center text-gray-300">Suggested Game to Play</h3>
        <SuggestedGame></SuggestedGame>
       </section>
       <section className="max-w-7xl my-10 px-10 mx-auto">
        <h3 className="text-3xl py-5 text-gray-300">More about us</h3>
        <ConnectWithUs></ConnectWithUs>
       </section>
        </div>
    );
};

export default Home;