
import './App.css'
import Accordians from './components/Accordians';
// import BootStrap from './components/BootStrap';
import Model from './components/Model';
//  import EventHandlers from './components/EventHandlers'
 import Form1 from './components/Form1'
// import ClassComponentEx from './components/ClassComponentEx'
//  import FunctionalCompoEx from './components/FunctionalCompoEx'
// import UseEffects from './components/UseEffects'
// import UserData from './components/UserData'
import Home from './components/home';
import About from './components/aboutUs';
import UserData from './components/UserData';
import NavBar from './components/NavBar';

// import ComponentA from './components/ComponentA';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Footer from './components/Footer';

function App() {


  return (
    <>
  
      <Router>

          <NavBar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userId" element={<UserData />} />
          <Route path="/Accordians" element={<Accordians />} />
          <Route path="/Model" element={<Model />} />
          <Route path="/form" element={<Form1 />} />

        </Routes>
       
      </Router>
       <Footer />
      {/* <Home  path="/home"/>
     <About /> */}
      {/* <ClassComponentEx />
      
    
     {/* <EventHandlers /> */}
      {/* <Form1 /> */}

      {/* <FunctionalCompoEx /> 

     <UseEffects /> */}

      {/* <UserData userId={10} /> */}

      {/* <ComponentA /> */}


      {/* <BootStrap /> */}
      {/* <Accordians /> */}

    </>

  )
}

export default App
