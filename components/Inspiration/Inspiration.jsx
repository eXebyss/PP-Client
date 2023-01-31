import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useContext } from 'react'

import { ContentfulContext } from '../../context'
import { useIntersectionObserver } from '../../hooks'
import classes from './inspiration.module.scss'
import useInspirationSort from './useInspirationSort'

const Inspiration = () => {
	const { inspiration } = useContext(ContentfulContext)
	const sortedArrayOfInspirationCollection = useInspirationSort(inspiration)
	const { useAppear } = useIntersectionObserver()

	useAppear('appear', 'disappear')

	return (
		<div className="hero bg-base-200" id="inspiration">
			<div className="hero-content w-full text-center max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl fhd:max-w-5xl 2k:max-w-6xl 4k:max-w-7xl">
				<div>
					<h2 className="font-bold pt-4 md:pt-6">Inspired</h2>
					<h2 className="py-2 md:py-4 text-2xl md:text-3xl fhd:text-4xl">
						<b>[ By ] </b> :
					</h2>
					<section className="grid text-start">
						<ul className="grid gap-2 md:gap-4">
							{sortedArrayOfInspirationCollection.map(
								(element, index) => (
									<li
										key={index}
										className={`text-neutral-content bg-neutral p-2 md:p-4 rounded-md disappear ${classes.inspirationListItem} `}
									>
										<h3
											className={`inline-block ${classes.inspirationTitle}`}
										>
											{element.fields.inspirationTitle},
										</h3>
										{documentToReactComponents(
											element.fields.inspirationSubHeader
										)}
										{documentToReactComponents(
											element.fields.inspirationObject
										)}
									</li>
								)
							)}
						</ul>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Inspiration
