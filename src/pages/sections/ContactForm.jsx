import React, { useRef } from 'react';
//  import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";
import './contact-form.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    console.log(form.current);

    emailjs.sendForm('service_184qhct', 'template_qsxz9ox', form.current, '----lRTM8-ySJzsgZf0iK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
  }

  //  return (
  //    <form className='form' ref={form} onSubmit={sendEmail}>
  //      <div className="mb-3 row">
  //        <label className="col-sm-2 col-form-label">Name</label>
  //        <div className="col">
  //          <div className="col"><input type="text" name="from_name" /></div>
  //        </div>
  //      </div>

  //      <div className="mb-3 row">
  //        <label className="col-sm-2 col-form-label">Email</label>
  //        <div className="col">
  //          <div className="col"><input type="email" name="user_email" /></div>
  //        </div>
  //      </div>

  //      <div className="mb-3 row">
  //        <label className="col-sm-2 col-form-label">Message</label>
  //        <div className="col">
  //          <div className="col"><textarea name="message" /></div>
  //        </div>
  //      </div>

  //      <input className='btn btn-primary' type="submit" value="Send" />
  //    </form>
  //  )


  return <>
    <div className="container">
      <div className="row section content" id="Contact">
        <div className="col">
          <h2 className='profOrange'>Contact</h2>
          <div className='mb-3'>Thank you for visiting my portfolio, please leave a message or suggestion on your way out!</div>
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
               <div className="col"><textarea name="message" rows="3" maxLength="50"/></div>
             </div>
           </div>
           <input className='btn btn-primary' type="submit" value="Send" />
         </form>
          </div>
      </div>
    </div>
  </>
}