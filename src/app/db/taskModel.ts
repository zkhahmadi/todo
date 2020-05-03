import {dbManager} from './dbManager';
export class TaskModel {
static FieldNames= {
    name:"Name",desc:"Desc",date:"Date",reminder:"Reminder"
    ,priority:"Priority",status:"Status",_id:"_id",time:"Time",
    repeat:"Repeat"
};
static getEmptyObject(){
    var obj={};
    for(var key in TaskModel.FieldNames) {
        obj[TaskModel.FieldNames[key]]=null;
    }
    obj[TaskModel.FieldNames.status]=false;
    obj[TaskModel.FieldNames.priority]='normal';
    return obj;
}
static dbName="home";
static dbManager:dbManager;

static init() {
    if (!TaskModel.dbManager) {
        var manager = new dbManager(TaskModel.dbName);
        TaskModel.dbManager = manager;        
    }       
}
static add(data):Promise<{}> {
    var manager=new dbManager(TaskModel.dbManager);
    return manager.add(data);
    
}

static getAll() {
   
}

static get(viewName,where={}):Promise<{}>{
    var manager=new dbManager(TaskModel.dbManager);
    return manager.get(viewName,where);
}

static delete(id):Promise<{}>{
    var manager=new dbManager(TaskModel.dbManager);
   return  manager.delete(id);
}

static update(documentId,obj) {
    var manager=new dbManager(TaskModel.dbManager);
    return manager.update(documentId,obj);
}
static destroyDatabase(){
    var manager=new dbManager(TaskModel.dbManager);
    manager.destroyDatabase();
}
}