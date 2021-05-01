import React, { useState } from 'react'
import { 
    EmojiWrapper as Wrapper, 
    EmojiButton, 
    EmojiTopbar as Topbar, 
    EmojiBody as Body,
    EmojiItem as Emoji,
} from '@browser/styled'

import * as unicodeEmoji from 'unicode-emoji';

const emojis = unicodeEmoji.getEmojisGroupedBy('category')

console.log(emojis)

export default function EmojiPicker({
    onPick = () => { },
    symbol = '😳'
}) {
    const [open, setOpen] = useState(false)
    const [category, setCategory] = useState("person-people")

    return (
        <>
            <EmojiButton onClick={ () => setOpen(!open) }>
                {symbol}
            </EmojiButton>
            {open && (
                <Wrapper>
                    <Topbar>
                        { Object.entries(emojis)
                            .map(([ category, items ]) => {
                                return <Emoji onClick={ () => setCategory(category) } >
                                    {items[0].emoji}
                                </Emoji>
                            })
                        }
                    </Topbar>
                    <Body>
                        { emojis[category]
                            .map(({ emoji }) => {
                                return <Emoji onClick={ () => onPick(emoji) } >
                                    {emoji}
                                </Emoji>
                            })
                        }
                    </Body>
                </Wrapper>
            )}

        </>
            
    )
}
