import dynamic from 'next/dynamic'

import Divider from '../Divider'

const AboutMe = dynamic(() => import('../AboutMe'), {
    loading: () => <p>Loading...</p>,
})

const Skills = dynamic(() => import('../Skills'), {
    loading: () => <p>Loading...</p>,
})

const WorkExperience = dynamic(() => import('../WorkExperience'), {
    loading: () => <p>Loading...</p>,
})

const ContactMe = dynamic(() => import('../ContactMe'), {
    loading: () => <p>Loading...</p>,
})

const MyProjects = dynamic(() => import('../MyProjects'), {
    loading: () => <p>Loading...</p>,
})

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
        <div className="main">
            <AboutMe
                props={{
                    avatar,
                    aboutMeDeveloperState,
                    aboutMeDeveloperPosition,
                }}
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
