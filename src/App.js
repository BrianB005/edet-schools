import "./App.css";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import SearchSchools from "./pages/SearchSchools";
import SingleBlog from "./pages/SingleBlog";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<Home />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/search_schools" element={<SearchSchools />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/:blog_id" element={<SingleBlog />} />

        {/* <Route path="/events" element={<Events />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
