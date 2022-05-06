import React from "react";
import emailjs from '@emailjs/browser';

export default function Form(){
    const [emailSent, setEmailSent] = React.useState(false);
    const form = React.useRef();

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
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        <span className={!emailSent ? 'email__message' : "email__message email__message-visible"}>Thank you for your message, we will be in touch in no time!</span>
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