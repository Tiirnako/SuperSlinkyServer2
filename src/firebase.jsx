import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBw2VqRwT6VPDIO3hr1UHfOikQ35EJfn6I",
  authDomain: "superslinkyserver.firebaseapp.com",
  projectId: "superslinkyserver",
  storageBucket: "superslinkyserver.appspot.com",
  messagingSenderId: "492594997530",
  appId: "1:492594997530:web:19009d2913e987c7f0a4a3",
  measurementId: "G-09GN1P6T3W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where ("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err)
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err)
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err)
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth, signInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword, sendPasswordReset, logout, logInWithEmailAndPassword, sendPasswordResetEmail, db
}