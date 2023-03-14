import React, { useRef } from 'react';
//  import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";
import './contact-form.css'

export const ContactUs = () => {
  const form = useRef();
  const sendButton = useRef();

  // console.log(sendButton.current);

  const sendEmail = (e) => {
    e.preventDefault();
    
    sendButton.current.childNodes[1].childNodes[0].classList.add('sending')
    sendButton.current.childNodes[0].classList.add('buttonHide')
    sendButton.current.childNodes[1].classList.remove('buttonHide')
    console.log(form.current);

    // lRTM8-ySJzsgZf0iK
    emailjs.sendForm('service_184qhct', 'template_qsxz9ox', form.current, 'lRTM8-ySJzsgZf0iK')
      .then((result) => {
          console.log(result.text);

          form.current.childNodes[0].childNodes[0].value = ""
          form.current.childNodes[1].childNodes[0].value = ""
          form.current.childNodes[2].childNodes[0].value = ""

          sendButton.current.childNodes[1].childNodes[0].classList.remove('sending')
          sendButton.current.childNodes[1].childNodes[0].innerText = 'Success'

          setTimeout(() => {            
            sendButton.current.childNodes[0].classList.remove('buttonHide')
            sendButton.current.childNodes[1].classList.add('buttonHide')
            setTimeout(() => {
              sendButton.current.childNodes[1].childNodes[0].classList.add('sending')
              sendButton.current.childNodes[1].childNodes[0].innerText = 'Sending'
            }, 1000);
          }, 1000);
      }, (error) => {
          console.log(error.text);
      })
  }

  return <>
    <div className="container form">
      <div className="row section" id="Contact">
        <div className="col">
          <h2 className='profOrange mb-4'>Contact</h2>
          <div className='mb-5'>Hey there! Thanks for checking out my portfolio website! If you have any suggestions or feedback, I'd love to hear it. Let me know what you think or get in Contact!</div>
            <form ref={form} onSubmit={sendEmail}>

            {/* Name */}
            <div className="mb-5 wave-group">
              <input required type="text" className="input" name="from_name" />
              <span className="bar"></span>
              <label className="label">
                <span className="label-char" style={{ '--index': 0 }}>N</span>
                <span className="label-char" style={{ '--index': 1 }}>a</span>
                <span className="label-char" style={{ '--index': 2 }}>m</span>
                <span className="label-char" style={{ '--index': 3 }}>e</span>
              </label>
            </div>


            {/* Email */}
            <div className="mb-5 wave-group">
              <input required type="email" className="input" name="user_email" />
              <span className="bar"></span>
              <label className="label">
                <span className="label-char" style={{ '--index': 0 }}>E</span>
                <span className="label-char" style={{ '--index': 1 }}>m</span>
                <span className="label-char" style={{ '--index': 2 }}>a</span>
                <span className="label-char" style={{ '--index': 3 }}>i</span>
                <span className="label-char" style={{ '--index': 4 }}>l</span>
              </label>
            </div>

            {/* Message */}
            <div className="mb-5 wave-group">
              <textarea required type="text" className="input" name="message"  rows="3" maxLength="144" />
              <span className="bar"></span>
              <label className="label">
                <span className="label-char" style={{ '--index': 0 }}>M</span>
                <span className="label-char" style={{ '--index': 1 }}>e</span>
                <span className="label-char" style={{ '--index': 2 }}>s</span>
                <span className="label-char" style={{ '--index': 3 }}>s</span>
                <span className="label-char" style={{ '--index': 4 }}>a</span>
                <span className="label-char" style={{ '--index': 5 }}>g</span>
                <span className="label-char" style={{ '--index': 6 }}>e</span>
              </label>
            </div>

            {/* TODO: Change Button on Submit */}
            {/* Button */}
            <div ref={sendButton} className="sendingButtons">
              <div className="button-grid-item">
                <input className='btn btn-primary' type="submit" value="Send" />
              </div>
              <div className="btn btn-primary button-grid-item buttonHide">
                <span className="sending">Sending</span>
              </div>
            </div>
         </form>
          </div>
      </div>
    </div>
  </>
}