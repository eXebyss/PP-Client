import React from 'react'
import { SiRedux } from 'react-icons/si'
// import '../../../styles/redux-logo.css'

function Redux() {
	return (
		<div className='timeline-container-two redux'>
			<div id="app-logo-redux" className='timeline-icon'>
				<SiRedux />
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>Redux</span>
				</h1>
				<p>As a state manager I use Redux.</p>
				<div className='progress'>
					<div
						id='progress-bar-redux'
						className='progress-bar'
						role='progressbar'
						style={{ width: '80%' }}
						aria-label="Redux"
						aria-valuenow='80'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 80%
					</div>
				</div>
				<p className='timeline-subtitle'>July 2021</p>
			</div>
		</div>
	)
}

export default Redux
