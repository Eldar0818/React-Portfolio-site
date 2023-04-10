import './style.css'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <header className="contact-header">
            <h1>Contact Me</h1>
            <div className="contact-underline"></div>
        </header>
        <div className='contact-wrapper'>
            <div className='contact-items'>
                <div className="contact-details">
                <div className="contact-description">If your team need a developer with problem solving and quick learning ability then please don't hasetate to contact me, I will reply you as sson as possible.</div>
                    <h4>Contact Details</h4>
                    <p><span className='contact-type'>Phone Call: </span> +46-72-840-3982</p>
                    <p><span className='contact-type'>Email: </span>eldar940818@gmail.com</p>
                </div>
                <div className="contact-form">
                    <form 
                        action='https://getform.io/f/98bf9b4e-be48-4b34-ae4b-b0633ff91baa'
                        method='POST'
                        className='form-body'>
                        <h4>Don't want to call or send email?</h4>
                        <h2>Contact me directly</h2>
                        <input type="text" name='name' placeholder='Your/Company/Team name' />
                        <input type="text" name='subject' placeholder='Subject' />
                        <input type="email" name='email' placeholder='Email address'/>
                        <textarea placeholder='Message' name='message'></textarea>
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact