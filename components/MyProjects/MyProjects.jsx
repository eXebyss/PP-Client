import Image from 'next/image'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Github } from '@icons-pack/react-simple-icons'
import { useState } from 'react'

import classes from './myProjects.module.scss'
import useProjectSort from './useProjectSort'

const MyProjects = ({ props }) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const sortedArrayOfProjects = useProjectSort(props)

	return (
		<div className="hero bg-base-200" id="projects">
			<div className="hero-content text-center w-full">
				<div className="max-w-[90vw] md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl fhd:max-w-5xl 2k:max-w-6xl 4k:max-w-7xl">
					<h2 className="font-bold">Projects I&apos;ve Built</h2>
					<h2 className="font-bold py-2 md:py-4 text-2xl md:text-3xl fhd:text-4xl">
						/ <b>Or</b> Contributed
					</h2>

					<div className="carousel w-full">
						{sortedArrayOfProjects.map((e, i) => (
							<div
								id={i}
								className="carousel-item w-full"
								key={i}
							>
								<div className="card bg-base-100 shadow-xl">
									<div className="card-body">
										<div className="text-primary text-left">
											{documentToReactComponents(
												e.fields.projectType
											)}
										</div>
										<div
											className={`card-title ${classes.cardTitle}`}
										>
											{documentToReactComponents(
												e.fields.projectName
											)}
										</div>
										<div className="text-left">
											{documentToReactComponents(
												e.fields.projectDate
											)}
										</div>
										<div className="p-2 md:p-4 text-neutral-content bg-neutral rounded-md text-justify">
											{documentToReactComponents(
												e.fields.projectDescription
											)}
										</div>
										<div
											className={`pt-2 md:pt-4 text-justify ${classes.techStackList}`}
										>
											{documentToReactComponents(
												e.fields.projectTechStack
											)}
										</div>
										<div className="pt-2 md:pt-4 text-left grid grid-flow-col gap-x-4 items-center w-fit">
											{e.fields.githubLink ? (
												<a
													href={`${e.fields.githubLink}`}
													aria-label="Check GitHub repository for the current project"
													target="blank"
												>
													<Github className="text-base-content hover:text-primary" />
												</a>
											) : (
												''
											)}
											{e.fields.directLink ? (
												<a
													href={`${e.fields.directLink}`}
													aria-label="Check the project site itself"
													target="blank"
												>
													<i className="fa-solid fa-arrow-up-right-from-square text-2xl pr-2 md:pr-4" />
												</a>
											) : (
												''
											)}
										</div>
										<figure>
											<Image
												src={`https:${e.fields.ppImage1.fields.file.url}`}
												alt={
													e.fields.ppImage1.fields
														.description
												}
												width={
													e.fields.ppImage1.fields
														.file.details.image
														.width
												}
												height={
													e.fields.ppImage1.fields
														.file.details.image
														.height
												}
												blurDataURL={`https:${e.fields.ppImage1.fields.file.url}`}
												placeholder="blur"
												loading="lazy"
												className="max-w-sm rounded-lg shadow-2xl"
											/>
										</figure>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="flex justify-center w-full py-2 gap-2">
						{props.map((_, i) => (
							<a
								href={`#${i}`}
								className={`btn btn-xs hover:text-primary hover:bg-primary-content active:text-primary active:bg-primary-content focus:text-primary focus:bg-primary-content ${
									i === currentSlide
										? 'text-primary bg-primary-content'
										: ''
								}`}
								key={i}
								onClick={() => setCurrentSlide(i)}
								onKeyDown={() => setCurrentSlide(i)}
							>
								{i + 1}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyProjects
