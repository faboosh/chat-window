import styled from 'styled-components'
import { accent } from "@styles/chatTheme"

export const ChatWrapper = styled.div`
    display: flex;
    background: #333;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    color: #333;
    background: ${accent};
    border: none;
    outline: none;
    padding: 1rem;
    /* border-radius: 5px; */
    /* margin: .25rem 0 1rem 0; */
    margin: 0;
`

export const H3 = styled.h3`
    font-family: sans-serif;
    background: ${accent};
    color: #333;
    padding: 1rem;
    padding-bottom: .25rem;
    margin: 0;
`