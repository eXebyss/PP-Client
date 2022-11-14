import axios from 'axios'

const sendMessage = async (
    e,
    name,
    email,
    message,
    setSendMessageSuccess,
    setMessageSendError
) => {
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
        setSendMessageSuccess(true)
    } catch (err) {
        setMessageSendError(err.response.data.message)
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
    setSendMessageSuccess,
    setMessageSendError
) => {
    sendMessage(
        e,
        name,
        email,
        message,
        setSendMessageSuccess,
        setMessageSendError
    )
    setName('')
    setEmail('')
    setMessage('')
}

export default handleClickForMessage
