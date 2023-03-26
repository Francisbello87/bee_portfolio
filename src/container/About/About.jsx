import React, {useEffect, useState} from 'react'
import './About.scss'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import {urlFor, client} from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'

const abouts = [
  {
    title: 'Copywriter', 
    description: 'I am an irreverent and an enthusiastic copywriter and business consultant. I am compassionate about my work and is on a mission to lead businesses into massive growth and win more profits for organizations. I employ the right tactics in drawing traffic to business blogs via ghost blogging, email marketing campaigns amongst many others.', 
    imgUrl: images.copy
  },
  {
    title: 'SEO Writer', 
    description: 'I am a SEO content writer who has successfully worked with various organizations, creating compelling content with high google rankings. Backed with a 4 years experience as an SEO content writer, with a vast knowledge on QuillBot, Chimp Rewriter and Wordpress, I have  left an array of successful projects in my wake. In addition to my works, I specialize in SEO keyword researches.', 
    imgUrl:images.seo
  },
  // {
  //   title: 'Blogger', 
  //   description: 'I write copies that help business increase their revenue x20.', 
  //   imgUrl:images.copywriting 
  // },
  // {
  //   title: 'Mewsletter Creator', 
  //   description: 'I write copies that help business increase their revenue x20.', 
  //   imgUrl:images.copywriting 
  // },
]
const About = () => {
  
//   const [abouts, setAbouts] = useState([])
// useEffect(() => {
//   const query = '*[_type == "abouts"]'

//   client.fetch(query)
//   .then((data) => {
//     setAbouts(data)
//   })
// }, [])


  return (
    <section id='about' className='app__about'>
      <h2 className='head-text'>
        I know that <span>Good SEO</span><br/> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {
          abouts.map((about, index) => (
            <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
            >
                <img src={about.imgUrl} alt={about.title} />
                <h2 className='bold-text about-title' style={{marginTop:20}}>{about.title}</h2>
                <p className='p-text' style={{marginTop:10}}>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
  ) 