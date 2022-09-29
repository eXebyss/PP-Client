import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import classes from './footer.module.scss'

function Footer({ props }) {
    const { footer } = props[0].fields

    return (
        <footer className={classes.root}>
            <div>{documentToReactComponents(footer)}</div>
        </footer>
    )
}

export default Footer
