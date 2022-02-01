import ApolloGraphQL from './Timeline_comps/Apollo-GraphQL'
import Bootstrap from './Timeline_comps/Bootstrap'
import CSS from './Timeline_comps/CSS'
import Database from './Timeline_comps/Database'
import GraphQL from './Timeline_comps/GraphQL'
import HTML from './Timeline_comps/HTML'
import JS from './Timeline_comps/JS'
import Git from './Timeline_comps/Git'
import NextJS from './Timeline_comps/NextJS'
import NodeJS from './Timeline_comps/Node-Express'
import PWA from './Timeline_comps/PWA'
import ReactJS from './Timeline_comps/React'
import Redux from './Timeline_comps/Redux'
import SASS from './Timeline_comps/SASS'
import Tailwind from './Timeline_comps/Tailwind'
import TS from './Timeline_comps/TS'
import Webpack from './Timeline_comps/Webpack'

function TimeLine() {
	return (
		<div className='timeline-container-one'>
			<h1 className='div__heading'>— Skills —</h1>
			<div className='timeline'>
				<HTML />
				<CSS />
				<SASS />
				<JS />
				<Git />
				<NodeJS />
				<Database />
				<ReactJS />
				<Redux />
				<Tailwind />
				<Webpack />
				<Bootstrap />
				<PWA />
				<TS />
				<GraphQL />
				<ApolloGraphQL />
				<NextJS />
			</div>
		</div>
	)
}

export default TimeLine
