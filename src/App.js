import React from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/News";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./styles/Resets.css";
import "./styles/Main.css";

const App = () => {
    return(
        <div className="App">
            
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Portfolio" element={<Portfolio/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/News" element={<News/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>
            </Layout>

        </div>
    )
}


export default App;