import axios from 'axios'

// import { REST_API_URL } from '../../config/config'

const sendMessage = async (e, name, email, message) => {
    e.preventDefault()
    const date = new Date(Date.now())
    try {
        await axios.post(process.env.NEXT_PUBLIC_REST_API_URL, {
            name: name,
            email: email,
            message: message,
            date: date,
            dateString: date.toLocaleString('lv-LV', {
                hour12: false,
            }),
        })
    } catch (err) {
        /* eslint-disable */
        console.log(`${err.response.data.message}.`, 'Error 1: post')
        /* eslint-enable */
    }
}

const handleClickForMessage = async (
    e,
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    setSuccess
) => {
    sendMessage(e, name, email, message)
    setName('')
    setEmail('')
    setMessage('')
    setSuccess(true)
}

export default handleClickForMessage
