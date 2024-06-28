import React, {useRef, useState} from 'react'
import * as Form from '@radix-ui/react-form'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../constants/keys'
import EmailConfirmation from "./EmailConfirmation";

const wait = () => new Promise((resolve) => setTimeout(resolve, 4000));

const EmailForm = ({ setOpen, setToastOpen, setDescription, setTitle }) => {
    const form = useRef()
    // const recaptcha = useRef()

    const sendEmail = async (e) => {
        e.preventDefault();
        // console.log('captcha', recaptcha.current.getValue())
        // const captchaValue = recaptcha.current.getValue()
        // if (!captchaValue) {
        //     alert('Please verify the reCAPTCHA!')
        // } else {
        //     const res = await fetch('http://localhost:8000/verify', {
        //         method: 'POST',
        //         body: JSON.stringify({ captchaValue }),
        //         headers: {
        //             'content-type': 'application/json',
        //         },
        //     })
        //     const data = await res.json()
        //     if (data.success) {
        //         // make form submission
        //         alert('Form submission successful!')
        //     } else {
        //         alert('reCAPTCHA validation failed!')
        //     }
        // }
        // wait().then(() => setOpen(false));

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
    };

    return (
        <>
        <Form.Root className="FormRoot" id="email-form" ref={form}
                   onSubmit={sendEmail}
        >
            <Form.Field className="FormField" name="fullName">
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <Form.Label className="FormLabel">Full Name</Form.Label>
                    <Form.Message className="FormMessage" match="valueMissing">
                        Please enter your name
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input className="Input" type="text" name="user_name" placeholder="Full Name" required />
                </Form.Control>
            </Form.Field>
            <Form.Field className="FormField" name="subjectLine">
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <Form.Label className="FormLabel">Subject</Form.Label>
                    <Form.Message className="FormMessage" match="valueMissing">
                        Please enter a subject line
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input className="Input" type="text" name="subject" placeholder="Subject" required />
                </Form.Control>
            </Form.Field>
            <Form.Field className="FormField" name="email">
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
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
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <Form.Label className="FormLabel">Message</Form.Label>
                    <Form.Message className="FormMessage" match="valueMissing">
                        Please enter a message
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <textarea className="Textarea" required name="message" placeholder="Message"/>
                </Form.Control>
            </Form.Field>
            {/*<ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY} />*/}
            <Form.Submit asChild>
                <button className="Button" style={{ marginTop: 10 }}>
                    Send
                </button>
            </Form.Submit>
            <button className="Button" style={{ marginTop: 10 }} onClick={() => setOpen(false)}>
                Cancel
            </button>
        </Form.Root>
    </>
    )
}
export default EmailForm
