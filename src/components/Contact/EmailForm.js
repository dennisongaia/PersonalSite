import React, {useRef} from 'react'
import * as Form from '@radix-ui/react-form'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import {APP_SITE_KEY, PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID} from '../../constants/keys'

const wait = () => new Promise((resolve) => setTimeout(resolve, 4000));

const EmailForm = ({setOpen, setToastOpen, setDescription, setTitle}) => {
    const form = useRef()
    const recaptcha = useRef()

    const sendEmail = async (e) => {
        e.preventDefault();
        const captchaValue = recaptcha.current.getValue()
        if (!captchaValue) {
            setTitle("Alert")
            setDescription("Please verify the reCAPTCHA")
            setToastOpen(true)
            wait().then(() => {
                setToastOpen(false);
            });
        } else {
            const currentUrl = window.location.origin;
            const verifyUrl = `${currentUrl}/verify`;
            const res = await fetch(verifyUrl,  {
                method: 'POST',
                body: JSON.stringify({captchaValue}),
                headers: {
                    'content-type': 'application/json',
                },
            })
            const data = await res.json()
            if (data.success) {
                emailjs
                    .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                        publicKey: PUBLIC_KEY,
                    })
                    .then(
                        () => {
                            setTitle("Success")
                            setDescription('Email sent successfully')
                            setToastOpen(true)
                        },
                        (error) => {
                            setTitle("Error")
                            setDescription("Email failed to send")
                            console.log(error.text)
                            setToastOpen(true)
                        },
                    );

                wait().then(() => {
                    setToastOpen(false);
                    setOpen(false)
                });
            } else {
                setTitle("Error")
                setDescription("reCAPTCHA validation failed")
                setToastOpen(true)
                wait().then(() => {
                    setToastOpen(false);
                });
            }
        }
    };

    return (
        <>
            <Form.Root className="FormRoot" id="email-form" ref={form}
                       onSubmit={sendEmail}
            >
                <Form.Field className="FormField" name="fullName">
                    <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                        <Form.Label className="FormLabel">Full Name</Form.Label>
                        <Form.Message className="FormMessage" match="valueMissing">
                            Please enter your name
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input className="Input" type="text" name="user_name" placeholder="Full Name" required/>
                    </Form.Control>
                </Form.Field>
                <Form.Field className="FormField" name="subjectLine">
                    <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                        <Form.Label className="FormLabel">Subject</Form.Label>
                        <Form.Message className="FormMessage" match="valueMissing">
                            Please enter a subject line
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input className="Input" type="text" name="subject" placeholder="Subject" required/>
                    </Form.Control>
                </Form.Field>
                <Form.Field className="FormField" name="email">
                    <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                        <Form.Label className="FormLabel">Email</Form.Label>
                        <Form.Message className="FormMessage" match="valueMissing">
                            Please enter your email
                        </Form.Message>
                        <Form.Message className="FormMessage" match="typeMismatch">
                            Please provide a valid email
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input className="Input" type="email" name="user_email" required placeholder="Email"/>
                    </Form.Control>
                </Form.Field>
                <Form.Field className="FormField Message" name="question">
                    <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                        <Form.Label className="FormLabel">Message</Form.Label>
                        <Form.Message className="FormMessage" match="valueMissing">
                            Please enter a message
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <textarea className="Textarea" required name="message" placeholder="Message"/>
                    </Form.Control>
                </Form.Field>
                <div className="recaptcha-container">
                    <ReCAPTCHA ref={recaptcha} sitekey={APP_SITE_KEY}/>
                </div>
                <Form.Submit asChild>
                    <button className="Button">
                        Send
                    </button>
                </Form.Submit>
                <button className="Button" onClick={() => setOpen(false)}>
                    Cancel
                </button>
            </Form.Root>
        </>
    )
}
export default EmailForm
