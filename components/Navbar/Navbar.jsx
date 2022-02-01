import ToAboutPage from './Navbar_links/ToAboutPage'
import ToHomePage from './Navbar_links/ToHomePage'

function Navbar({ home }) {
	return (
		<div className='nav-bar'>{home ? <ToHomePage /> : <ToAboutPage />}</div>
	)
}

export default Navbar
