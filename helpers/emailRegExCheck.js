const emailRegExCheck = (e, setEmail, setEmailError) => {
    setEmail(e.target.value)
    const regEx =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!regEx.test(String(e.target.value).toLowerCase())) {
        setEmailError('Please provide a valid e-mail address')
    } else {
        setEmailError('')
    }
}

export default emailRegExCheck