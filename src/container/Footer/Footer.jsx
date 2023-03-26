import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'
import {client} from '../../client'
import emailjs from '@emailjs/browser';
import './Footer.scss'


const Footer = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()
    let data = {
        name: name,
        email: email,
        message: message,
    }

    emailjs.send(
      "service_dsgq9ik", 
      "template_shonydf", 
      data, 
      "DAAq2VnZz1ZDszSQf"
      )
    .then((result) => {
        alert("Message Sent Successfully! 😊");
    }, (error) => {
        console.log(error.text);
    });

    console.log("sent successfully");
    setName("")
    setEmail("")
    setMessage("")
    
}
  // const [formData, setFormData] = useState({name: '', email: '', message: '' })
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  // const [loading, setLoading] = useState(false)

  // const {name, email, message} = formData;

  // const handleChangeInput = (e) => {
  //   const {name, value} = e.target;

  //   setFormData({...formData, [name]: value})
  // }

  // const handleSubmit = () => {
  //   setLoading(true)

  //   const contact = {
  //     _type: 'contact',
  //     name: name,
  //     email: email,
  //     message: message,
  //   }

  //   client.create(contact)
  //   .then(() => {
  //     setLoading(false)
  //     setIsFormSubmitted(true)
  //   })
  // }
  return (
    <>
      <h2 className='head-text'>Have a chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href='mailto:bnwodu@gmail.com' className='p-text'>bnwodu@gmail.com</a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
        <form className='app__footer-form' onSubmit={sendEmail}>
        <div className="app__flex label-input">
          <input type="text" className="p-text" 
          placeholder='Enter Your Name' 
          required
          value={name} 
          onChange={e => setName(e.target.value)} 
          name="name"
          id='name'
          />
        </div>
        <div className="app__flex">
          <input type="email" className="p-text" 
          placeholder='Enter Your E-mail' 
          value={email} 
          required
          onChange={e => setEmail(e.target.value)} 
          name="email"
          />
        </div>
        <div>
          <textarea name="message" className='p-text'
          placeholder='Enter Your Message...'
          required
          value={message}
          onChange={e => setMessage(e.target.value)} />
        </div>
        <motion.button 
        whileTap={{scale: 0.8}}
        type='submit' 
        className='p-text' 
        >
          Send
        </motion.button>
        </form>
      </div> 
      {/* <div>
          <h3 className='head-text'> Thank you for getting in touch.</h3>
      </div> */}
     
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  ) 