import Footer from '../Footer'

export default function Layout({ children, props }) {
	return (
		<main>
			{children}
			<Footer props={props} />
		</main>
	)
}
