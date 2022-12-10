import React from 'react'
import { Route} from 'react-router-dom'
import { Footer, Header } from '../../components'
import { Routes } from '../../config'
import CreateBlog from '../Create-Blog'
import DetailBlog from '../Detail-Blog'
import Home from '../Home'
import './mainApp.scss'

const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
          <Header/>
        <div className='content-wrapper'>
              <Routes>
                  <Route path="/create-blog" element={ <CreateBlog/> }/>
                  <Route path="/detail-blog" element={ <DetailBlog/> }/>
                  <Route path="/" element={ <Home/> }/>                
              </Routes>
        </div>
          <Footer/>
    </div>
  )
}

export default MainApp