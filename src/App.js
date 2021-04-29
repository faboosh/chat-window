import ChatWindow from "@shared/ChatWindow"
import firebase from 'firebase/app';
import firebaseConfig from "@config/firebase"

function App() {

  try {
    firebase.initializeApp(firebaseConfig);
  } catch (error) {
    console.log("Firebase APP allready initalized");
  }

  return (
    <ChatWindow theme={} />
  );
}

export default App;
