import PouchDB from 'pouchdb'

let localDB = new PouchDB('music')
let remoteDB = new PouchDB('https://72df47ef-19bd-4aae-808f-3dd02028206b-bluemix.cloudant.com/music-db', {skip_setup: true})


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

     localDB.post(doc)
    .then((res)=>{

        console.log(res)
        syncDBs()
    })

    .catch((err)=>console.log(err))

}