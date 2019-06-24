import firebase from 'firebase';
import 'firebase/firestore';

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
const settings = {timestampsInSnapshots: true};
firestore.settings(settings)

//initialize firestore with persistence
firestore.enablePersistence()

.catch(function(err) {
    if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
    } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
    }
});

    export function getUser(){ 
    
    return new Promise((resolve, reject)=>{

        auth.onAuthStateChanged((user)=>{

            if(user){

              resolve(user)   
            }

            else{

                reject(Error('Not signed in'))
            }


            
        })

    
        
    })


}


export function signUp(email, password){

    auth.createUserWithEmailAndPassword(email, password)

    .then(res => console.log(res))
    
    .catch(function(error) {
        // Handle Errors here.
        console.log(error)
        // ...
      });

}

export function signIn(email, password){
    return auth.signInWithEmailAndPassword(email, password);
}

export function signOut(){

   auth.signOut()
    .then(res => res)
    .catch(err => console.log(err))
}


export function getCurrentUser(){

    //need to store user in localStorage

     //or use fire auth globally and store item

    return new Promise((resolve)=>{

        resolve( JSON.parse(localStorage.getItem('userData')))

    })
    
   

}



//get all music
export function getAllMusic(user){

    let storeRef = firestore.collection(user.user.uid)
    return storeRef.get({source:'server'})

    

}

//save music
export function saveMusic(music){

    console.log(music);
    let songBytes = {

        data:music
    }

    
        if(auth.currentUser !== null){

            firestore.collection(auth.currentUser.uid)
            .add(songBytes)

        }

        else{

            console.log('Please login with an account');
        }
 


   
}

//delete music
export function deleteMusic(user, index){

    console.log(index)
    let storeRef = firestore.collection(user.user.uid)
    return storeRef.get()

    .then((res)=>{

        //we get the id of the document clicked
        let docRef = res.docs[index].id;
        //delete the document
        console.log(docRef);
        storeRef.doc(docRef).delete();
        //return collection ref
        return storeRef.get({source:'server'})
    })

    .catch(err => console.log(err));

}