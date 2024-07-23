import React, {useRef} from 'react'
import * as Form from '@radix-ui/react-form'
import emailjs from '@emailjs/browser'
import {APP_SITE_KEY, PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID} from '../../constants/keys'

const wait = () => new Promise((resolve) => setTimeout(resolve, 4000));

const EmailForm = ({setOpen, setToastOpen, setDescription, setTitle}) => {
    const form = useRef()

    const sendEmail = async (e) => {
        e.preventDefault();
        window.grecaptcha.ready(() => {
            window.grecaptcha.execute(APP_SITE_KEY, {action: 'submit'}).then((token) => {
                console.log('reCAPTCHA token:', token);
                if (!token) {
                    setTitle("Alert");
                    setDescription("Please verify the reCAPTCHA");
                    setToastOpen(true);
                    wait().then(() => {
                        setToastOpen(false);
                    });
                } else {
                    // Append the token to the form
                    const formData = new FormData(form.current);
                    formData.append('g-recaptcha-response', token);

                    emailjs
                        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                        .then(
                            () => {
                                setTitle("Success");
                                setDescription('Email sent successfully');
                                setToastOpen(true);
                            },
                            (error) => {
                                setTitle("Error");
                                setDescription("Email failed to send");
                                console.log(error.text);
                                setToastOpen(true);
                            },
                        );

                    wait().then(() => {
                        setToastOpen(false);
                        setOpen(false);
                    });
                }
            });
        });
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
                <div className="recaptcha-badge-container">
                    <div className="g-recaptcha-badge"></div>
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
