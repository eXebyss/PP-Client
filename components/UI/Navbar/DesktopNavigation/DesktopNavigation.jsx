import ThemeSelector from '../../ThemeSelector'
import useNavigation from '../useNavigation'

function DesktopNavigation() {
	const { scrollNavbar } = useNavigation()

	scrollNavbar('navbarDesktop')

	return (
		<nav
			id="navbarDesktop"
			className="sticky top-0 z-10 mx-auto navbar bg-base-100 hidden md:inline-block text-center transition-all duration-1000"
		>
			<a
				className="btn btn-ghost normal-case text-sm md:text-base fhd:text-lg"
				href="#aboutMe"
			>
				.me<span className="text-primary">( )</span>
			</a>
			<a
				className="btn btn-ghost normal-case text-sm md:text-base fhd:text-lg"
				href="#skills"
			>
				.skills<span className="text-primary">( )</span>
			</a>
			<a
				className="btn btn-ghost normal-case text-sm md:text-base fhd:text-lg"
				href="#experience"
			>
				.experience<span className="text-primary">( )</span>
			</a>
			<a
				className="btn btn-ghost normal-case text-sm md:text-base fhd:text-lg"
				href="#projects"
			>
				.projects<span className="text-primary">( )</span>
			</a>
			<a
				className="btn btn-ghost normal-case text-sm md:text-base fhd:text-lg"
				href="#inspiration"
			>
				.inspired<span className="text-primary">( )</span>
			</a>
			<a
				className="btn btn-ghost normal-case text-sm md:text-base fhd:text-lg"
				href="#contact"
			>
				.contact<span className="text-primary">( )</span>
			</a>
			<ThemeSelector />
		</nav>
	)
}

export default DesktopNavigation
