import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Github, Linkedin } from '@icons-pack/react-simple-icons'
import React from 'react'

import classes from './footer.module.scss'

function Footer({ props }) {
    const { footer } = props[0].fields

    return (
        <footer className={classes.root}>
            <div className="items-center md:grid-flow-col">
                {documentToReactComponents(footer)}
                <div className="grid grid-flow-col">
                    <a
                        className="mr-2"
                        href={process.env.LINKEDIN_URI}
                        target="blank"
                    >
                        <Linkedin className="w-6 h-6 fill-base-content hover:fill-primary" />
                    </a>
                    <a href={process.env.GITHUB_URI} target="blank">
                        <Github className="w-6 h-6 fill-base-content hover:fill-primary" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
