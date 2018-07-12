import PouchDB from 'pouchdb'
import PouchAuth from 'pouchdb-authentication'
PouchDB.plugin(PouchAuth)
let localDB = new PouchDB('music')
let remoteDB = new PouchDB('https://72df47ef-19bd-4aae-808f-3dd02028206b-bluemix.cloudant.com/music-db', {skip_setup: true})

let userDB = new PouchDB('https://72df47ef-19bd-4aae-808f-3dd02028206b-bluemix.cloudant.com/_users', {skip_setup: true})



export function signUp(username, password){

    userDB.signUp(username, password)
    .then(res => console.log('Account created for ' + JSON.stringify(res)))
    .catch(error => console.log(error))

}

export function signIn(username, password){

    userDB.logIn(username, password)
    .then(res => console.log(res))
    .catch(error => console.log(error))

}

export function signOut(){

    remoteDB.logOut()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}

//get info about dbs
export function getDBInfo(){

    localDB.info()
    .then((info)=>{

        console.log("Info from local database -" + info)
    })

}

//sync localDB with remoteDB
export function syncDBs(){

    localDB.sync(remoteDB, {live: true, retry: true})
    .on('error', console.log.bind(console))
}

//get all music
export function getAllMusic(){

    localDB.allDocs({include_docs:true})
    .then((allDocs)=> {

        console.log(allDocs)
        syncDBs()
    })

    .catch(err=>console.log(err))

}

//save music
export function saveMusic(music){

    
    let doc = {

        "data": music
    };

     userDB.post(doc)
    .then((res)=>{

        console.log(res)
        syncDBs()
    })

    .catch((err)=>console.log(err))

}