import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQFziJyx4qs3mT-2j6-BFldltpoiYK1wc",
  authDomain: "crown-db-7f6fd.firebaseapp.com",
  projectId: "crown-db-7f6fd",
  storageBucket: "crown-db-7f6fd.appspot.com",
  messagingSenderId: "493377847970",
  appId: "1:493377847970:web:fd12c0f856e4b24d14cdfb",
  measurementId: "G-LZ8F83ZS53",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`Users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    //if user snapshot is not exits ..then we are creating new snapshot
    const { displayName, email } = userAuth;
    const createAt = new Date();
    console.log("From Firebase Configuration");
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error Creating User", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
