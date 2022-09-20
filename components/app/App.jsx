import Footer from '../Footer'
import Main from '../Main'
import Navbar from '../Navbar'
import WelcomeScreen from '../WelcomeScreen'

function App({ props }) {
	const { portfolioPage } = props

	return (
		<>
			<WelcomeScreen props={portfolioPage} />
			<Navbar />
			<Main props={props} />
			<Footer props={portfolioPage} />
		</>
	)
}

export default App
