import "./App.css";

import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyC5PhACXVF5sRC3ExAuoy8ndQ7n5fluXR0",
  authDomain: "superchat-5c286.firebaseapp.com",
  projectId: "superchat-5c286",
  storageBucket: "superchat-5c286.appspot.com",
  messagingSenderId: "636221107687",
  appId: "1:636221107687:web:b422e37ad4c69c1e646142",
  measurementId: "G-4ZHZ598DQK",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>SuperChat</h1>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
