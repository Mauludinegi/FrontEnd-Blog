import React from 'react';
import { Routes, Route } from "react-router-dom"

import {
  Home,
  Login, 
  Register} from '../../pages';
import CreateBlog from '../../pages/Create-Blog';
import DetailBlog from '../../pages/Detail-Blog';


const RoutesInit = () => {
  return (
    <div>

      <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/create-blog" element={ <CreateBlog/> }/>
          <Route path="/create-blog/:id" element={ <CreateBlog/> }/>
          <Route path="/detail-blog/:id" element={ <DetailBlog/> }/>
      </Routes>


    </div>

  )
}

export default RoutesInit;