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

const Inspiration = dynamic(() => import('../Inspiration'), {
    loading: () => <p>Loading...</p>,
})

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
