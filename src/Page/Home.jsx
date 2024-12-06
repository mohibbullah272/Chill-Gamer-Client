import HighestRating from "../Components/HighestRating";


const Home = () => {
    return (
        <div>
       <section className="max-w-7xl mx-auto md:p-10 p-3">
        <h3 className="text-2xl text-center text-gray-300">Highest Rated Games</h3>
        <HighestRating></HighestRating>
       </section>
       <section>
        <h3 className="text-2xl text-center text-gray-300">Suggested Game to Play</h3>
       </section>
        </div>
    );
};

export default Home;