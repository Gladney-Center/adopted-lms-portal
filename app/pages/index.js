import { useRouter } from 'next/router'
import Portal from '../components/portal'

import { adptKeygen } from '../utilities/functions'

const Dashboard = () => {

	const router = useRouter()

	return (
		<Portal>
			<main className="dashboard"></main>
		</Portal>
	)
}

export default Dashboard