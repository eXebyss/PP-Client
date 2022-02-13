import { Avatar } from '@mui/material'
import Image from 'next/image'
import avatarPic from '../public/images/avatar.jpg'

export default function InfoAboutMe() {
	return (
		<div className='info__about__me'>
			<Avatar sx={{ width: '12rem', height: '12rem' }} className='avatar'>
				<Image src={avatarPic} alt='Mihails Fjodorovs' />
			</Avatar>
			<h1 className='div__heading'>— About Portfolio Page —</h1>
			<p>
				To be honest, the main idea behind this little project was to practice
				with CSS. To be more precise, to practice responsive and adaptive design
				without using third-party frameworks. After that, the idea came that
				this could serve as my modest business card. Why not? I know there are
				places that could be done better. Over time, I will definitely improve
				them. If you have any suggestions or ideas, feel free to contact me via
				the contact form.
			</p>
			<h1 className='div__heading'>— About My Past Career —</h1>
			<h2>To make long story short:</h2>
			<p>
				Civil engineer: waste water treatment plants (WWTP), ventilation (HVAC)
				designing and production. Experience in the construction industry for 7+
				years. Extensive experience using engineering software and designing.
				Production planning and manufacturing of ventilation equipment.
				Engineering calculations. Calculation of the economics of production.
				Establishing the supply of material and goods. Communication with
				suppliers and customers.
			</p>
			<h3>1. Wastewater Treatment System Designer</h3>
			<h4>2014-06 - 2018-10</h4>
			<h3>2. HVAC Systems Designer & Technical Director</h3>
			<h4>2018-11 - 2021-11</h4>
			<h1 className='div__heading'>— Main Focus —</h1>
			<p>
				Firstly, for the Front-End, to master on advanced level React.js and
				relevant technologies / frameworks (possibly meta or meta-meta, as
				Next.js, Blitz.js, Hydrogen…).
			</p>
			<p>
				Secondly, for the Back-End, to master on advanced level Node.js with
				Express.js, and after Nest.js. Anyway, both ways are based on
				JavaScript. 💛 As well, I don&apos;t forget about TypeScript. 💙
			</p>
		</div>
	)
}
