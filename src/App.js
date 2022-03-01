import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/header';
import Home from './components/home';
import Listings from './components/listings';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="listings" element={<Listings />} />
          <Route path="*" element={<span>NOT FOUND :-( <Link to="/">~~ take me home ~~</Link></span>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
