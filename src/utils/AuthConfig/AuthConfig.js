
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCw2_kmwPRvyhvy97t_nL-Fm3cQz4HiRso",
    authDomain: "sample-signin-1a348.firebaseapp.com",
    projectId: "sample-signin-1a348",
    storageBucket: "sample-signin-1a348.firebasestorage.app",
    messagingSenderId: "716627529462",
    appId: "1:716627529462:web:e553399a318c56687226d7",
    measurementId: "G-762WP6Q7Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); 