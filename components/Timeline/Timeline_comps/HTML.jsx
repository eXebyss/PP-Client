import React from 'react'

function HTML() {
	return (
		<div className='timeline-container-two html'>
			<div className='timeline-icon'>
				<i className='fab fa-html5'></i>
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>HTML</span>
				</h1>
				<p>
					The very beginning. There is not much to emphasize here, except that
					without familiarity with HTML5, it would be difficult to imagine
					building web pages or entire sites.
				</p>
				<div className='progress'>
					<div
						id='progress-bar-html'
						className='progress-bar'
						role='progressbar'
						style={{ width: '80%' }}
						aria-label="HTML"
						aria-valuenow='80'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 80%
					</div>
				</div>
				<p className='timeline-subtitle'>September 2020</p>
			</div>
		</div>
	)
}

export default HTML
