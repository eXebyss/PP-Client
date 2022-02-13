import React from 'react'

function CSS() {
	return (
		<div className='timeline-container-two css'>
			<div className='timeline-icon'>
				<i className='fab fa-css3-alt'></i>
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>CSS</span>
				</h1>
				<p>
					A logical continuation after HTML5. Initially, I didn&apos;t pay much
					attention to CSS3, as I was more eager to learn JavaScript and various
					popular frameworks. Therefore, the main goal of creating this website
					was to improve the skill of working with styles. Especially with
					adaptive and responsive design.
				</p>
				<div className='progress'>
					<div
						id='progress-bar-css'
						className='progress-bar'
						role='progressbar'
						style={{ width: '75%' }}
						aria-label='CSS'
						aria-valuenow='75'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 75%
					</div>
				</div>
				<p className='timeline-subtitle'>September 2020</p>
			</div>
		</div>
	)
}

export default CSS
