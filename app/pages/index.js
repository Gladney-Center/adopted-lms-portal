import { useRouter } from 'next/router'
import Portal from '../components/portal'
import SVG from '../components/svg'

import { adptKeygen } from '../utilities/functions'

const Dashboard = () => {

	const router = useRouter()

	return (
		<Portal>
			<main className="dashboard">
				<SVG.Search/>
			</main>
		</Portal>
	)
}

export default Dashboard
