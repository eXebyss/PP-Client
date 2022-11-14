const blurHandler = (e, setEmailDirty) => {
    switch (e) {
        case 'email':
            setEmailDirty(true)
            break
        default:
            setEmailDirty(true)
            break
    }
}

export default blurHandler
