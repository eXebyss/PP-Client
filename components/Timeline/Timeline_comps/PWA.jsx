import React from 'react'
import { SiPwa } from 'react-icons/si'

function PWA() {
	return (
		<div className='timeline-container-two pwa'>
			<div className='timeline-icon'>
				<SiPwa />
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>PWA</span>
				</h1>
				<p>
					Familiar with PWA.{' '}
					<span>
						<a href='#price-app'>This</a>
					</span>{' '}
					website is optimized for PWA.
				</p>
				<div className='progress'>
					<div
						id='progress-bar-pwa'
						className='progress-bar'
						role='progressbar'
						style={{ width: '65%' }}
						aria-label='PWA'
						aria-valuenow='65'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 65%
					</div>
				</div>
				<p className='timeline-subtitle'>September 2021</p>
			</div>
		</div>
	)
}

export default PWA
