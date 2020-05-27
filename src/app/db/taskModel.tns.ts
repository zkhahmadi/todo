import {dbManager} from './dbManager.tns';
export class TaskModel {
static FieldNames= {
    name:"Name",desc:"Desc",date:"Date",reminder:"Reminder"
    ,priority:"Priority",status:"Status",_id:"id",time:"Time",
    repeat:"Repeat",id:"_id"
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
static viewNames= {allTasks:{name:"allTasks",where:{}}};
static dbName="todo";
static dbManager:dbManager;
static init(context) {
    if (!TaskModel.dbManager) {
        var manager = new dbManager(context,TaskModel.dbName);
        TaskModel.dbManager = manager;
        for(var key in TaskModel.viewNames) {
            TaskModel.dbManager.getView(TaskModel.viewNames[key].name);
        }
    }       
}
static add(context,data) {
    return new Promise(function(resolve,reject){
    var manager=new dbManager(context,TaskModel.dbManager);
    resolve(manager.add(data));
   });    
}
static getAll() {}
static get(context,where={}) {
    return new Promise(function(resolve,reject){
        var manager=new dbManager(context,TaskModel.dbManager);
        resolve(manager.get(where));
    });    
}
static delete(context,id) {
    return new Promise(function(resolve,reject){
    var manager=new dbManager(context,TaskModel.dbManager);
    resolve(manager.delete(id));});
}
static update(context,documentId,obj) {
    return new Promise(function(resolve,reject){
    var manager=new dbManager(context,TaskModel.dbManager);
    resolve(manager.update(documentId,obj));});
}
static destroyDatabase(context) {
    return new Promise(function(resolve,reject){
    var manager=new dbManager(context,TaskModel.dbManager);
    resolve(manager.destroyDatabase());});
}
}