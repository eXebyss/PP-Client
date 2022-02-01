import React from 'react'
import { SiPostgresql, SiMysql, SiMongodb } from 'react-icons/si'

function Database() {
	return (
		<div className='timeline-container-two db'>
			<div className='timeline-icon'>
				<i className='fa-solid fa-database'></i>
			</div>
			<div className='timeline-body'>
				<h1 className='timeline-title'>
					<span className='badge'>Database</span>
				</h1>
				<p>
					SQL database: PostgresQL{' '}
					<SiPostgresql style={{ color: 'lightblue', fontSize: '1.5rem' }} />{' '}
					MySQL <SiMysql style={{ color: 'lightblue', fontSize: '2rem' }} />
				</p>
				<p>
					No-SQL database: MongoDB{' '}
					<SiMongodb style={{ color: 'lightgreen', fontSize: '1.5rem' }} />
				</p>
				<div className='progress'>
					<div
						id='progress-bar-db'
						className='progress-bar'
						role='progressbar'
						style={{ width: '50%' }}
						aria-label="Database"
						aria-valuenow='50'
						aria-valuemin='0'
						aria-valuemax='100'>
						Overall progress: 50%
					</div>
				</div>
				<p className='timeline-subtitle'>January-April 2021</p>
			</div>
		</div>
	)
}

export default Database
