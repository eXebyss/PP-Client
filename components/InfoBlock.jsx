import Link from 'next/link'

function InfoBlock() {
	return (
		<div className='info'>
			<h1
				className='div__heading'
				style={{ marginTop: '1rem', marginBottom: '0' }}>
				— Info —
			</h1>
			<div id='info-block' className='info-block'>
				<div className='first-block'>
					<i className='fas fa-exclamation-triangle'></i>
				</div>
				<div className='second-block'>
					<p>
						Take a moment! You don&apos;t have much time. I appreciate it.
						Therefore, this is a short informational block about what it is and
						why. The following timeline presents the technologies and skills
						that I could offer. I also gave them my humble assessment. If you
						are interested in my background up to this point or a bit more info
						about what is going on here, then click{' '}
						<span>
							<Link href='/info/about-me'>
								<a>here</a>
							</Link>
						</span>
						. Also, feel free to contact me. Thank you for your patience!
					</p>
				</div>
			</div>
		</div>
	)
}

export default InfoBlock
