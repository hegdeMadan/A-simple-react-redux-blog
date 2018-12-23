import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase

/* 
    include your config snippet in here
*/

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase
