import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useContext } from 'react'

import { ContentfulContext } from '../../context'
import { useIntersectionObserver } from '../../hooks'
import TechStack from '../TechStack'
import classes from './skills.module.scss'
import useSkillSort from './useSkillSort'

const Skills = () => {
	const { skillScopes, skillSet } = useContext(ContentfulContext)
	const { useAppear } = useIntersectionObserver()
	const sortedArrayOfSkillSet = useSkillSort(skillSet)

	useAppear('appear', 'disappear')

	return (
		<div className="hero bg-base-200" id="skills">
			<div className="hero-content w-full text-center">
				<div>
					<h2 className="font-bold pt-4 md:pt-6">Skills</h2>
					<h2 className="py-2 md:py-4 text-2xl md:text-3xl fhd:text-4xl">
						/ <span className="text-primary">[ My ] </span> tech
						stack:
					</h2>
					<TechStack />
					<div className={`disappear ${classes.skillsInfoText}`}>
						{documentToReactComponents(
							skillScopes[0].fields.skillScopeInfo
						)}
					</div>
					<section className="grid">
						<div className={classes.skillsGrid}>
							{sortedArrayOfSkillSet.map((skill, index) => (
								<div key={index} className="disappear">
									{documentToReactComponents(
										skill.fields.stackInfo
									)}
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Skills
