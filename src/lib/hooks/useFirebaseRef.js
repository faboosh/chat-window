import firebase from "firebase"
import "firebase/database"

export default function useFirebaseRef(path) {
    return firebase.database().ref(path)
}