import React, { useState, useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage/index'
import { ChatMessageListView } from '../browser/styled'
import IsTypingList from './IsTypingList';

export default function ChatMessageList({ 
    messageList, 
    me, 
    messageByMe,
    wrapper: View = ChatMessageListView, 
    autoScroll = true,
    children = ({ messageList, Components: { ChatMessage } }) => {
        return <>
            { messageList && messageList.map((message) => 
                <ChatMessage {...message} /> 
            )}
        </>
    }
}) {
    const scrollRef = useRef(null)
    const [lastMessageCount, setLastMessageCount] = useState(0)

    useEffect(() => {
        const messageListArr = messageList ? Object.entries(messageList) : []
        
        if( autoScroll ) {
            if(scrollRef && messageList && lastMessageCount < messageListArr?.length) {
                setLastMessageCount(messageListArr?.length)
    
                const lastMessage = messageListArr[messageListArr.length - 1][1]
    
                scrollRef.current.scrollIntoView()
            }
        }
    }, [scrollRef, messageList])

    function isMessageByMe(message) {
        return messageByMe({ me, author: message.author })
    }

    function mapMessageByMe(messageList) {
        return messageList 
        ? Object.entries(messageList).map(([ firebaseID, message ]) => {
                message.messageByMe = isMessageByMe(message)
                message.key = firebaseID

                return message
            })
        : messageList
    }

    return (
        <View>
            { children({ 
                messageList: mapMessageByMe(messageList), 
                isMessageByMe, 
                Components: { ChatMessage } }) }
            <div ref={scrollRef}></div>
        </View>
    )
}
