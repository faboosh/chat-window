import { useState, useEffect } from 'react'
import useFirebaseRef from "@hooks/useFirebaseRef"

export default function useFirebaseState(path, options = {
    returnRefOnly: false,
    getData: true,
    debug: true,
}) {
    const [value, setValue] = useState(undefined)
    const [hasBound, setHasBound] = useState(false)
    const ref = useFirebaseRef(path)
    
    
    const updateFunc = (snapshot) => {
        logDebug("FIREBASE UPDATE: ", snapshot.val())
        setValue(prevState => ({
            ...prevState,
            [snapshot.key]: snapshot.val()
        }))
    }
    
    const valueFunc = (snapshot) => {
        logDebug("FIREBASE VALUE: ", snapshot.val())
        setValue(snapshot.val())
    }

    const unbind = () => {
        logDebug('FIREBASE UNBOUND')
        return ref ? ref.off() : null
    }

    const tryBindListeners = (value) => {
        if(value !== undefined) {

            if(typeof value === "object" && value !== null) {
                logDebug('USING ADD/CHANGE LISTENER')

                ref.limitToLast(1).on('child_added', updateFunc)
                ref.on('child_changed', updateFunc)

            } else {
                logDebug('USING VALUE LISTENER')

                ref.on('value', valueFunc)
            }
                
        }
    }
        
    useEffect(() => {
        if(ref && !options.returnRefOnly && options.getData) {

            setHasBound(hasBound => {
                if(!hasBound) {
                    ref.once('value', (snapshot) => {
                        logDebug('FIREBASE GET INITIAL')
        
                        valueFunc(snapshot)
        
                        tryBindListeners(snapshot.val())
                    })
                }
                return true
            })
        }

    }, [ref])

    useEffect(() => unbind, [ ])

    function logDebug() {
        console.log(path, ...arguments)
    }


    return !options.returnRefOnly ? [ value, ref ] : [ ref ]
} 