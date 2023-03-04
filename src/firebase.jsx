import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from '@firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB35RT8TXlbX9oUHczoiMQ8ap8nc0l_Qbc',
  authDomain: 'noname-project-e8a8d.firebaseapp.com',
  projectId: 'noname-project-e8a8d',
  storageBucket: 'noname-project-e8a8d.appspot.com',
  messagingSenderId: '298330508065',
  appId: '1:298330508065:web:448d2ec65af3d544dfcc60',
  measurementId: 'G-0YLPY0HXB0',
};

const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      email: user.email,
    });
    return true;
  } catch (error) {
    return { error: error.message };
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    return true;
  } catch (error) {
    return { error: error.message };
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    return false;
  }
};
