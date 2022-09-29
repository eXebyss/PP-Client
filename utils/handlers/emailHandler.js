const emailHandler = (e, setEmail, setEmailError) => {
    setEmail(e.target.value)
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError('Please provide a valid e-mail address')
    } else {
        setEmailError('')
    }
}

export default emailHandler
