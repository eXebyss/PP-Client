const blurHandler = (e, setEmailDirty) => {
	switch (e.target.name) {
		case 'email':
			setEmailDirty(true)
			break
		default:
			setEmailDirty(true)
			break
	}
}

export default blurHandler
