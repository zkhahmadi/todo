import {Couchbase,Replicator} from 'nativescript-couchbase-plugin';
export class dbManager {
database:Couchbase;
viewNames=[];   
push:Replicator;   
constructor(context,dbname:string);
constructor(context,db:dbManager);
    constructor(context,db:any) {
        if (db && db instanceof dbManager) {
            this.database = db.database;
        } else if(db) {
            this.database = new Couchbase(db);
           // this.setupSync(context);
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
        if(this.database) {}
 }

    add(data) {
        if (this.database){
            return this.database.createDocument(data);}
    }
    update(documentId,data) {
        if (this.database){
            this.database.updateDocument(documentId,data);}
    }
    delete(documentId) {
        if(this.database){
       return this.database.deleteDocument(documentId);}
    }
    getall(viewName , option={}) {
        if(this.database)
        {
            const results = this.database.query({
                select: [], // Leave empty to query for all
                from: null, // Omit or set null to use current db
                where: [],
                order: []
              });
           return results;//this.database.executeQuery(viewName,option);
        }
    }
    get(whereObject) {
        if(this.database) {
            let where=[];
            for (let key in whereObject) {
              let k={};
              k["property"]=key;
              k["comparison"]="equalTo";
              k["value"]=whereObject[key];
              where.push(k);
            }
            const results = this.database.query({
                select: [], // Leave empty to query for all
                from: null, // Omit or set null to use current db
                where: where,
                order: []
              });
           return results;
            /*if(!this.checkViewExist(viewName,whereObject)) {
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
        }*/ 
    }      
    }
    setupSync(context) {
         this.push=  this.database.createPushReplication('ws://172.18.160.179:4984/todo/');
          this.push.setUserNameAndPassword("zkhahmadi","123456");
          const pull =  this.database.createPullReplication('ws://172.18.160.179:4984/todo/');
          pull.setUserNameAndPassword("zkhahmadi","123456");           
           //this.push.setChannels(["Doing","Done"]); 
           this.push.setContinuous(true); 
           this.push.start();
           //pull.setChannels(["Doing","Done"]); 
           pull.setContinuous(true);
           pull.start();
          this.database.addDatabaseChangeListener(function(changes) {
            context.onChange(changes);  
            /*for (var i = 0; i < changes.length; i++) {
              const documentId = changes[i];
              console.log(documentId);
            }*/
          });
    }
    destroyDatabase() {
        if(this.database) {
            this.database.destroyDatabase();
        }        
    }    
}