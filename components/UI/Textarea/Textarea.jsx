const Textarea = ({ text, placeholder, ...props }) => {
	return (
		<div className="form-control">
			<label className="label">
				<span className="label-text">{text}</span>
			</label>
			<textarea
				className="textarea textarea-bordered"
				placeholder={placeholder}
				{...props}
			></textarea>
		</div>
	)
}

export default Textarea
