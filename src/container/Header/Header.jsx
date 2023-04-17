import React from 'react'
import {motion} from 'framer-motion'
import './Header.scss'
import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
       <motion.div  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{duration: 0.5}} className='app__header-hero-text'>
            <h1>Hi, I'm Bee!</h1>
            <p>SEO Writer | Blogger | Email Marketer | Copywriter | Voice-over Artist</p>
      </motion.div>
      <motion.div
      whileInView={{ x: [-20, 100], opacity: [0, 1] }}
      transition={{duration: 0.5}}
      className='app__header-info'
      >
        
          <img src={images.life} alt="hero background" />
        
      </motion.div>
    </div>
    
  )
}

export default AppWrap(
  MotionWrap(Header, 'app__header'),
  'header',

  ) 