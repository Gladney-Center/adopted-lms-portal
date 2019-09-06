import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCsU_llsXDATmPwVgoI2y2LHtD08xHaFm0",
    authDomain: "adopted-lms-portal.firebaseapp.com",
    databaseURL: "https://adopted-lms-portal.firebaseio.com",
    projectId: "adopted-lms-portal",
    storageBucket: "adopted-lms-portal.appspot.com",
    messagingSenderId: "459954911917",
    appId: "1:459954911917:web:c5bb5d6cf75ad71f76a424"
};

const msconfig = {
	tenantID: 'af43c2ca-888d-4b68-8e4c-07ea6ee918be'
}

export { msconfig }

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()