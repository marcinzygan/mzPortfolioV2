import React from "react";
import { Icon } from "@iconify/react";
import emailjs from '@emailjs/browser';

export default function Form(){
    const [emailSent, setEmailSent] = React.useState(false);
    const form = React.useRef();
    const [name, setName] = React.useState('')
   
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m4y9q3v', "template_7lswfof" , form.current, 'HVZH8z9LUzgQezsQL')
      
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset()
        setEmailSent(true)
    };

  function closeEmailAlert(){
    setEmailSent(prevState => !prevState)
  }

    return (
      <form ref={form} onSubmit={sendEmail} className="form__container">
        <label className="form__label">Name</label>
        <input type="text" name="user_name" className="form__input"value={name} onChange={e => setName(e.target.value)}/>
        <label className="form__label">Email</label>
        <input type="email" name="user_email" className="form__input"/>
        <label className="form__label">Message</label>
        <textarea name="message" className="form__input form__textarea"/>
        <input type="submit" value="Send" className="btn btn__form"/>
        <div className={!emailSent ? 'email__message' : "email__message email__message-visible"}>
      
      
          <Icon 
            icon="ep:close-bold" 
            className='modal__icon email__alert-icon' 
            onClick={closeEmailAlert}
          />
          <span className="span span__alert-top">{"<h2>"}</span>
             <h2 className="email__alert-heading">Thank You for your message
             <span className="email__alert-name">
                {" " + name.charAt(0).toUpperCase() + name.slice(1)}
              </span>
              </h2>  
              <span className="span span__alert-bottom">{"</h2>"}</span>
            <p className="email__alert-message">
              I will get back to You as soon as possible . <br></br>
              Have a nice day !
              </p>
        </div>
      </form>
    );
    // const [name, setName] = React.useState('');
    // const [email, setEmail] = React.useState('');
    // const [message, setMessage] = React.useState('');
    // const [emailSent, setEmailSent] = React.useState(false);
    // console.log(name)
    // return(
    //     <form className="form"  method="post" action="https://formsubmit.co/e1f6d3757fe87a080ec1fc9a61ae6555">

    //     <label htmlFor="Name" className="form__label">Name</label>
    //     <input 
    //     type="text" 
    //     className="form__input"
    //     value={name} 
    //     onChange={e => setName(e.target.value)}
    //     >  
    //     </input>
        
    //     <label htmlFor="Email" className="form__label">Email</label>
    //     <input 
    //     type="email" 
    //     className="form__input" 
    //     value={email} 
    //     onChange={e => setEmail(e.target.value)}
    //     >
    //     </input>
        
    //     <label htmlFor="Message" className="form__label">Message</label>
    //     <textarea  
    //     value={message} 
    //     className="form__input" 
    //     rows="10"  
    //     onChange={e => setMessage(e.target.value)}
    //     >
    //     </textarea>

    //     <span className={emailSent ? "email__sent" : null}>Thank you for your message, we will be in touch in no time!</span>
    //     <button type="submit"  className="btn">Send</button>
    //     </form>)
    
}