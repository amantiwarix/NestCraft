import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Footer from './Component/Footer/Footer'
import VideoPlayer from './Component/VedioPlayer/VideoPlayer'


const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our ' title='What We Offer'/>
        <Programs />
        <About setPlayState={setPlayState}/>
        <Footer/>
      </div>  
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
