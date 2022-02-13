import ContactForm from '../ContactForm'
import Footer from '../Footer/Footer'
import Header from '../Header'
import Main from '../Main'
import Navbar from '../Navbar/Navbar'
import Portfolio from '../Portfolio/Portfolio'

function App() {
	return (
		<div className='main-container'>
			<Header />
			<Navbar home />
			<Main />
			<Portfolio />
			<ContactForm />
			<Footer />
		</div>
	)
}

export default App
