import React from 'react'

const Input = ({ text, type, placeholder, ...props }) => {
	return (
		<div className="form-control w-full">
			<label className="label">
				<span className="label-text">{text}</span>
			</label>
			<input
				className="input input-bordered w-full"
				type={type}
				placeholder={placeholder}
				{...props}
			/>
		</div>
	)
}

export default Input
