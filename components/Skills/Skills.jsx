import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import classes from './skills.module.scss'
import TechStack from '../TechStack'

const Skills = ({ props }) => {
    return (
        <div className="hero bg-base-200" id="skills">
            <div className="hero-content text-center">
                <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
                    <h2 className="font-bold pt-4 md:pt-6">Skills</h2>
                    <h2 className="py-2 md:py-4 text-2xl md:text-3xl fhd:text-4xl">
                        / <span className="text-primary">[ My ] </span> tech
                        stack:
                    </h2>

                    <TechStack />
                    <section className="grid">
                        <div className={classes.skillsGrid}>
                            <div>{documentToReactComponents(props[0])}</div>
                            <div>{documentToReactComponents(props[1])}</div>
                            <div>{documentToReactComponents(props[2])}</div>
                            <div>{documentToReactComponents(props[3])}</div>
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
