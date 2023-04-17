import React from 'react'
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
      <a href="https://twitter.com/bee_nwodu" target="_blank" rel="noreferrer">
        <BsTwitter/>
      </a> 
      </div>
      <div>
      <a href="https://twitter.com/bee_nwodu" target="_blank" rel="noreferrer">
        <BsInstagram/>
      </a> 
      </div>
      <div>
      <a href="https://twitter.com/bee_nwodu" target="_blank" rel="noreferrer">
        <BsLinkedin/>
      </a> 
      </div>  
    </div>
  )
}

export default SocialMedia