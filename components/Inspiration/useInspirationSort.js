function useInspirationSort(props) {
	const sortedArrayOfInspirationCollection = props.sort((a, b) =>
		a.fields.inspirationId > b.fields.inspirationId
			? 1
			: b.fields.inspirationId > a.fields.inspirationId
			? -1
			: 0
	)

	return sortedArrayOfInspirationCollection
}

export default useInspirationSort
