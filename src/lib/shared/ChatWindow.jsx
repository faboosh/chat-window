import React from 'react'
import { useMessageCollection, useFirebaseState } from '@hooks'

import { 
    ChatWindowView as Wrapper
} from '@browser/styled'

import ChatMessageList from '@shared/ChatMessageList'
import ChatMessageInput from '@shared/ChatMessageInput'
import styled, { ThemeProvider } from 'styled-components'

export default function ChatWindow({
    root = "chat-new/messages",
    theme = {},
    me = {
        displayName: ""
    },
    messageByMe = ({
        me,
        author
    }) => {
        return me.displayName == author.displayName
    },
    children = ({ 
        messageByMe, 
        me, 
        messageList, 
        onSend,
        isTypingList,
        setIsTyping,
        Components: {
            ChatMessageInput, 
            ChatMessageList
        }
    }) => {
        return <>
            <ChatMessageList 
                messageByMe={messageByMe}
                me={me}
                messageList={messageList}
                isTypingList={isTypingList}
                autoScroll
            />
            <ChatMessageInput send={onSend} setIsTyping={setIsTyping} />

        </>
    },
}) {
    const MESSAGES_PATH = root + "/messages"
    const SETTINGS_PATH = root + "/settings"
    const { messageList, send } = useMessageCollection(MESSAGES_PATH)

    const [ isTypingList, isTypingRef ] = useFirebaseState(SETTINGS_PATH + "/isTyping")

    function setIsTyping(isTyping) {
        isTypingRef.child(me.displayName).set(isTyping)
    }

    function onSend(message) {

        send({
            author: me,
            message,
            epoch: Date.now(),
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                { children({ 
                    messageByMe, 
                    me, 
                    messageList, 
                    onSend,
                    isTypingList,
                    setIsTyping,
                    Components: {
                        ChatMessageList,
                        ChatMessageInput
                    }
                }) }
            </Wrapper>
        </ThemeProvider>
    )
}
