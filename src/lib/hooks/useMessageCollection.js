
import useFirebaseState from "@hooks/useFirebaseState"


export default function useMessageCollection(path, options = {
    returnMessageList: true
}) {
    const [messageList, ref] = useFirebaseState(path, {
        getData: options.returnMessageList
    })

    function send(message) {
        ref.push(message)
    }

    return { messageList, send }
}