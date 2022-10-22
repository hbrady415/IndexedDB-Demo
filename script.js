
let db;
var oStoreName = "RecordSets";

// Get Reference to IDB regardless of browser
const indexedDB = 
      window.indexedDB || 
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB ||
      window.shimIndexedDB;

var bDoney = false;
var valuey = "";

// Request to open IDB
const request = indexedDB.open("DBTest", 1);

// When IDB version changes or is deleted recreate it and give it a record
request.onupgradeneeded = function (){
    db = request.result;
    store = db.createObjectStore(oStoreName, {keyPath: "id"});  
};

request.onsuccess = async function () { db = request.result
                                       await sKeyGet();
                                        console.log(valuey);

                                };
if(1 == 1){
    // if database does exist force through here to give it a record
    setTimeout(() => { 
        var sRecords = "blah blah blah";
        vvSaveToIDB("11250|sRecords" , sRecords); 
    }, 50);
}


setTimeout(() => {vvLoadFromIDB("11250|sRecords");}, 100);


// Initiate looking for key
async function sKeyGet(){
    bDoney = false;
    getsRecords("11250|sRecords");
    await task();
    return valuey;
}

// Wait until getsRecords(sKey) finishes looking at IDB and gets the value
async function task(){
    var b = false;
  for (var i = 0; i< 100; i++) {
        if(!bDoney){
            await sleep(1);
        }else{
            if(!b){
                b = true;
                console.log("i = " + i);
            }
        }
  }
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}





function vvSaveToIDB(sKey, sValue){
    
    const transaction = db.transaction(oStoreName, "readwrite");
    const store = transaction.objectStore(oStoreName);
    store.put({ id: sKey, value: sValue });
}
function vvLoadFromIDB(sKey){
    
    const transaction = db.transaction(oStoreName, "readwrite");
    const store = transaction.objectStore(oStoreName);
    const idQuery = store.get(sKey);

    idQuery.onsuccess = function () {
        var sValue = idQuery.result.value;
        console.log("Value = " + sValue);
        //console.log("Response: ", getLayoutData("Hunter"));
        vvLoadFromFetch("g000", sValue);
    };
}
// 
function getsRecords(sKey){
    
    const transaction = db.transaction(oStoreName, "readwrite");
    const store = transaction.objectStore(oStoreName);
    const idQuery = store.get(sKey);
    
    idQuery.onsuccess = function () {
        var sValue = idQuery.result.value;
        valuey = sValue;
        bDoney = true;

    };
     
}
function vvLoadFromFetch(sElementID, sRecords){
    console.log("We would have just refreshed " + sElementID + " with this data: " + sRecords);
}