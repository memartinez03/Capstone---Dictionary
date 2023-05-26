import React from 'react'
import Background from '../assets/images/old-dictionary-e1568641564797.jpg'

function About() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>

          <div className='p-5 bg-white bg-opacity-80 text-black rounded'>
            Here's a way to practice creativity and maybe even improve you mental health.
            <br />
            <br></br>Find words that having meaning to you and create your own dictionary!
            <br />
            <br></br> With many word origins, the possibilities are limitless.
          </div>
        </div>
    </div>
  )
}

export default About