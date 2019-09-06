import { useRouter } from 'next/router'
import Portal from '../components/Portal'
import fbapp from '../utilities/firebase'

import { adptKeygen } from '../utilities/functions'

const Dashboard = () => {

    const router = useRouter()

	return (
		<Portal>
			<main className="dashboard"></main>
		</Portal>
	)
}

Dashboard.getInitialProps = async ({ req, res }) => {
    /* const firebs = await fbapp.firestore().collection('/classSections')

	let setNew = firebs.doc(adptKeygen()).set({
		name: 'Kathy'
	}).then(doc => {
		console.log(doc)
	}).catch(err => {
		console.log(err)
	}) */

	/* let getNew = firebs.doc('x').get()
	.then(doc => {
		console.log(doc)
	}).catch(err => {
		console.log(err)
	}) */
    return {
		stuff: ''
	}
}

export default Dashboard