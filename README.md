# Getting Started with React Firebase Chat
### Basic setup
Start by [setting up Firebase in your React project](https://firebase.google.com/docs/web/setup#:~:text=apps%20to%20projects.-,Create%20a%20Firebase%20project,can%20edit%20the%20Project%20ID.)

Once Firebase is set up and initialized, import the following modules

```
import {
  ChatProvider,
  ChatWindow,
} from "react-firebase-chat"
```

We then need to provide a theme file, we'll create a file containing the following as a starting point. Feel free to customize this to suit your needs.

```
//chatTheme.js

import { css } from 'styled-components'
import { keyframes } from 'styled-components'

const isTypingAnim = keyframes`
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
`

export const accent = "#18b583"
// export const accent = "purple"

const scrollbar = css`
    &::-webkit-scrollbar {
        width: 12px;
    }
    
    &::-webkit-scrollbar-track {
        background: #333;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #555;
    }
`

const dropShadow = css`
    box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.1);
`

const emojiTheme = {
    EmojiButton: css`
        outline: none;
        border: none;
        background: ${accent};
        color: white;
        padding: 0 1rem;
        cursor: pointer;
        position: relative;
    `,

    EmojiWrapper: css`
        height: 500px;
        width: 300px;
        background: #333;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-20px, calc(-100% - 10px));
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        ${dropShadow};
    `,

    EmojiTopbar: css`
        width: 100%;
        background: ${accent};
        display: flex;
        flex-wrap: nowrap;
        box-sizing: border-box;
        padding: .5rem;
    `,

    EmojiBody: css`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        padding: .75rem;
        box-sizing: border-box;
        overflow-y: auto;
        ${scrollbar};
    `,

    EmojiItem: css`
        flex-grow: 1;
        text-align: center;
        padding: .3rem;
        cursor: pointer;
    `,
}

export default {
    default: {
        ChatMessage: {
            style: css`
                display: flex;
                flex-direction: column;
                ${({ messageByMe }) => messageByMe ? "align-self: flex-end;" : ""};     
            `,
            Content: css`
                display: inline-block;
                background: ${accent};
                padding: .7em .5em;
                margin-bottom: .7em;
                max-width: 70vw;
                word-break: break-word;
                border-radius: 5px;    
                ${({ messageByMe }) => messageByMe ? "align-self: flex-end;" : ""}; 
                white-space: pre;
            `,
            Author: css`
                opacity: .3;
                margin: 0;
                margin-bottom: .2em;
                font-size: .9rem;
                ${({ messageByMe }) => messageByMe ? "text-self: right;" : ""};
            `,
        },

        ChatMessageList: css`
            padding: .5rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            overflow-y: auto;
            flex-grow: 1;

            ${scrollbar};
        `,

        ChatWindow: css`
            display: flex;
            flex-direction: column;
            background: hsl(0, 0%, 95%);
            padding: 0rem;
            color: white;
            box-sizing: border-box;
            font-family: sans-serif;
            background: #242424;
            flex-grow: 1;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        `,

        ChatMessageInput: css`
            display: flex;
            justify-self: flex-end;
            flex-wrap: nowrap;
            min-height: 50px;
            background: #333;
            position: relative;
            align-items: center;
            justify-content: center;
            text-align: left;
            z-index: 50;

            ${dropShadow};
    
            .ws-chat__input {
                flex-grow: 1;
                padding: .5rem 1rem;
            }
    
            .ws-chat__submit-btn {
                outline: none;
                border: none;
                background: ${accent};
                color: white;
                padding: 0 1rem;
                cursor: pointer;
                font-size: 1.25rem;
                vertical-align: middle;
            }
        `,

        ChatMessageInputButtonGroup: css`
            display: flex;
            justify-self: flex-end;
            flex-wrap: nowrap;
            height: calc(100% - 1rem);
            overflow: hidden;
            border-radius: 15px;
            margin: .5rem;
        `,

        IsTypingList: css`
            position: fixed;
            left: 10px;
            bottom: 70px;
            opacity: 0.7;
            z-index: 1000;
        `,

        ChatIndicatorList: css`
            display: flex;
            flex-direction: column;
            width: 30vw;
            max-width: 400px;
            color: white;
            box-sizing: border-box;
            font-family: sans-serif;
            /* background: ${accent}; */
        `,

        ChatIndicator: css`
            display: flex;
            flex-direction: column;
            width: 30vw;
            max-width: 400px;
            cursor: pointer;
            padding: 1rem;
            color: ${accent};
            background: #333;    
            ${({ active }) => active ? `
                background: ${accent};
                color: #333;
            ` : ""}
            transition: .25s all;
        `,

        IsTypingItem: css`
            animation-name: ${isTypingAnim};
            animation-duration: 3s;
            animation-iteration-count: infinite;
        `,

        ...emojiTheme,

    }
}
```

After that, we can import our theme set up our configuration object

```
import theme from "path/to/theme/file"

const config = {
    theme: theme.default,
    root: "my-chat", //the base path in which chats will be stored in Firebase
    me: {
        displayName: "Faboosh"
    }
}
```

...And finally, we can set up a chat window by placing the following in our render method:

```
<ChatProvider config={config}>
    {() => (
        <ChatWindow />
    )}
</ChatProvider>
```



