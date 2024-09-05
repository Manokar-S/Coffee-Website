// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";

// import Navbar from './components/Navbar/Navbar';
import BackgroundImage from './components/Navbar/BackgroundImage';
import BackgroundVideo from './components/Navbar/BackgroundVideo';
import StudentCrud from './components/StudentCrud';
import Contact from './components/Contact';
import Backimg1 from './components/Backimg1';
import About from './components/About';
import Product from './components/Product';
import Footer from './components/Footer';
import Coffeecotiner from './components/Coffeecontainer';
import Shop from './components/Shop';
import Blog from './components/Blog';
import { ContactUs } from './components/ContactUs';
import Backimg2 from './components/Backimg2';
import Herosection from './components/Herosection';






// import Form from './components/Form';



function App() {
    return (
        <div>
            <Backimg1/>
            <Herosection/>
            {/* <Backimg2/> */}
            {/* <ContactUs/> */}
            {/* <About/> */}
            {/* <Coffeecotiner/> */}
            {/* <Blog/> */}
            {/* <Shop/> */}
            {/* <Footer/> */}
            {/* <Product/> */}
            {/* <StudentCrud/> */}

        </div>
        // <Router>
        //     <div>
        //         {/* <Navbar/> */}
        //         {/* <BackgroundImage/> */}
        //         <BackgroundVideo/>
        //         <Routes>
        //         <Route path="/" element={<Backimg1 />} />
        //         <Route path="/Home" element={<Backimg1 />} />
        //         <Route path="/StudentCrud" element={<StudentCrud />} />
        //         <Route path="/About" element={<Contact />} />
        //         </Routes>
        //     </div>
        // </Router>
    );
}

export default App;
