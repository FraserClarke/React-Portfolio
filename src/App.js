import React from "react";
import './App.css';
// import Main from './Pages/Main/main';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import About from './components/About';
import TechStack from './components/TechStack';
import Adjuster from './components/Adjuster';
import { BrowserRouter as Router }from 'react-router-dom';

function App() {
  return (
		<div className='App'>
        <Router>
			          
        <Navbar />
        <Home />
        <About/>
	    	<TechStack />
	    	<Adjuster />
        <ProjectList/>
        <Footer />
    
		</Router>
		</div>
  );
}

export default App;