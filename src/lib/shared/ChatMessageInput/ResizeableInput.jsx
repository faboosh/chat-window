import React, { useState, useEffect, useRef } from 'react'
import { ResizeableInputDiv as Input } from '../../browser/styled'

export default function ResizeableInput({
    value,
    onChange = () => null,
    onSubmit = () => null,
    ...rest
}) {
    const [shiftIsPressed, setShiftIsPressed] = useState(false)
    const messageRef = useRef(null)

    function handleInput(e) {
        onChange(e.target.innerText)
    }

    function setDOM(str) {
        if( messageRef?.current ) messageRef.current.innerText = str
    }

    function getDOM() {
        if( messageRef?.current )
            return messageRef.current.innerText
    }

    function onKeyDown(e) {
        if(e.key === "Shift") setShiftIsPressed(true)
        if(e.key === "Enter" && !shiftIsPressed) {
            e.preventDefault()
            onSubmit(getDOM())
        }
    }

    function onKeyUp(e) {
        if(e.key === "Shift") setShiftIsPressed(false); 
    }

    useEffect(() => {
        if( messageRef.current ) {
            console.log(value, getDOM())
            if(value !== getDOM()) setDOM(value)
        }
    }, [ value ])

    return <Input onInput={handleInput} onKeyDown={onKeyDown} onKeyUp={onKeyUp} ref={messageRef} {...rest} />
}
