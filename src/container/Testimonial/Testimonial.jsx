import React, {useState} from 'react'
import {motion} from 'framer-motion'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import {AppWrap, MotionWrap} from '../../wrapper'
import {images} from '../../constants'
import './Testimonial.scss'

const testimonials = [
  {
    name: ' Francis Bello',
    company: 'Bee Consult',
    feedback: 'Bee wrote copies that helped in converting more sales for our products',
    imgUrl: images.Francis,
  },
  {
    name: ' Gbeminiyi Bello',
    company: 'Bee Consult',
    feedback: 'Bee is a professional SEO writer that has helped our website improve its ranking.',
    imgUrl: images.download,
  }
]
const Testimonial = () => {
  const [brands, setBrands] = useState([])
  // const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (index) => {
    setCurrentIndex(index)
  }
  const test = testimonials[currentIndex]
  return (
    <section id="testimonial">
      {
        testimonials.length && (
          <>
          <div className="app__testimonial-item app__flex">
                <img src={test.imgUrl} alt="testimonial" />
                <div className="app__testimonial-content">
                  <p className='p-text'>{test.feedback}</p>
                  <div>
                    <h4 className="bold-text">{test.name}</h4>
                    <h4 className="p-text">{test.company}</h4>
                  </div>
                </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div className="app__flex" onClick={() =>  handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() =>  handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>

          </div>
         
          </>
        )
      }
    </section>
  )
}
 

  export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonial'),
    'testimonials',
    "app__whitebg"
    ) 