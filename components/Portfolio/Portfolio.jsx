import PriceApp from './portfolioWorks/PriceApp'
import ChatApp from './portfolioWorks/ChatApp'
import ThisWebSite from './portfolioWorks/ThisWebSite'
import TestTaskOne from './portfolioWorks/TestTaskOne'

function Portfolio() {
	return (
		<div className='portfolio-works' id='portfolio-works'>
			<h1 className='div__heading'>— Some Portfolio Works —</h1>
			<PriceApp />
			<ChatApp />
			<TestTaskOne />
			<ThisWebSite />
		</div>
	)
}

export default Portfolio
