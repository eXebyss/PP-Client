import React from 'react'
import { SiGraphql } from 'react-icons/si'

function GraphQL() {
	return (
		<div className='timeline-container-two graphql'>
			<div className='timeline-icon'>
				<SiGraphql />
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>GraphQL</span>
				</h1>
				<p>Familiar with GraphQL.</p>
				<div className='progress'>
					<div
						id='progress-bar-graphql'
						className='progress-bar'
						role='progressbar'
						style={{ width: '30%' }}
						aria-label="GraphQL"
						aria-valuenow='30'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 30%
					</div>
				</div>
				<p className='timeline-subtitle'>October 2021</p>
			</div>
		</div>
	)
}

export default GraphQL
