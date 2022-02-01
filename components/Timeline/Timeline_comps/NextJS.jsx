import React from 'react'
import { SiNextdotjs } from 'react-icons/si'

function NextJS() {
	return (
		<div className='timeline-container-two nextjs'>
			<div className='timeline-icon'>
				<SiNextdotjs />
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>NextJS</span>
				</h1>
				<p>
					Familiar with Next.js. After this website was created with React, it
					was rebuild with Next.js.
				</p>
				<div className='progress'>
					<div
						id='progress-bar-nextjs'
						className='progress-bar'
						role='progressbar'
						style={{ width: '30%' }}
						aria-label='NextJS'
						aria-valuenow='30'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 30%
					</div>
				</div>
				<p className='timeline-subtitle'>November 2021</p>
			</div>
		</div>
	)
}

export default NextJS
