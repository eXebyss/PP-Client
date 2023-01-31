import { Codewars, Github, Linkedin } from '@icons-pack/react-simple-icons'
import { version } from 'logrocket'
import React from 'react'

import { codewarsUrl, githubUrl, linkedinUrl } from '../../constants'
import { useAppVersion, useBrowserCheck } from '../../hooks'
import classes from './footer.module.scss'

function Footer() {
	const isBrowser = useBrowserCheck()
	const { appVersion } = useAppVersion()

	const footerCopyRight = (isBrowser && window.location.pathname === '/' && (
		<b>
			<a href="#aboutMe">[ me ]</a>
		</b>
	)) || (
		<span
			className="text-primary font-bold tooltip"
			data-tip="Mihails Fjodorovs"
		>
			[ me ]
		</span>
	)

	return (
		<footer className={classes.root}>
			<div className="items-center md:grid-flow-col">
				<p>
					Copyright © {new Date().getFullYear()} - All right reserved
					by {footerCopyRight} 👌
				</p>
				<div className="grid grid-flow-col">
					<a
						className="mx-1 fhd:mx-2"
						href={linkedinUrl}
						target="blank"
					>
						<Linkedin className="w-6 h-6 fill-base-content hover:fill-primary" />
					</a>
					<a
						className="mx-1 fhd:mx-2"
						href={githubUrl}
						target="blank"
					>
						<Github className="w-6 h-6 fill-base-content hover:fill-primary" />
					</a>
					<a
						className="mx-1 fhd:mx-2"
						href={codewarsUrl}
						target="blank"
					>
						<Codewars className="w-6 h-6 fill-base-content hover:fill-primary" />
					</a>
				</div>
				<p className="text-sm">v{appVersion}</p>
			</div>
		</footer>
	)
}

export default Footer
