import PouchDB from 'pouchdb';
export class dbManager {
database:PouchDB;

viewNames=[];      
constructor(dbname:string);
constructor(db:dbManager);
    constructor(db:any) {
        if (db && db instanceof dbManager) {
            this.database = db.database;
        } else if(db) {      
           this.database = new PouchDB(db);
        }
    }   
  
    private checkViewExist(viewName,whereObject={}) {
      
    }
    getView(viewName,whereObject={}) {
      
    }
    add(data):Promise<{}>{
        return this.database.post(data).then((res)=>{
          return res.id;
        });
    }
    update(documentId,data):Promise<{}> {      
      //data._rev= documentId;      
      return  this.database.put(data);
    }
    delete(documentId):Promise<{}> {
        return new Promise(()=>{

        });
    }
    getall() {}
    get(whereObject,option={}):Promise<{}> {
        return this.database.allDocs({
            include_docs: true,
          }).then(function(result) {
            let res=[];         
            let m=[];
            for(let s=0;s< result.rows.length;s++){
               m[s]=result.rows[s].doc;
            }
             for(let s=0;s< m.length;s++){
                var obj =m[s];
                if (whereObject) { 
                     var has=true;
                    for(var key in whereObject) {
                      if(obj[key]!==whereObject[key]) {
                         has=false;
                      }
                    }
                    if (has) {
                      res.push(obj);
                    }               
                }
                 else {
                  res.push(obj);
                }  
              }
            return res;
          }).catch(function (err) {
            console.log(err);
          });
    }
    destroyDatabase(){}
}