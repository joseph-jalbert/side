import { Link } from "react-router-dom";
function Home() {
 return (
    <main
      style={{
        maxWidth: '70%',
        padding: '1em',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: '#eee',
      }}
    >
      <section>Welcome to the home page! Here is a link to the listings page:</section>
      <Link to="/listings">View Listings</Link>
      {/* <img src={heartFill} className="App-logo" alt="favorite icon" />
      <img src={heartStroke} className="App-logo" alt="unfavorite icon" /> */}
    </main>
 );
}

export default Home;