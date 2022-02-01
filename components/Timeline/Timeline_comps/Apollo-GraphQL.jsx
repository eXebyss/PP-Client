import React from 'react'
import { SiApollographql } from 'react-icons/si'

function ApolloGraphQL() {
	return (
		<div className='timeline-container-two apollo'>
			<div className='timeline-icon'>
				<SiApollographql />
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>Apollo GraphQL</span>
				</h1>
				<p>Familiar with Apollo GraphQL Platform.</p>
				<div className='progress'>
					<div
						id='progress-bar-apollo'
						className='progress-bar'
						role='progressbar'
						style={{ width: '30%' }}
						aria-label="Apollo"
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

export default ApolloGraphQL
