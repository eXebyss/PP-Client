import React from 'react'

function NodeJS() {
	return (
		<div className='timeline-container-two nodejs' id='back-end'>
			<div className='timeline-icon'>
				<i className='fab fa-node'></i>
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>Node.js|Express.js</span>
				</h1>
				<p>
					For Back-End I use Node.js with Express.js. A little about the
					technologies that I can implement on Node.js server: connecting and
					operating the server with SQL/No-SQL databases, authorizing through
					the JWT token, implementing Long Polling / Event Sourcing/ WebSocket
					(via Socket.io), REST API. At this stage, I spent more time on the
					Front-End than on the Back-End.
				</p>
				<div className='progress'>
					<div
						id='progress-bar-nodejs'
						className='progress-bar'
						role='progressbar'
						style={{ width: '60%' }}
						aria-label="NodeJS"
						aria-valuenow='60'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 60%
					</div>
				</div>
				<p className='timeline-subtitle'>January-April 2021</p>
			</div>
		</div>
	)
}

export default NodeJS
