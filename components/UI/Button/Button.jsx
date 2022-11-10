import React from 'react'

const Button = ({ children, styles, ...props }) => {
    return (
        <button {...props} className={`btn btn-primary my-2 md:my-4 ${styles}`}>
            {children}
        </button>
    )
}

export default Button
