import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Galleries from "./Components/Galleries";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import { Routes, Route } from "react-router-dom";



function App() {
    return(
        <>
        <Header/>
    
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Galleries" element={<Galleries/>}/>
            <Route path="/Works" element={<Works/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        
        </>
    );
  
}

export default App
