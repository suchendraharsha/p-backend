import React from 'react'

import Login from './Login'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Signup from './Signup'

import Header from './components/Header'

import MyBio from './components/MyBio'

import Page from './components/Page'

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    <Route path='/home' element={<Header />}></Route>
    <Route path='/project' element={<MyBio />}></Route>
    <Route path = "/about-us" element={<Page />}></Route>
  </Routes>
  </BrowserRouter>  
  )}
export default App