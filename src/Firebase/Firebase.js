import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDvvM7W2CLfBEvCWEQjq5nPd04J5hEg9Ag",
  authDomain: "e-commerce-site-5f2ca.firebaseapp.com",
  projectId: "e-commerce-site-5f2ca",
  storageBucket: "e-commerce-site-5f2ca.appspot.com",
  messagingSenderId: "102365553808",
  appId: "1:102365553808:web:886684cf211160aa79e415",
  measurementId: "G-P4G11SZKFY",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error occured ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
