import ThemeSelector from '../../ThemeSelector'
import useNavigation from '../useNavigation'

function MobileNavigation() {
	const { scrollNavbar } = useNavigation()

	scrollNavbar('navbarMobile')

	return (
		<nav
			id="navbarMobile"
			className={
				'mx-auto navbar bg-base-100 md:hidden z-10 px-4 transition-all duration-1000'
			}
		>
			<label htmlFor="menu-modal" className="btn modal-button">
				<i className="fa-solid fa-bars" />
			</label>
			<ThemeSelector styles={'mx-auto'} />
			<input type="checkbox" id="menu-modal" className="modal-toggle" />
			<label
				htmlFor="menu-modal"
				className="modal cursor-pointer modal-bottom sm:modal-middle"
			>
				<label className="modal-box relative" htmlFor="">
					<label
						htmlFor="menu-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<ul className="text-center">
						<li>
							<a
								className="btn btn-ghost normal-case text-sm md:text-base fhd:text-lg"
								href="#aboutMe"
							>
								.me
								<span className="text-primary">( )</span>
							</a>
						</li>
						<li>
							<a
								className="btn btn-ghost normal-case text-sm md:text-base fhd:text-lg"
								href="#skills"
							>
								.skills
								<span className="text-primary">( )</span>
							</a>
						</li>
						<li>
							<a
								className="btn btn-ghost normal-case text-sm md:text-base fhd:text-lg"
								href="#experience"
							>
								.experience
								<span className="text-primary">( )</span>
							</a>
						</li>
						<li>
							<a
								className="btn btn-ghost normal-case text-sm md:text-base fhd:text-lg"
								href="#projects"
							>
								.projects
								<span className="text-primary">( )</span>
							</a>
						</li>
						<li>
							<a
								className="btn btn-ghost normal-case text-sm md:text-base fhd:text-lg"
								href="#inspiration"
							>
								.inspired
								<span className="text-primary">( )</span>
							</a>
						</li>

						<li>
							<a
								className="btn btn-ghost normal-case text-sm md:text-base fhd:text-lg"
								href="#contact"
							>
								.contact
								<span className="text-primary">( )</span>
							</a>
						</li>
					</ul>
				</label>
			</label>
		</nav>
	)
}

export default MobileNavigation
