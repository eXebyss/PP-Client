import ThemeSelector from '../../ThemeSelector'

function DesktopNavigation() {
	return (
		<nav className="mx-auto navbar bg-base-100 hidden md:inline-block text-center sticky top-0 z-10">
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
