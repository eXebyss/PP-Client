import React from 'react'
import { SiTailwindcss } from 'react-icons/si'

function Tailwind() {
	return (
		<div className='timeline-container-two tailwind'>
			<div className='timeline-icon'>
				<SiTailwindcss />
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>Tailwind</span>
				</h1>
				<p>
					Familiar with such CSS framework as Tailwind CSS. Have used it in my
					personal projects.
				</p>
				<div className='progress'>
					<div
						id='progress-bar-tailwind'
						className='progress-bar'
						role='progressbar'
						style={{ width: '65%' }}
						aria-label='Tailwind'
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

export default Tailwind
