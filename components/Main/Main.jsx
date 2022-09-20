import classes from './main.module.scss'
import AboutMe from '../AboutMe'
import Skills from '../Skills'
import Divider from '../Divider'
import WorkExperience from '../WorkExperience'
import ContactMe from '../ContactMe'
import MyProjects from '../MyProjects'

function Main({ props }) {
	const {
		portfolioPage,
		myWorkExperiencePlaceTitles,
		myWorkExperiencePlaces,
		personalProjects,
		contactMeForm,
	} = props

	const {
		avatar,
		aboutMeDeveloperState,
		aboutMeDeveloperPosition,
		skillsFrontEnd,
		skillsBackEnd,
		skillsDatabases,
		skillsOthers,
		skillsMainFocus,
	} = portfolioPage[0].fields

	return (
		<div className='main'>
			<AboutMe
				props={{ avatar, aboutMeDeveloperState, aboutMeDeveloperPosition }}
			/>
			<Divider />
			<Skills
				props={[
					skillsFrontEnd,
					skillsBackEnd,
					skillsDatabases,
					skillsOthers,
					skillsMainFocus,
				]}
			/>
			<Divider />
			<WorkExperience
				props={{ myWorkExperiencePlaceTitles, myWorkExperiencePlaces }}
			/>
			<Divider />
			<MyProjects props={personalProjects} />
			<Divider />
			<ContactMe props={contactMeForm} />
		</div>
	)
}

export default Main
