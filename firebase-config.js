// Firebase Configuration for AYONI Platform
const firebaseConfig = {
    apiKey: "AIzaSyBj3j9Lp-1yKHdEryTvRbl9l2KqTIh-_FU",
    authDomain: "ckco-f3c2f.firebaseapp.com",
    databaseURL: "https://ckco-f3c2f-default-rtdb.firebaseio.com",
    projectId: "ckco-f3c2f",
    storageBucket: "ckco-f3c2f.firebasestorage.app",
    messagingSenderId: "230242752167",
    appId: "1:230242752167:web:78f10b8247ea7e57f12d82",
    measurementId: "G-DX4KBKLTST"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();

// Cloudinary Configuration
const CLOUD_NAME = 'dkredfmfe';
const UPLOAD_PRESET = 'for_5g';

// Agora Configuration
const AGORA_APP_ID_CALL = '4017f66ea15f4ce088e8d8993a072a5b';

// Admin Configuration
const ADMIN_EMAIL = 'jasim34m@gmail.com';
const ADMIN_PASSWORD = 'yy2314yy';

console.log('✅ AYONI - Firebase, Cloudinary & Agora Ready');
