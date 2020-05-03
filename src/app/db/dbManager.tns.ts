import {Couchbase} from 'nativescript-couchbase';
export class dbManager {
database:Couchbase;
viewNames=[];      
constructor(dbname:string);
constructor(db:dbManager);
    constructor(db:any) {
        if (db && db instanceof dbManager) {
            this.database = db.database;
        } else if(db) {
            this.database = new Couchbase(db);
        } 
        
    }   
    destroyDb(){
        if(this.database){
          //  this.database.de
        }
    }
    private checkViewExist(viewName,whereObject={}) {
        for(var key in this.viewNames) {
           if(this.viewNames[key].viewName===viewName) {
              var keys1= Object.keys(whereObject);
              var keys2= Object.keys(this.viewNames[key].whereObject);
               if(keys1.length===keys2.length) {
                   var equal=true;
                for(var k in whereObject) {
                   if(whereObject[k]!==this.viewNames[key].whereObject[k]){
                    equal= false;
                   }
                }
                if (equal) {
                    return true;
                }
               }              
           }
        }
        return false;
    }
    getView(viewName,whereObject={}) {
        if(this.
            database) {
           if(!this.checkViewExist(viewName,whereObject={})) {
            this.database.createView(viewName , "1" , function(document , emitter) {
                var obj =document;
                if (whereObject) { 
                     var has=true;
                    for(var key in whereObject) {
                      if(obj[key]!==whereObject[key]) {
                         has=false;
                      }
                    }
                    if (has) {
                     emitter.emit(...obj);
                    }               
                } else {
                 emitter.emit(...obj); 
                }           
            });
        }       
    }
 }

    add(data) {
        if(this.database){
      return this.database.createDocument(data);}
    }
    update(documentId,data) {
        if(this.database){
       this.database.updateDocument(documentId,data);}
    }
    delete(documentId) {
        if(this.database){
       return this.database.deleteDocument(documentId);}
    }
    getall(viewName , option={}) {
        if(this.database){
       return this.database.executeQuery(viewName,option);}
    }
    get(viewName,whereObject,option={}) {
        if(this.database) {
            if(!this.checkViewExist(viewName,whereObject)) {
            this.database.createView(viewName , "1" , function(document , emitter) {
                var obj = document;
                if (whereObject) { 
                     var has=true;
                    for(var key in whereObject) {
                      if(obj[key]!==whereObject[key]) {
                         has=false;
                      }
                    }
                    if (has) {
                     emitter.emit(obj._id,obj);
                    }               
                } else {
                 emitter.emit(obj._id,obj); 
                }           
            });
            return this.database.executeQuery(viewName,option);
        } else {
            return this.database.executeQuery(viewName,option);  
        } 
    }      
    }
    destroyDatabase(){
        if(this.database) {
            this.database.destroyDatabase();
        }
    }
}