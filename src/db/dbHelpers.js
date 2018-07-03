import pouch from 'pouchdb'

let localDB = new PouchDB('music')
let remoteDB = new PouchDB('https://72df47ef-19bd-4aae-808f-3dd02028206b-bluemix.cloudant.com/music-db', {skip_setup: true})


//get info about dbs
function getDBInfo(){

    localDB.info()
    .then((info)=>{

        console.log("Info from local database -" + info)
    })


    remoteDB.info()
    .then((info)=>{

        console.log("Info from remote database -" + info)
    })
   
}

//sync localDB with remoteDB
function syncDBs(){

    localDB.sync(remoteDB, {live: true, retry: true}).on('error', console.log.bind(console));
}

