function useProjectSort(props) {
	const sortedArrayOfProjects = props.sort((a, b) =>
		b.fields.projectId > a.fields.projectId
			? 1
			: a.fields.projectId > b.fields.projectId
			? -1
			: 0
	)

	return sortedArrayOfProjects
}

export default useProjectSort
