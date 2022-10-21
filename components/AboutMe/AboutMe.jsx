import Image from 'next/image'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import classes from './aboutMe.module.scss'

const AboutMe = ({ props }) => {
    const { avatar, aboutMeDeveloperState, aboutMeDeveloperPosition } = props

    return (
        <div className="hero bg-base-200" id="aboutMe">
            <div className="hero-content w-full justify-evenly flex-col lg:flex-row max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl fhd:max-w-5xl 2k:max-w-6xl 4k:max-w-7xl">
                <div className="avatar">
                    <div className="w-56 rounded-full ring ring-primary  ring-offset-base-100 ring-offset-2 hover:shadow-lg hover:shadow-primary/50">
                        <Image
                            src={'https:' + avatar.fields.file.url}
                            alt={avatar.fields.description}
                            width={avatar.fields.file.details.image.width}
                            height={avatar.fields.file.details.image.height}
                            blurDataURL={'https:' + avatar.fields.file.url}
                            placeholder="blur"
                            loading="lazy"
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                    </div>
                </div>

                <div>
                    <p className="py-6 fhd:text-lg">
                        Hi 👋, my{' '}
                        <span
                            className="text-primary tooltip"
                            data-tip="Mihails Fjodorovs"
                        >
                            [ name ]
                        </span>{' '}
                        is,
                    </p>
                    <h2>Mihails Fjodrovs</h2>
                    <div className={classes.aboutMeDeveloperState}>
                        {documentToReactComponents(aboutMeDeveloperState)}
                    </div>
                    <div className="py-6">
                        {documentToReactComponents(aboutMeDeveloperPosition)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
