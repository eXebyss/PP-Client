import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import React, { useEffect, useState } from 'react'

import handleClickForMessage from '../../context/actions/sendMessage'
import emailRegExCheck from '../../helpers/emailRegExCheck'
import { blurHandler } from '../../utils/handlers'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'

function ContactMe({ props }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [emailError, setEmailError] = useState('Email address is required')
    const [emailDirty, setEmailDirty] = useState(false)
    const [formValid, setFormValid] = useState(false)
    const [sendMessageSuccess, setSendMessageSuccess] = useState(false)
    const [messageSendError, setMessageSendError] = useState('')

    useEffect(() => {
        if (emailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError])

    const contactFormData = props[0].fields

    const contactMeForm = (
        <>
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
                onChange={(e) =>
                    emailRegExCheck(e.target.value, setEmail, setEmailError)
                }
                onBlur={(e) => blurHandler(e.target.name, setEmailDirty)}
            />
            {emailDirty && emailError && (
                <div className="text-error mb-2 md:mb-4">{emailError}</div>
            )}
            <Textarea
                text={'What is your message?'}
                placeholder={'Your message...'}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button
                disabled={!formValid}
                onClick={(e) =>
                    handleClickForMessage(
                        e,
                        name,
                        setName,
                        email,
                        setEmail,
                        message,
                        setMessage,
                        setSendMessageSuccess,
                        setMessageSendError
                    )
                }
            >
                Submit
            </Button>
        </>
    )

    const SuccessToast = (
        <div className="toast">
            <div className="alert alert-success shadow-lg">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-base-300 flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>Your message has been sent!</span>
                </div>
            </div>
        </div>
    )

    const ErrorToast = (
        <div className="toast">
            <div className="alert alert-error shadow-lg">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-base-300 flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>{messageSendError}</span>
                </div>
            </div>
        </div>
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
                <form className="w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl fhd:max-w-5xl 2k:max-w-6xl 4k:max-w-7xl">
                    <h2 className="text-5xl font-bold pt-3 md:pt-6">
                        {contactFormData.contactMeTitle}
                    </h2>
                    <div className="text-justify md:text-center py-2 md:py-4">
                        {documentToReactComponents(
                            contactFormData.contactMeFormText
                        )}
                    </div>
                    {sendMessageSuccess
                        ? successMessage
                        : messageSendError
                        ? errorMessage
                        : contactMeForm}
                    {sendMessageSuccess ? SuccessToast : ''}
                    {messageSendError ? ErrorToast : ''}
                </form>
            </div>
        </div>
    )
}

export default ContactMe
