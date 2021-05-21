import React, { createContext } from 'react'

export const ChatContext = createContext({})

export default function ChatProvider({
    children = () => { },
    config = {
        root: "chat-new/messages",
        theme: {},
        me: {
            displayName: ""
        },
    },
}) {


    return (
        <ChatContext.Provider value={{
            config
        }}>
            {children()}
        </ChatContext.Provider>
    )
}
