import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import classes from './skills.module.scss'

const Skills = ({ props }) => {
	return (
		<div className={classes.root} id='skills'>
			<div className={classes.heroContent}>
				<div className={classes.heroSubContent}>
					<h2 className={classes.headerSkills}>Skills</h2>
					<h2 className={classes.headerTechSpec}>
						/ <span className={classes.techSpecSpan}>[ My ] </span> tech stack:
					</h2>
					<section className={classes.skillsInfoContainer}>
						<div className={classes.skillsGrid}>
							<div className={classes.skillsGridOne}>
								{documentToReactComponents(props[0])}
							</div>
							<div className={classes.skillsGridTwo}>
								{documentToReactComponents(props[1])}
							</div>
							<div className={classes.skillsGridThree}>
								{documentToReactComponents(props[2])}
							</div>
							<div className={classes.skillsGridFour}>
								{documentToReactComponents(props[3])}
							</div>
						</div>
						<div className={classes.skillsInfoText}>
							{documentToReactComponents(props[4])}
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Skills
