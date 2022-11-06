import dynamic from 'next/dynamic'

import Divider from '../Divider'
import { Spinner } from '../Icons'

const AboutMe = dynamic(() => import('../AboutMe'), {
    loading: () => <Spinner className="animate-spin h-5 w-5" />,
})

const Skills = dynamic(() => import('../Skills'), {
    loading: () => <Spinner className="animate-spin h-5 w-5" />,
})

const WorkExperience = dynamic(() => import('../WorkExperience'), {
    loading: () => <Spinner className="animate-spin h-5 w-5" />,
})

const ContactMe = dynamic(() => import('../ContactMe'), {
    loading: () => <Spinner className="animate-spin h-5 w-5" />,
})

const MyProjects = dynamic(() => import('../MyProjects'), {
    loading: () => <Spinner className="animate-spin h-5 w-5" />,
})

const Inspiration = dynamic(() => import('../Inspiration'), {
    loading: () => <Spinner className="animate-spin h-5 w-5" />,
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
