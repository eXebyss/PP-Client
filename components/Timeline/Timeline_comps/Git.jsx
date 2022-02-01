import React from 'react'
import { SiGit } from 'react-icons/si'

function Git() {
	return (
		<div className='timeline-container-two git'>
			<div className='timeline-icon'>
				<SiGit />
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>Git</span>
				</h1>
				<p>
					Familiar with Git basics. Speaking about git service, I have used
					GitHub as a git hosting service.
				</p>
				<div className='progress'>
					<div
						id='progress-bar-git'
						className='progress-bar'
						role='progressbar'
						style={{ width: '75%' }}
						aria-label="Git"
						aria-valuenow='75'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 75%
					</div>
				</div>
				<p className='timeline-subtitle'>December 2020</p>
			</div>
		</div>
	)
}

export default Git
