import React from 'react'

function SASS() {
	return (
		<div className='timeline-container-two scss'>
			<div className='timeline-icon'>
				<i className='fab fa-sass'></i>
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>SCSS</span>
				</h1>
				<p>Speaking about CSS preprocessor, I prefer to use SCSS.</p>
				<div className='progress'>
					<div
						id='progress-bar-scss'
						className='progress-bar'
						role='progressbar'
						style={{ width: '75%' }}
						aria-label="SASS"
						aria-valuenow='75'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 75%
					</div>
				</div>
				<p className='timeline-subtitle'>September-October 2020</p>
			</div>
		</div>
	)
}

export default SASS
