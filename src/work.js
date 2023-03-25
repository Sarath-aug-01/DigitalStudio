import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Login/Signup.jsx";
import { useContext } from "react";
import { themeContext } from "./Context";
// import Admin from "./admin/App"
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {/* <Admin /> */}
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Signup />
      
      <Portfolio />
      <Testimonial />
      <Contact />
      <Works />
      
      
      <Footer />
      
    </div>
  );
}

export default App;
