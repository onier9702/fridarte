
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../components/Home';
import { Search } from '../components/Search';
import { About } from '../components/About';
import { Navbar } from '../Navbar';
import { Contact } from '../components/Contact';


export const IntExtRouter = () => {


  return (


    <div className="rutas">

        <Navbar />
        <div className="columna" >
            <Routes >
                <Route path="/home"     element={ <Home /> } />
                <Route path="/search"   element={ <Search /> } />
                <Route path="/about"    element={ <About /> } />
                <Route path="/contact"  element={ <Contact /> } />
                <Route path="*"         element={ <Home /> }/>
            </Routes>
        </div>
    
    </div>

    // <>
    //   <div className="container-sm">

    //     <div className="row">


    //       <div className="col-4 col-sm-4"  >
    //         <Navbar />
    //       </div>

    //       <div className="col-8 col-sm-8" >

    //           <Routes >
    //               <Route path="/home"         element={ <Home /> } />
    //               <Route path="/search"       element={ <Search /> } />
    //               <Route path="/about"        element={ <About /> } />
    //               <Route path="/contact"      element={ <Contact /> } />

    //               <Route path="*"      element={ <Home /> }/>

    //           </Routes>
    //       </div>
    //     </div>
    
    //   </div>
    // </>
  )
}
