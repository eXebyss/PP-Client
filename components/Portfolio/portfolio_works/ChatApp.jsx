import Image from 'next/image'
import chatApp from '../../../public/images/chat-app.jpg'

export default function ChatApp() {
	return (
		<>
			<div className='container-for-example'>
				<a
					href='https://mern-app-eight.vercel.app/login'
					title='Chat App'
					target='blank'>
					<h2>Chat App</h2>
					<p>
						Technology stack used:{' '}
						<span>
							React, Redux, Bootstrap, Node.js, Express.js, MongoDB, Socket.io
						</span>
						.
					</p>
				</a>
				<Image src={chatApp} alt='Chat-App' />
			</div>
		</>
	)
}
