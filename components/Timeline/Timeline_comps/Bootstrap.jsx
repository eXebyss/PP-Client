import React from 'react'

function Bootstrap() {
	return (
		<div className='timeline-container-two bootstrap'>
			<div className='timeline-icon'>
				<i className='fa-brands fa-bootstrap'></i>
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>Bootstrap</span>
				</h1>
				<p>
					Also familiar with such CSS framework as Bootstrap. Some things on
					this page are styled with Bootstrap.
				</p>
				<div className='progress'>
					<div
						id='progress-bar-bootstrap'
						className='progress-bar'
						role='progressbar'
						style={{ width: '65%' }}
						aria-label="Bootstrap"
						aria-valuenow='65'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 65%
					</div>
				</div>
				<p className='timeline-subtitle'>August 2021</p>
			</div>
		</div>
	)
}

export default Bootstrap
