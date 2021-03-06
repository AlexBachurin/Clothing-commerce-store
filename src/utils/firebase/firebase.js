import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB4GYf9PzUzWAmooE2R8uHyRTcvt2RnZ50",
	authDomain: "clothing-commerce-5c32c.firebaseapp.com",
	projectId: "clothing-commerce-5c32c",
	storageBucket: "clothing-commerce-5c32c.appspot.com",
	messagingSenderId: "1076672730809",
	appId: "1:1076672730809:web:580af955272e55263a6d68",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
//custom params for google auth
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, provider);

//our db
export const db = getFirestore();
//create user doc info from authetntication info
//take data from auth service and store it in firestore
export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInfo = {}
) => {
	//create collection in our db, name of collection and unique id of user
	const userDocRef = doc(db, "users", userAuth.uid);

	//document snapshot, access to our user data
	const userSnapshot = await getDoc(userDocRef);
	//if user data not exists
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		//create/ set document with data from userAuth in our db collection
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				//if we additional info then spread it, need to create displayName ourselves
				//when we signUp from email/password method
				...additionalInfo,
			});
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}
	//if user data exists, just return userDocRef
	return userDocRef;
};

//CREATE USER WITH EMAIL AND PASSWORD
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};
//SIGN IN WITH EMAIL AND PASSWORD
export const signInWithEmailAndPasswordAuth = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};
//SIGN OUT
export const signOutUser = async () => await signOut(auth);

//AUTH STATE CHANGE
//then auth changes we calling callback
export const onAuthStateChangedListener = (callback) => {
	return onAuthStateChanged(auth, callback);
};
