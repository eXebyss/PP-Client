import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useContext, useState } from 'react'

import { ContentfulContext } from '../../context'
import { useIntersectionObserver } from '../../hooks'
import classes from './workExperience.module.scss'

const WorkExperience = () => {
	const { myWorkExperiencePlaceTitles, myWorkExperiencePlaces } =
		useContext(ContentfulContext)
	const [currentTab, setCurrentTab] = useState(1)
	const { useAppear } = useIntersectionObserver()

	useAppear('appear', 'disappear')

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
			<div className="hero-content w-full text-center">
				<div className="w-full">
					<h2 className="font-bold pt-3 md:pt-6">Experience</h2>
					<div className="tabs py-2 md:py-4 justify-center disappear">
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
						className={`p-2 md:p-4 text-neutral-content bg-neutral rounded-md text-left disappear ${classes.tabsContent} `}
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
