import { Link } from "react-router-dom";
function Home() {
 return (
    <main>
      <section>Welcome to the home page! Here is a link to the listings page:</section>
      <Link to="/listings">View Listings</Link>
    </main>
 );
}

export default Home;