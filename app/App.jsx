import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import Navbar from '../components/Navbar/Navbar'
import Portfolio from '../components/Portfolio/Portfolio'

function App() {

	return (
		<div className='main-container'>
			<Header />
			<Navbar home/>
			<Main />
			<Portfolio />
			<ContactForm />
			<Footer />
		</div>
	)
}

export default App
