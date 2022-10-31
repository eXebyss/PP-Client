import React from 'react'

import { ArrowDownward } from '../Icons'

function WelcomeScreen({ props }) {
    const { title, subTitle } = props[0].fields

    return (
        <div className="h-screen grid content-center justify-items-center">
            <h1 className="font-semibold">{title}</h1>
            <h2 className="text-center">{subTitle}</h2>
            <a href="#aboutMe" aria-label="Learn more about my profile below">
                <ArrowDownward className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mt-16 md:mt-32 lg:mt-40 fill-transparent stroke-primary stroke-10 animate-bounce" />
            </a>
        </div>
    )
}

export default WelcomeScreen
