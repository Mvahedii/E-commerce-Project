import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCFGsEPzUazC1Afu7jgk0y4cdNLqMa28p8",
    authDomain: "e-commerce-2be1c.firebaseapp.com",
    databaseURL: "https://e-commerce-2be1c.firebaseio.com",
    projectId: "e-commerce-2be1c",
    storageBucket: "e-commerce-2be1c.appspot.com",
    messagingSenderId: "779940660962",
    appId: "1:779940660962:web:3a9901030d862eecab80bb",
    measurementId: "G-BZTBDKHKRR"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;