import { initializeApp } from 'firebase';
import 'firebase/database';

let config = {
    apiKey: "AIzaSyB43REoGDUlcLrxN_wTuu3Evxw5D2GBINY",
    authDomain: "instagram-bot-ec5ab.firebaseapp.com",
    databaseURL: "https://instagram-bot-ec5ab.firebaseio.com",
    projectId: "instagram-bot-ec5ab",
    storageBucket: "instagram-bot-ec5ab.appspot.com",
    messagingSenderId: "367214953400"
};

const app = initializeApp(config);
  
export const db = app.database();
export const followingRef = db.ref('following');
