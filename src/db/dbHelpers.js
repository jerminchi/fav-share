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

const firestore = firebase.firestore()
const auth = firebase.auth()
const settings = {/* your settings... */ timestampsInSnapshots: true};
//a ref to our user
firestore.settings(settings)

//initialize firestore with persistence
firestore.enablePersistence()

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

//     export function getUser(){ 
    
//     return new Promise((resolve, reject)=>{

//         auth.onAuthStateChanged((user)=>{

//             if(user){

//               resolve(user)   
//             }

//             else{

//                 reject(Error('Not signed in'))
//             }


            
//         })

    
        
//     })


// }


export function signUp(email, password){

    auth().createUserWithEmailAndPassword(email, password)

    .then(res=>console.log(res))
    
    .catch(function(error) {
        // Handle Errors here.
        console.log(error)
        // ...
      });

}

export function signIn(email, password){

    return firebase.auth().signInWithEmailAndPassword(email, password)

    
    

}

export function signOut(){

    // userDB.logOut()
    // .then(res=>console.log(res))
    // .catch(err=>console.log(err))
}


//get all music
export function getAllMusic(user){

    console.log(user)
    let docRef = firestore.collection(auth.currentUser.uid)
    return docRef.get({source:'server'})

    

}

//save music
export function saveMusic(music){

    let stuff = {

        data:music
    }

    firestore.collection(auth.currentUser.uid)
    .add(stuff)
    .then(()=>console.log(music))


    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    

}