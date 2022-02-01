import React from 'react'
import { SiTypescript } from 'react-icons/si'

function TS() {
	return (
		<div className='timeline-container-two ts'>
			<div className='timeline-icon'>
				<SiTypescript />
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>TypeScript</span>
				</h1>
				<p>
					In short. I am familiar with TypeScript. But I haven’t had a chance to
					use it very strongly somewhere.
				</p>
				<div className='progress'>
					<div
						id='progress-bar-ts'
						className='progress-bar'
						role='progressbar'
						style={{ width: '50%' }}
						aria-label="TypeScript"
						aria-valuenow='50'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 50%
					</div>
				</div>
				<p className='timeline-subtitle'>September 2021</p>
			</div>
		</div>
	)
}

export default TS
