import React from 'react'

function JS() {
	return (
		<div className='timeline-container-two js'>
			<div className='timeline-icon'>
				<i className='fab fa-js'></i>
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>JavaScript</span>
				</h1>
				<p>
					My main aim in my web-dev journey was, is and probably will be
					JavaScript and related frameworks. I use it both for Front-End and
					Back-End. I can&apos;t say for sure that I studied it completely. I
					still find various interesting things about it. Not to mention the
					different frameworks.
				</p>
				<div className='progress'>
					<div
						id='progress-bar-js'
						className='progress-bar'
						role='progressbar'
						style={{ width: '75%' }}
						aria-label='JavaScript'
						aria-valuenow='75'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 75%
					</div>
				</div>
				<p className='timeline-subtitle'>October-December 2020</p>
			</div>
		</div>
	)
}

export default JS
