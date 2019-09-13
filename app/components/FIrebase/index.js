import FirebaseContext, { withFirebase } from './context'
import getFirebase from './firebase'

const msconfig = {
	tenantID: 'af43c2ca-888d-4b68-8e4c-07ea6ee918be'
}

export default getFirebase

export { FirebaseContext, withFirebase, msconfig }