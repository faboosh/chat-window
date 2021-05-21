import styled, { css } from "styled-components"

export const ChatWindowView = styled.div`
    ${({ theme }) => theme['ChatWindow'] ?? "" };
`

export const ChatMessageListView = styled.div`
    ${({ theme }) => theme['ChatMessageList'] ?? "" };
`

export const ChatMessageView = styled.div`
    ${({ theme }) => theme['ChatMessage']['style'] ?? "" };
`

export const ChatMessageContent = styled.span`
    ${({ theme }) => theme['ChatMessage']['Content'] ?? "" };
`

export const ChatMessageAuthor = styled.p`
    ${({ theme }) => theme['ChatMessage']['Author'] ?? "" };
`

export const ChatMessageInputView = styled.div`
    ${({ theme }) => theme['ChatMessageInput'] ?? "" };
`

export const ChatMessageInputButtonGroup= styled.div`
    ${({ theme }) => theme['ChatMessageInputButtonGroup'] ?? "" };
`

export const EmojiButton = styled.button`
    ${({ theme }) => theme['EmojiButton'] ?? "" };
`

export const EmojiWrapper = styled.div`
    ${({ theme }) => theme['EmojiWrapper'] ?? "" };
`

export const EmojiTopbar = styled.div`
    ${({ theme }) => theme['EmojiTopbar'] ?? "" };
`

export const EmojiBody = styled.div`
    ${({ theme }) => theme['EmojiBody'] ?? "" };
`

export const EmojiItem = styled.div`
    ${({ theme }) => theme['EmojiItem'] ?? "" };
`

export const IsTypingList = styled.div`
    ${({ theme }) => theme['IsTypingList'] ?? "" };
` 

export const ChatIndicatorListView = styled.div`
    ${({ theme }) => {
        return theme['ChatIndicatorList'] ?? "width: 200px; background: red;"
    } };
`

export const ChatIndicatorView = styled.div`
    ${({ theme }) => {
        return theme['ChatIndicator'] ?? "width: 200px; background: red;"
    } };
`

export const IsTypingItem = styled.div`
    ${({ theme }) => theme['IsTypingItem'] ?? "" };
`



export const ResizeableInputDiv = styled.div.attrs({
    contentEditable: true,
    className: "ws-chat__input"
})`
    ${({ theme }) => theme['ResizeableInput'] ?? "" };

    &:focus {
        outline: none;
    }

    &[placeholder]:empty:before {
        content: attr(placeholder);
        color: #444;
    }
`