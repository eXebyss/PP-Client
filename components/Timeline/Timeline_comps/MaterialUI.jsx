import React from 'react'
import { SiMaterialui } from 'react-icons/si'

function MaterialUI() {
	return (
		<div className='timeline-container-two materialUI'>
			<div className='timeline-icon'>
				<SiMaterialui />
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>MaterialUI</span>
				</h1>
				<p>Familiar with MaterialUI.</p>
				<div className='progress'>
					<div
						id='progress-bar-materialUI'
						className='progress-bar'
						role='progressbar'
						style={{ width: '30%' }}
						aria-label='materialUI'
						aria-valuenow='30'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 30%
					</div>
				</div>
				<p className='timeline-subtitle'>January 2022</p>
			</div>
		</div>
	)
}

export default MaterialUI
