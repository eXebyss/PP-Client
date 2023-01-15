import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useState } from 'react'

import classes from './workExperience.module.scss'

const WorkExperience = ({ props }) => {
	const { myWorkExperiencePlaceTitles, myWorkExperiencePlaces } = props

	const [currentTab, setCurrentTab] = useState(1)

	const workTitles = myWorkExperiencePlaceTitles[0].fields
	const workPlaces = myWorkExperiencePlaces[0].fields

	const workTitleKeyCollection = [
		Object.keys(myWorkExperiencePlaceTitles[0].fields),
	]
	const workPlacesKeyCollection = [
		Object.keys(myWorkExperiencePlaces[0].fields),
	]

	// onClick={() => setCurrentTab(index+1)},
	// value at index 0 is content title which should be avoided in rendering
	// but unfortunately it can't be removed as title for content is required.
	// So, real work place info will start at index 1.
	return (
		<div className="hero bg-base-200" id="experience">
			<div className="hero-content w-full text-center max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl fhd:max-w-5xl 2k:max-w-6xl 4k:max-w-7xl">
				<div className="w-full">
					<h2 className="font-bold pt-3 md:pt-6">Experience</h2>
					<div className="tabs py-2 md:py-4 justify-center">
						{workTitleKeyCollection[0].map((value, index) => (
							<button
								className={`tab tab-bordered text-base-content active:tab-active focus:tab-active active:text-primary focus:text-primary ${
									index + 1 === currentTab
										? '!text-primary tab-active'
										: ''
								}`}
								key={index}
								onClick={() => setCurrentTab(index + 1)}
								onKeyUp={() => setCurrentTab(index + 1)}
							>
								{workTitles[value]}
							</button>
						))}
					</div>
					<div
						className={`p-2 md:p-4 text-neutral-content bg-neutral rounded-md text-left ${classes.tabsContent} `}
					>
						{documentToReactComponents(
							workPlaces[workPlacesKeyCollection[0][currentTab]]
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WorkExperience
