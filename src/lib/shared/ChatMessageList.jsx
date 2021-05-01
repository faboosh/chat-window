import React, { useState, useEffect, useRef } from 'react'
import ChatMessage from '@shared/ChatMessage/index'
import { ChatMessageListView } from '@browser/styled'
import {Howl, Howler} from 'howler';
import IsTypingList from './IsTypingList';
const msgSound = require('../audio/bombaclot_1.wav').default

const bombaclat = new Howl({
    src: [ msgSound ],
    volume: 0.2
});

export default function ChatMessageList({ 
    messageList, 
    me, 
    messageByMe, 
    isTypingList,
    wrapperComponent: View = ChatMessageListView, 
    autoScroll = false,
    children = ({ messageList, isMessageByMe, Components: { ChatMessage } }) => {
        return <>
            {
                messageList && Object.entries(messageList)
                    .map(([firebaseID, message]) => 
                        <ChatMessage key={firebaseID} {...{
                            ...message, 
                            messageByMe: isMessageByMe(message)
                        }} /> 
                    )
            }
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
    
                if( /bomba(c|k)l(a|o)t/gi.test(lastMessage.message) ) bombaclat.play()
    
                scrollRef.current.scrollIntoView()
            }
        }
    }, [scrollRef, messageList])

    function isMessageByMe(message) {
        return messageByMe({ me, author: message.author })
    }

    return (
        <View>
            { children({ messageList, isMessageByMe, Components: { ChatMessage } }) }
            <div ref={scrollRef}></div>
            <IsTypingList list={isTypingList} me={me} />
        </View>
    )
}
