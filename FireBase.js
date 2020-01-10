import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCn5Ex7D_6vBc7w-Lvd5Ht-Zbj3MBfz77c",
  authDomain: "tenedores-8fe37.firebaseapp.com",
  databaseURL: "https://tenedores-8fe37.firebaseio.com",
  projectId: "tenedores-8fe37",
  storageBucket: "tenedores-8fe37.appspot.com",
  messagingSenderId: "323273279357",
  appId: "1:323273279357:web:98a802033e6f7a7a18ee14",
  measurementId: "G-T7W6JGKNJZ"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
