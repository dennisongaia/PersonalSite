import React from 'react'
import ChatBot from 'react-simple-chatbot'
import {ThemeProvider} from 'styled-components'

import avatar from '../../assets/avatar.jpeg'
import './Contact.css'
import EmailAlert from './EmailAlert'

const theme = {
    background: 'hsla(0, 0%, 100%, .3)',
    fontFamily: 'var(--bodyFont)',
    headerBgColor: 'hsla(172, 95%, 18%, 1)',
    headerFontColor: 'hsla(0, 0%, 100%, 1)',
    headerFontSize: 'var(--16px)',
    botBubbleColor: 'hsla(172, 95%, 18%, 1)',
    botFontColor: 'hsla(0, 0%, 100%, 1)',
    userBubbleColor: 'hsla(0, 0%, 100%, 1)',
    userFontColor: 'hsla(171, 15%, 35%, 1)',
};

const steps = [
    {
        id: '0',
        message: "Hi!",
        trigger: '1',
    },
    {
        id: '1',
        message: "I'm Gaia! What is your name?",
        trigger: '2',
    },
    {
        id: '2',
        user: true,
        trigger: '3',
    },
    {
        id: '3',
        message: "Hi {previousValue}!",
        trigger: '4',
    },
    {
        id: '4',
        message: "How can I help you?",
        trigger: '5',
    },
    {
        id: '5',
        options: [
            {value: 1, label: "Just saying hi!", trigger: '6'},
            {value: 2, label: "We'd like to hire you", trigger: '7'},
            // { value: 3, label: "I don't need any more help", trigger: '8' },
        ],
    },
    {
        id: '6',
        message: "😊",
        trigger: '9',
    },
    {
        id: '9',
        message: "HI!!",
        trigger: '10',
    },
    {
        id: '10',
        message: "Can I help you with anything else?",
        trigger: '5',
    },
    {
        id: '7',
        message: "🎉",
        trigger: '11',
    },
    {
        id: '11',
        message: "Awesome!",
        trigger: '12',
    },
    {
        id: '12',
        component: (
            <EmailAlert/>
        ),
        trigger: '10',
    },
];

const Contact = () => {

    return (
        <ThemeProvider theme={theme}>
            <ChatBot className="CustomChatBot" steps={steps} headerTitle="GaiaBot" floating={true} botAvatar={avatar}/>
        </ThemeProvider>
    )
}
export default Contact
