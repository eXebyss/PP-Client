import PriceApp from './portfolio_works/PriceApp'
import ChatApp from './portfolio_works/ChatApp'
import ThisWebSite from './portfolio_works/ThisWebSite'

function Portfolio() {
	return (
		<div className='portfolio-works' id='portfolio-works'>
			<h1 className='div__heading'>— Some Portfolio Works —</h1>
			<PriceApp />
			<ChatApp />
			<ThisWebSite />
		</div>
	)
}

export default Portfolio
