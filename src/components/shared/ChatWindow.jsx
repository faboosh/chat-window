import React from 'react'
import { useMessageCollection } from '@hooks'
import { ChatWindowView as View } from '@browser/styled'
import ChatMessageList from '@shared/ChatMessageList'
import ChatMessageInput from '@shared/ChatMessageInput'
import { ChatMessageListView } from '@browser/styled'

export default function ChatWindow({
    root = "/messages",
    theme = {

    },
    messageTypes= {
        
    }
}) {
    const { messageList, send } = useMessageCollection('chat/messages')

    return (
        <View >
            <ChatMessageList 
                messageList={messageList} 
                wrapperComponent={ChatMessageListView}
            />
            <ChatMessageInput send={send} />
        </View>
    )
}
