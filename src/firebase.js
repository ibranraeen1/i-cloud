import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAgmv5TJ5V3Lw4eTJP4BMRKGGgmYNhQiLE",
    authDomain: "i-cloud1.firebaseapp.com",
    projectId: "i-cloud1",
    storageBucket: "i-cloud1.appspot.com",
    messagingSenderId: "404011909452",
    appId: "1:404011909452:web:d19a4cd2432ec2816d8fe9"
  };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const storage = firebase.storage();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
  export { db, storage, auth, provider }





// import { getApp, getApps, initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyAgmv5TJ5V3Lw4eTJP4BMRKGGgmYNhQiLE",
//   authDomain: "i-cloud1.firebaseapp.com",
//   projectId: "i-cloud1",
//   storageBucket: "i-cloud1.appspot.com",
//   messagingSenderId: "404011909452",
//   appId: "1:404011909452:web:d19a4cd2432ec2816d8fe9"
// };

// // Initialize Firebase
// !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore();
// const auth = getAuth();
// const storage = getStorage();
// const provider = new GoogleAuthProvider();

// // export default db;


// export { db, auth, storage, provider }






// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyAgmv5TJ5V3Lw4eTJP4BMRKGGgmYNhQiLE",
//   authDomain: "i-cloud1.firebaseapp.com",
//   projectId: "i-cloud1",
//   storageBucket: "i-cloud1.appspot.com",
//   messagingSenderId: "404011909452",
//   appId: "1:404011909452:web:d19a4cd2432ec2816d8fe9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getDatabase(app);
// export const provider = getFirestore(app);
// export const storage = getStorage(app);



// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth'
// const firebaseConfig = {
//   apiKey: "AIzaSyAgmv5TJ5V3Lw4eTJP4BMRKGGgmYNhQiLE",
//   authDomain: "i-cloud1.firebaseapp.com",
//   projectId: "i-cloud1",
//   storageBucket: "i-cloud1.appspot.com",
//   messagingSenderId: "404011909452",
//   appId: "1:404011909452:web:d19a4cd2432ec2816d8fe9"
// };

//   firebase.initializeApp(firebaseConfig);
//   export const db=firebase.firestore();
//   export const auth = firebase.auth();
//   export const provider= new firebase.auth.GoogleAuthProvider();
//   export const storage =firebase.storage()
//   // const db = firebase.firestore();
  
//   export default firebase;