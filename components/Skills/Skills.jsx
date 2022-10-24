import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import TechStack from '../TechStack'
import classes from './skills.module.scss'

const Skills = ({ props }) => {
    const { skillScopes, skillSet } = props

    const sortedArrayOfSkillSet = skillSet.sort((a, b) =>
        a.fields.stackId > b.fields.stackId
            ? 1
            : b.fields.stackId > a.fields.stackId
            ? -1
            : 0
    )

    return (
        <div className="hero bg-base-200" id="skills">
            <div className="hero-content w-full text-center max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl fhd:max-w-5xl 2k:max-w-6xl 4k:max-w-7xl">
                <div>
                    <h2 className="font-bold pt-4 md:pt-6">Skills</h2>
                    <h2 className="py-2 md:py-4 text-2xl md:text-3xl fhd:text-4xl">
                        / <span className="text-primary">[ My ] </span> tech
                        stack:
                    </h2>
                    <TechStack />
                    <div className={classes.skillsInfoText}>
                        {documentToReactComponents(
                            skillScopes[0].fields.skillScopeInfo
                        )}
                    </div>
                    <section className="grid">
                        <div className={classes.skillsGrid}>
                            {sortedArrayOfSkillSet.map((skill, index) => (
                                <div key={index}>
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
