import firebase from 'firebase'
import 'firebase/firestore'

/* toDo: put credentials in separate config file */
// Initialize Firebase
let config = {
    apiKey: "AIzaSyD7lPYMsnUCKmbylTSAFzxLiKvDz-Pc_pM",
    authDomain: "music-share-95e16.firebaseapp.com",
    projectId: "music-share-95e16",

}

firebase.initializeApp(config)

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

//initialize firestore with persistence
firestore.enablePersistence()
.then((res)=>{

    console.log(res)

})

.catch(function(err) {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
    }
});


export function signUp(email, password){

    firebase.auth().createUserWithEmailAndPassword(email, password)

    .then(res=>console.log(res))
    
    .catch(function(error) {
        // Handle Errors here.
        console.log(error)
        // ...
      });

}

export function signIn(username, password){

    // userDB.logIn(username, password)
    // .then(res => console.log(res))
    // .catch(error => console.log(error))

}

export function signOut(){

    // userDB.logOut()
    // .then(res=>console.log(res))
    // .catch(err=>console.log(err))
}

//get info about dbs
export function getDBInfo(){

    // localDB.info()
    // .then((info)=>{

    //     console.log("Info from local database -" + info)
    // })

}

//sync localDB with remoteDB
export function syncDBs(){

    // localDB.sync(userDB, {live: true, retry: true})
    // .on('error', console.log.bind(console))
}

//get all music
export function getAllMusic(){

    // localDB.allDocs({include_docs:true})
    // .then((allDocs)=> {

    //     console.log(allDocs)
    //     syncDBs()
    // })

    // .catch(err=>console.log(err))

}

//save music
export function saveMusic(music){

    
    // let doc = {

    //     "data": music
    // };

    //  userDB.post(doc)
    // .then((res)=>{

    //     console.log(res)
    //     syncDBs()
    // })

    // .catch((err)=>console.log(err))

}