function useSkillSort(skillSet) {
	const sortedArrayOfSkillSet = skillSet.sort((a, b) =>
		a.fields.stackId > b.fields.stackId
			? 1
			: b.fields.stackId > a.fields.stackId
			? -1
			: 0
	)

	return sortedArrayOfSkillSet
}

export default useSkillSort
