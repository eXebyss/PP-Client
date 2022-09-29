const Textarea = ({ text, placeholder }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">{text}</span>
            </label>
            <textarea
                className="textarea textarea-bordered"
                placeholder={placeholder}
            ></textarea>
        </div>
    )
}

export default Textarea
