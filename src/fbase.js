import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpKbiJP0CPiD16MMpFxXY_9qnDFYzpTGE",
  authDomain: "kyun-sns.firebaseapp.com",
  projectId: "kyun-sns",
  storageBucket: "kyun-sns.appspot.com",
  messagingSenderId: "544499169554",
  appId: "1:544499169554:web:4777e6f8d3ee218e6f5bcb",
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
