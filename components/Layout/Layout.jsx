import Footer from '../Footer'

export default function Layout({ children }) {
	return (
		<main>
			{children}
			<Footer />
		</main>
	)
}
