import React from 'react'

import { Article , Brand , CTA , Feature , Navbar } from './components';
import { Blog , Features , Footer , Header , Possiblity , WhatGTP3 } from './containers';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGTP3 />
      <Features />
      <Possiblity />
      <CTA />
      <Blog />
      <Footer/>
            </div>
  )
}

export default App