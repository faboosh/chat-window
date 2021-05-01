import React from 'react'
import { IsTypingList as List, IsTypingItem as Item } from '@browser/styled'

export default function IsTypingList({
    list,
    me
}) {
    return (
        <List>
            {
                list && Object.entries(list)
                    .filter(([displayName, isTyping]) => {
                        return Number(isTyping) + 3000 > Date.now() && displayName !== me.displayName
                    })
                    .map(([ displayName ]) => {
                        return <Item>{displayName} is typing...</Item>
                    })
            }
        </List>
    )
}
