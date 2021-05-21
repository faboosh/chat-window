import React, { useContext } from 'react'
import { ChatIndicatorListView as View } from "../../browser/styled"
import styled, { ThemeProvider } from 'styled-components'
import { useFirebaseState } from "../../hooks"
import ChatIndicator from './ChatIndicator/index'
import { ChatContext } from '../../shared/ChatProvider'

export default function ChatIndicatorList({
    root = "",
    userInboxRoot = "user-inboxes",
    inboxRoot = "inboxes",
    theme = {},
    room = "",
    children,
    onChangeRoom = () => { }
}) {
    const { config } = useContext(ChatContext)
    const [chatIndicatorList, chatIndicatorListRef] = useFirebaseState(userInboxRoot)

    function handleChangeRoom(firebaseID) {
        onChangeRoom(getRoomPath(firebaseID))
    }

    function getRoomPath(firebaseID) {
        return inboxRoot + "/" + firebaseID
    }

    return (
        <ThemeProvider theme={config.theme}>
            <View>
                {children && children}
                {chatIndicatorList && Object.entries(chatIndicatorList)
                    .map(([firebaseID, inbox]) => {
                        console.log(firebaseID)
                        return <ChatIndicator active={room === getRoomPath(firebaseID)} key={firebaseID} inbox={firebaseID} onClick={() => handleChangeRoom(firebaseID)} />
                    })
                }
            </View>
        </ThemeProvider>
    )
}
