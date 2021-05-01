import React, { useState } from 'react'

import ChatWindow from "@ws-chat/shared/ChatWindow"
import firebase from 'firebase/app';
import firebaseConfig from "@config/firebase"
import Dialog from "@components/Dialog";
import config from "@config/chat"

function App() {

  const [name, setName] = useState("")

  try {
    firebase.initializeApp(firebaseConfig);
  } catch (error) {
    console.log("Firebase app already initalized");
  }

  return (
    <>
      <Dialog 
        onConfirm={(name) => setName(name)} 
        show={!name} 
      />

      <ChatWindow 
        theme={config.theme} 
        me={{
          displayName: name,
        }} 
        root="new-chat-2"
      >
        {/* {({ Components }) => {
          <Components.ChatMessageInput />
        }} */}
      </ChatWindow>
    </>
  );
}

export default App;
