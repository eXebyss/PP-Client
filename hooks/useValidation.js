function useValidation() {
	const emailValidation = (props) => {
		const emailRegEx =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

		if (emailRegEx.test(String(props).toLowerCase())) {
			return true
		} else {
			return false
		}
	}

	return { emailValidation: emailValidation }
}

export default useValidation
