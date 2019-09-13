const config = {
    apiKey: "AIzaSyCsU_llsXDATmPwVgoI2y2LHtD08xHaFm0",
    authDomain: "adopted-lms-portal.firebaseapp.com",
    databaseURL: "https://adopted-lms-portal.firebaseio.com",
    projectId: "adopted-lms-portal",
    storageBucket: "adopted-lms-portal.appspot.com",
    messagingSenderId: "459954911917",
    appId: "1:459954911917:web:c5bb5d6cf75ad71f76a424"
}

class Firebase {
    constructor(app) {
        app.initializeApp(config)

        /* Helper */

        this.serverValue = app.firestore.Timestamp
        this.emailAuthProvider = app.auth.EmailAuthProvider

        /* Firebase APIs */

        this.auth = app.auth()
        this.db = app.firestore()
        this.storage = app.storage()
        this.functions = app.functions()

        /* Social Sign In Method Provider */

        this.microsoftProvider = new app.auth.OAuthProvider('microsoft.com')
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password)

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password)

    doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider)

    doSignInWithMicrosoft = () =>
        this.auth.signInWithPopup(this.microsoftProvider)

    doSignOut = () => this.auth.signOut()

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

    doSendEmailVerification = () =>
        this.auth.currentUser.sendEmailVerification({
            url: process.env.GATSBY_CONFIRMATION_EMAIL_REDIRECT,
        })

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password)

    // *** Merge Auth and DB User API *** //

    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.user(authUser.uid)
                    .get()
                    .then(snapshot => {
                        const dbUser = snapshot.data()
                        // default empty roles
                        if (!dbUser.roles) {
                            dbUser.roles = {}
                        }

                        // merge auth and db user
                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            emailVerified: authUser.emailVerified,
                            providerData: authUser.providerData,
                            ...dbUser,
                        }

                        next(authUser)
                    })
            } else {
                fallback()
            }
        })

    // *** User API ***

    user = uid => this.db.doc(`users/${uid}`)

    users = () => this.db.collection('users')
}

let firebase

function getFirebase(app, auth, database, storage) {
    if (!firebase) {
        firebase = new Firebase(app, auth, database, storage)
    }

    return firebase
}

export default getFirebase