import React from 'react'

const ButtonLink = ({ children, ...props }) => {
    return (
        <a
            {...props}
            className="btn btn-primary link link-hover my-2 md:my-4 hover:bg-transparent"
        >
            {children}
        </a>
    )
}

export default ButtonLink
