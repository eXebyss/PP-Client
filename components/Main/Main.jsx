import AboutMe from '../AboutMe'
import ContactMe from '../ContactMe'
import Divider from '../Divider'
import Inspiration from '../Inspiration'
import MyProjects from '../MyProjects'
import Skills from '../Skills'
import WorkExperience from '../WorkExperience'

function Main() {
	return (
		<div className="main">
			<AboutMe />
			<Divider />
			<Skills />
			<Divider />
			<WorkExperience />
			<Divider />
			<MyProjects />
			<Divider />
			<Inspiration />
			<Divider />
			<ContactMe />
		</div>
	)
}

export default Main
