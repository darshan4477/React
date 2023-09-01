import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Imagesldr from './Imagesldr';
import Faculty from './Faculty';
import { Routes, BrowserRouter, Route, Router } from 'react-router-dom';
import Layout from './Layout';
import Calculator from './Calculator';
import TextConverter from './TextConverter';
import Effect from './UseEffect';
import { Students, StudentDetail } from './lab13_crud';
import Header from './Header';
import StudentAdd from './StudentAdd';
import Footer from './Footer';
// import { Student , StudentDetail } from './SatyamStu';
const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(
//   // <Students/>
//    <>
//   <BrowserRouter>
//     <Routes>
//       <Route path="/Student" element={<Students />} />
//       <Route path="/StudentDetail/:id" element={<StudentDetail />} />
//     </Routes>
//   </BrowserRouter>
//   </>
// );
// root.render(
//   <SatyamStudent/>
// );
// //4 UseEffect
// root.render(
//   <>
//     <Effect/>
//   </>
// );


// // // 1. Darshan Site
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Imagesldr />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/textConverter" element={<TextConverter heading="Enter Text"/>}></Route>
        <Route path="/student" element={<Students/>}/>
        <Route path='/studentDetail/:id' element={<StudentDetail/>}/>
        <Route path="/StudentAdd" element={<StudentAdd/>}/>
        <Route path="/StudentAdd/:id" element={<StudentAdd/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);


// // 2. Calculator
// root.render(
//   <Calculator/>
// );
