import './index.scss'
import emailjs from '@emailjs/browser'
import {useRef} from 'react'

const Contact = () => {
    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_o8jokzn',
            'template_0rha1sq',
            refForm.current,
            '-co4TL8Smd_fQEc4N'
        )
        .then(
            () => {
                alert('Message Sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again!')
            }
        )
    }
    return (
    <>
        <div className = "contact-layout">
            <div className = 'container contact-page'>
                <div className = 'backgroundclr-contact'>
                    <div className = 'heading'>
                       <h1 className = 'text-zone-h1'>Contact Me</h1> 
                    </div>
                    <div className = 'text-zone-p'>
                        <p>
                            I am open to networking and interested to hear from anybody about job opportunities, ideas or even games. I look forward to having a chat with you! 
                        </p>
                        <div className = 'contact-form'>
                            <form ref= {refForm} onSubmit = {sendEmail}> 
                                <ul>
                                    <li className = 'half text-area1'>
                                        <input type = 'text' name= 'from_name' placeholder = 'Name' required/>
                                    </li>
                                    <li className = 'half text-area1'>
                                        <input type = 'email' name= 'email' placeholder = 'Email' required/>
                                    </li>
                                    <li className = 'text-area1'>
                                        <input type = 'text' name = 'subject' placeholder = 'Subject' required/>
                                    </li>
                                    <li>
                                        <textarea type = 'text' name = 'message' placeholder = "Message" required/>
                                    </li>
                                    <li>
                                        <input type = 'submit' className = 'flat-button' value = 'Send'/>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
    )

}

export default Contact