import React from 'react'
import {motion} from 'framer-motion'
import './Header.scss'
import {images} from '../../constants'
import {AppWrap} from '../../wrapper'

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <div className='overlay'/>
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{duration: 0.5}}
      className='app__header-info'
      >
        {/* <div>
          <img src={images.heroBg} alt="hero background" />
        </div> */}
        
        <div className='app__header-hero-text'>
          <h1>Hi, I'm Bee!</h1>
          <p>SEO Writer | Blogger | Email Marketer | Copywriter | Voice-over Artist</p>
        </div>
      </motion.div>
     
    </div>
  )
}

export default AppWrap(Header)