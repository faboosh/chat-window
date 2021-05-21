import React from 'react'
import useMessageCollection from "../../../hooks"
import { ChatIndicatorView as View } from "../../../browser/styled"

export default function ChatIndicator({
    inbox,
    active,
    onClick = () => {}
}) {
    // const messageList = useMessageCollection()
    return (
        <View onClick={onClick} active={active}>
            {inbox}
        </View>
    )
}
