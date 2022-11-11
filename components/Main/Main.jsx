import AboutMe from '../AboutMe'
import ContactMe from '../ContactMe'
import Divider from '../Divider'
import Inspiration from '../Inspiration'
import MyProjects from '../MyProjects'
import Skills from '../Skills'
import WorkExperience from '../WorkExperience'

function Main({ props }) {
    const {
        portfolioPage,
        myWorkExperiencePlaceTitles,
        myWorkExperiencePlaces,
        personalProjects,
        contactMeForm,
        skillScopes,
        skillSet,
        inspiration,
    } = props

    const { avatar, aboutMeDeveloperState, aboutMeDeveloperPosition } =
        portfolioPage[0].fields

    return (
        <div className="main">
            <AboutMe
                props={{
                    avatar,
                    aboutMeDeveloperState,
                    aboutMeDeveloperPosition,
                }}
            />
            <Divider />
            <Skills props={{ skillScopes, skillSet }} />
            <Divider />
            <WorkExperience
                props={{ myWorkExperiencePlaceTitles, myWorkExperiencePlaces }}
            />
            <Divider />
            <MyProjects props={personalProjects} />
            <Divider />
            <Inspiration props={inspiration} />
            <Divider />
            <ContactMe props={contactMeForm} />
        </div>
    )
}

export default Main
