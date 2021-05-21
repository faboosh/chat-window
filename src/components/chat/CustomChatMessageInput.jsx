import React from 'react'
import ChatMessageInput from '@shared/ChatMessageInput/index';



export default function CustomChatMessageInput(props) {


    return (
        <ChatMessageInput {...props}>
            {(props) => (
                <>
                    <ResizeableInput {...props} />

                    //custom buttons o whatever
                </>
            )}
        </ChatMessageInput>
    )
}
