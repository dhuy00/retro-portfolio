import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <h3>SEND MESSAGE</h3>
      <div>
        <label>NAME</label>
        <input type='text' placeholder='Your name'/>
      </div>
      <div>
        <label>Email</label>
        <input type='text' placeholder='your@email.com'/>
      </div>
      <div>
        <label>Message</label>  
        <textarea/>
      </div>  
      <button>SEND MESSAGE</button>
    </div>
  )
}

export default ContactForm
