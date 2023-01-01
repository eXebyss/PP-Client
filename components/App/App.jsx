import Main from '../Main'
import ButtonScrollTop from '../UI/ButtonScrollTop'
import Navbar from '../UI/Navbar'
import WelcomeScreen from '../WelcomeScreen'

function App({ props }) {
	const { portfolioPage } = props

	return (
		<>
			<WelcomeScreen props={portfolioPage} />
			<Navbar />
			<ButtonScrollTop />
			<Main props={props} />
		</>
	)
}

export default App
