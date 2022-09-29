import React from 'react'

const Button = ({ children, ...props }) => {
    return (
        <button {...props} className="btn btn-primary my-2 md:my-4">
            {children}
        </button>
    )
}

export default Button
