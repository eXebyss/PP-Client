import Main from '../Main'
import Navbar from '../Navbar'
import ButtonScrollTop from '../UI/ButtonScrollTop'
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
