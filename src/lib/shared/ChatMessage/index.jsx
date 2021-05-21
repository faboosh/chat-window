import React from 'react'
import { ChatMessageView as View, ChatMessageContent as Content, ChatMessageAuthor as Author } from '../../browser/styled'

export default function ChatMessage({ message, author, messageByMe }) {
    return (
        <View messageByMe={messageByMe}>
            {author.displayName && !messageByMe && (
                <Author messageByMe={messageByMe}>{author.displayName}</Author>
            )}
            <Content messageByMe={messageByMe}>
                {message}
            </Content>
        </View>
    )
}
