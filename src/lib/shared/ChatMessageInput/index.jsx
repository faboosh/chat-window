import React, { useState, useEffect, useRef } from 'react'
import { ChatMessageInputView as View, ResizeableInputDiv as Input, ChatMessageInputButtonGroup as ButtonGroup } from '../../browser/styled'
import EmojiPicker from '../EmojiPicker'
import ResizeableInput from './ResizeableInput'

export default function ChatMessageInput({
    onSend = () => { },
    sendBtnContent = "➤",
    setIsTyping = () => { },
    children,
}) {
    const [message, setMessage] = useState("")

    function sendMessage() {
        if(message) {
            onSend(message)
            setMessage("")
        }
    }

    function appendEmoji(emoji) {
        setMessage(message+emoji)
    }

    return (
        <View>
            { 
            typeof children == "function" ?
                children({ 
                    appendEmoji,
                    sendMessage,
                    sendBtnContent
                 }) : 
                (
                    <>
                        <ResizeableInput placeholder="Aa..." value={message} onChange={(message) => {
                            setIsTyping(!!message ? Date.now() : false)
                            setMessage(message)
                        }} onSubmit={() => {
                            setIsTyping(false)
                            sendMessage()
                        }} />
                        <ButtonGroup>
                            <EmojiPicker symbol='😳' onPick={appendEmoji} />
                            <button className="ws-chat__submit-btn" onClick={sendMessage}>{sendBtnContent}</button>
                        </ButtonGroup>
                    </>
                )
            }
        </View>
    )
}
