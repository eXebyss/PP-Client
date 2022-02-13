import React from 'react'
import styles from './react.module.scss'

function ReactJS() {
	return (
		<div className='timeline-container-two react' id='front-end'>
			<div id='app-logo-react' className='timeline-icon'>
				<i className='fa-brands fa-react'></i>
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>React</span>
				</h1>
				<p>
					My main focus at the moment is React.js as Front-End framework. After
					this page was written in plain HTML, it was bootstrapped with
					React.js. My{' '}
					<span className={styles.link}>
						<a href='#reactSPA'>React SPAs</a>
					</span>
					. The goal is to master advanced level.
				</p>
				<div className='progress'>
					<div
						id='progress-bar-react'
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
				<p className='timeline-subtitle'>April-July 2021</p>
			</div>
		</div>
	)
}

export default ReactJS
