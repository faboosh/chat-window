import React, { useState } from 'react'

import ChatWindow from "@ws-chat/shared/ChatWindow"
import firebase from 'firebase/app';
import firebaseConfig from "@config/firebase"
import Dialog from "@components/Dialog";
import config from "@config/chat"
import { ChatWrapper, Input, H3 } from "@components/styled"
import ChatIndicatorList from '@shared/ChatIndicatorList/index';
import ChatMessageInput from '@shared/ChatMessageInput/index';
import ChatMessageList from '@shared/ChatMessageList';
import ChatMessage from '@shared/ChatMessage';
import ChatProvider from '@shared/ChatProvider';

function App() {
  const FB_ROOT = "rooms"
  const [name, setName] = useState(localStorage.getItem("@NICKNAME"))
  const [room, setRoom] = useState(FB_ROOT + "/random")

  function handleChangeName(name) {
    setName(name)
    localStorage.setItem("@NICKNAME", name)
  }

  function getConfig() {
    return {
      ...config,
      root: FB_ROOT,
      me: { displayName: name }
    }
  }

  try {
    firebase.initializeApp(firebaseConfig);
  } catch (error) {
    console.log("Firebase app already initalized");
  }

  return (
    <ChatWrapper>
      {!name && (
        <Dialog 
          onConfirm={({ name, room }) => {
            handleChangeName(name)
          }} 
          show={!name} 
        />
      )}

      <ChatProvider config={getConfig()} >
        {(props) => (
          <>
            <ChatIndicatorList onChangeRoom={setRoom} />         
            {room && name && (
              <ChatWindow key={room} />
            )}
          </>
        )}
      </ChatProvider>   

    </ChatWrapper>



















    // {( props ) => (
    //   <>
    //     <ChatMessageList {...props} >
    //       {({ messageList }) => (
    //         <>
    //           { messageList && messageList.map(message => 
    //             <ChatMessage {...message}/>
    //           )}
    //         </>
    //       )}
    //     </ChatMessageList>
    //     <ChatMessageInput {...props} />
    //   </>
    // )}
    //     {/* <H3>Logged in as</H3>

    // <Input value={name} placeholder="Name" onChange={(e) => {
    //   handleChangeName(e.target.value)
    // }} /> */}
  );
}

export default App;
