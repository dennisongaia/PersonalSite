const { SITE_SECRET } = require('../constants/ss');

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

app.post('/verify', async (request, response) => {
    const { captchaValue } = request.body
    console.log('server', captchaValue)
    try {
        const { data } = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${SITE_SECRET}&response=${captchaValue}`,
        )
        response.status(200).send(data)
    } catch (error) {
        response.status(500).send({ error: 'Verification failed' })
    }
})

app.listen(port, () => {
    console.log(`Server listening at ${port}`)
})