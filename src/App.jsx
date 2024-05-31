import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import News from "./pages/News.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
