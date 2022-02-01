import React from 'react'
import { SiWebpack } from 'react-icons/si'

function Webpack() {
	return (
		<div className='timeline-container-two webpack'>
			<div className='timeline-icon'>
				<SiWebpack />
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>Webpack</span>
				</h1>
				<p>Familiar with Webpack.</p>
				<div className='progress'>
					<div
						id='progress-bar-webpack'
						className='progress-bar'
						role='progressbar'
						style={{ width: '80%' }}
						aria-label="Webpack"
						aria-valuenow='80'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 80%
					</div>
				</div>
				<p className='timeline-subtitle'>August 2021</p>
			</div>
		</div>
	)
}

export default Webpack
