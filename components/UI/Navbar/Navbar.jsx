import { useWindowSize } from '../../../hooks'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

function Navbar() {
	const { width: windowWidth } = useWindowSize()

	const isMobile = windowWidth < 768

	return isMobile ? <MobileNavigation /> : <DesktopNavigation />
}

export default Navbar
