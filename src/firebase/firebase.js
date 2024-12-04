import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyClKtK7FaZg6Zc4m4dONdli93C8M1VafNw",
  authDomain: "react-app-31edf.firebaseapp.com",
  projectId: "react-app-31edf",
  storageBucket: "react-app-31edf.firebasestorage.app",
  messagingSenderId: "753689766318",
  appId: "1:753689766318:web:a7f8705516ace57b73403f"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };