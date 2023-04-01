import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import News from "./Components/News";
import About from "./Components/About";
import Carousel from "./Components/Carousel";
import Subs from "./Components/Subs";
import RokerApp from "./Components/RokerApp";
import Feature from "./Components/Features"; 
import TechStack from "./Components/TechStack";
import Advantage from "./Components/Advantage";
import Description from "./Components/Description";
import Impact from "./Components/Impact";
import Partner from "./Components/Partner";
import Particular from "./Components/Particular";
import RokerPlus from "./Components/RokerPlus"

function App() {


  return (
    <>
    <div id="h"></div>
    <div className="CircleShape a"></div>
    <div className="CircleShape b"></div>
    
    <div className="CircleShape c"></div>
   
    <Navbar/>
    <News/>
    <Carousel />
    <About/>
    <Feature/>
    <Description/>
    <Advantage/>
    <Subs/>
    <RokerPlus/>
    <Particular/>
    <RokerApp/>
    <Impact/>
    <Partner/>
    <TechStack/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
