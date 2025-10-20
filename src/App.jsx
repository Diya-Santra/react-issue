import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MAil from "./pages/MAil";
import Phone from "./pages/Phone";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/contact/phone" element={<Phone/>}/>
        <Route path="/contact/mail" element={<MAil/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path='/courses/:id' element={<CourseDetail/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
