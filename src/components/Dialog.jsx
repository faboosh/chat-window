import React, { useState } from 'react'
import styled from 'styled-components'
import { accent } from '@styles/chatTheme'

const Wrapper = styled.div`
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`

const Box = styled.div`
    background: #333;
    font-family: sans-serif;
    color: white;
    max-width: 500px;
    width: 50vw;
    border-radius: 15px;
    overflow: hidden;
`

const Title = styled.div`
    font-weight: bold;
    padding: 1.25rem .75rem 1rem .75rem;
    background: #444;
    color: #dadada;
`

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    background: #444;
    color: white;
    border: none;
    outline: none;
    padding: 1rem .5rem;
    border-radius: 5px;
    margin: .25rem 0 1rem 0;
`

const Body = styled.div`
    padding: .75rem;
`

const BtnGroup = styled.div`
    display: flex;
`

const Button = styled.button`
    padding: .5rem;
    width: 100%;
    background: ${accent};
    border: none;
    outline: none;
    border-radius: 5px;
    color: white;
    padding: 1rem .5rem;
    cursor: pointer;
    transition: .2s background;
`

export default function Dialog({
    show = true,
    onConfirm = () => {}
}) {
    const [name, setName] = useState("")

    return (
        <>
            { show && (
                <Wrapper>
                    <Box>
                        <Title>Vad heter du?</Title>
                        <Body>
                            <Input placeholder="Ditt namn" onChange={(e) => setName(e.target.value)} />   
                            <Button onClick={() => onConfirm(name)}>Gå med</Button>    
                        </Body>
                    </Box>
                </Wrapper>
            ) }
        </>
    )
}
