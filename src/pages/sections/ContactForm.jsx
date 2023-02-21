import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";
import './contact-form.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_184qhct', 'template_qsxz9ox', form.current, 'lRTM8-ySJzsgZf0iK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
      // e.reset()
  }

  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Name</label>
        <div className="col">
          <div className="col"><input type="text" name="from_name" /></div>
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col">
          <div className="col"><input type="email" name="user_email" /></div>
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Message</label>
        <div className="col">
          <div className="col"><textarea name="message" /></div>
        </div>
      </div>

      <input className='btn btn-primary' type="submit" value="Send" />
    </form>
  )
}

{/* <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div> */}