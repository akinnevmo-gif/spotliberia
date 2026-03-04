// Replace YOUR_KEYs with your Firebase project keys
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "bionurse-pro.firebaseapp.com",
  projectId: "bionurse-pro",
  storageBucket: "bionurse-pro.appspot.com",
  messagingSenderId: "262309708872",
  appId: "1:262309708872:web:c8200a831bbb51a7fc447d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
