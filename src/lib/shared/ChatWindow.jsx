import React, { useContext } from 'react'
import { useMessageCollection, useFirebaseState } from '@hooks'
import { ChatContext } from './ChatProvider'

import { 
    ChatWindowView
} from './browser/styled'

import ChatMessageList from '@shared/ChatMessageList'
import IsTypingList from '@shared/IsTypingList'
import ChatMessageInput from '@shared/ChatMessageInput'
import styled, { ThemeProvider } from 'styled-components'

export default function ChatWindow({
    wrapper: Wrapper = ChatWindowView, 
    messageByMe = ({
        me,
        author
    }) => {
        return me.displayName === author.displayName
    },
    children = (props) => {
        return <>
            <ChatMessageList {...props}/>
            <IsTypingList {...props} />
            <ChatMessageInput {...props} />
        </>
    },
}) {

    const { config } = useContext(ChatContext)

    const MESSAGES_PATH = config.root + "/messages"
    const SETTINGS_PATH = config.root + "/settings"
    const { messageList, send } = useMessageCollection(MESSAGES_PATH)

    const [ isTypingList, isTypingRef ] = useFirebaseState(SETTINGS_PATH + "/isTyping")

    function setIsTyping(isTyping) {
        isTypingRef.child(config.me.displayName).set(isTyping)
    }

    function onSend(message) {
        send({
            author: config.me,
            message,
            epoch: Date.now()
        })
    }

    return (
        <ThemeProvider theme={config.theme}>
            <Wrapper>
                { children({ 
                    messageByMe, 
                    me: config.me, 
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
