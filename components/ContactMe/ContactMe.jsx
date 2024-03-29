import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import React, { useContext } from 'react'

import { Spinner } from '../../components/Icons'
import { ContentfulContext } from '../../context'
import { useIntersectionObserver } from '../../hooks'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'
import Toast from '../UI/Toast'
import useContactMe from './useContactMe'

function ContactMe() {
	const { contactMeForm: contactFormCMSData } = useContext(ContentfulContext)
	const { useAppear } = useIntersectionObserver()

	useAppear('appear', 'disappear')
	useAppear('appearLeft', 'disappearLeft')
	useAppear('appearTop', 'disappearTop')

	const {
		name,
		setName,
		email,
		setEmail,
		message,
		setMessage,
		emailDirty,
		isLoading,
		emailErrorMessage,
		formValid,
		messageSendSuccess,
		messageSendError,
		blurHandler,
		handleSendMessage,
	} = useContactMe()

	const contactFormData = contactFormCMSData[0].fields

	const contactMeForm = (
		<>
			<section className="disappear">
				<Input
					text={'What is your name?'}
					placeholder={'Your name'}
					type={'text'}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					text={'What is your e-mail?'}
					placeholder={'Your e-mail'}
					type={'email'}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					onBlur={(e) => blurHandler(e.target.name)}
				/>
				{emailDirty && emailErrorMessage && (
					<div className="text-error mt-2">{emailErrorMessage}</div>
				)}
				<Textarea
					text={'What is your message?'}
					placeholder={'Your message...'}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</section>
			<section className="disappearTop">
				<Button
					disabled={!formValid}
					onClick={(e) => handleSendMessage(e)}
				>
					Submit
				</Button>
			</section>
		</>
	)

	const successMessage = (
		<div className="card w-96 bg-base-100 shadow-lg my-2 md:my-4 mx-auto">
			<div className="card-body">
				<h2 className="card-title text-center justify-center text-primary">
					Thank you!
				</h2>
			</div>
		</div>
	)

	const errorMessage = (
		<div className="card w-96 bg-base-100 shadow-lg my-2 md:my-4 mx-auto">
			<div className="card-body">
				<h2 className="card-title text-center justify-center text-error">
					An error occurred!
				</h2>
				<p>
					<b>[ Error message ]:</b>
				</p>
				<p>{messageSendError}</p>
			</div>
		</div>
	)

	return (
		<div className="hero bg-base-200" id="contact">
			<div className="hero-content text-center w-full">
				<form className="w-full">
					<h2 className="text-5xl font-bold pt-3 md:pt-6">
						{contactFormData.contactMeTitle}
					</h2>
					<div className="text-justify md:text-center py-2 md:py-4 disappearLeft">
						{documentToReactComponents(
							contactFormData.contactMeFormText
						)}
					</div>
					<div>
						{(isLoading && (
							<Spinner className="animate-spin h-10 w-10 fill-primary mx-auto my-4" />
						)) ||
							(messageSendSuccess
								? successMessage
								: messageSendError
								? errorMessage
								: contactMeForm)}

						{messageSendSuccess ? (
							<Toast
								type="success"
								message={'Your message has been sent!'}
							/>
						) : (
							''
						)}
						{messageSendError ? (
							<Toast errorMessage={messageSendError} />
						) : (
							''
						)}
					</div>
				</form>
			</div>
		</div>
	)
}

export default ContactMe
