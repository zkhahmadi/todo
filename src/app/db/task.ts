import {TaskModel} from './taskModel.tns';
export class taskdb {
    constructor(context) {
        TaskModel.init(context);
    }
    getItem(context,documentId) {    
      return  TaskModel.get(context,{[TaskModel.FieldNames.id]:documentId}).then((result)=>{
         return {context:context,data:result};
        });
    }
    getDoingTasks(context) {    
      return  TaskModel.get(context,{[TaskModel.FieldNames.status]:false}).then((result)=>{
         return {context:context,data:result};
        });
    }
    getDoneTasks(context) {     
      return   TaskModel.get(context,{[TaskModel.FieldNames.status]:true}).then((result)=>{
         return {context:context,data:result};
        });
    }
    addTaskByName(context,name) {      
            var data=TaskModel.getEmptyObject();
            data[TaskModel.FieldNames.name]=name;
            data[TaskModel.FieldNames.status]=false;           
            return TaskModel.add(context,data).then((data)=>{
               return {context:context,data:data}; 
            });     
    } 
  addTask(context,newobj) {   
          newobj[TaskModel.FieldNames.status]=false;      
          return   TaskModel.add(context,newobj).then(id=>{
            newobj[TaskModel.FieldNames._id]=id;
            return {context:context,data:newobj};
          });
  } 
  updateTask(context,newobj) {          
    return   TaskModel.update(context,newobj[TaskModel.FieldNames._id],newobj).then((result)=>{
      return {context:context,data:newobj};
    }); 
  } 
    deleteItem(context,item) {       
      return  TaskModel.delete(context,item[TaskModel.FieldNames._id]).then(()=>{
        return "";
      }); 
    }
    finishTask(context,item) {
           item[TaskModel.FieldNames.status]=true;
           return TaskModel.update(context,item[TaskModel.FieldNames._id],item).then((result)=>{
           return {context:context,data:result};
           }); 
    }
    goToDo(context,item) {     
          item[TaskModel.FieldNames.status]=false;
          item[TaskModel.FieldNames.date]=null;
          item[TaskModel.FieldNames.time]=null;
          item[TaskModel.FieldNames.priority]=null;
          item[TaskModel.FieldNames.repeat]=null;
          item[TaskModel.FieldNames.reminder]=null;
          return TaskModel.update(context,item[TaskModel.FieldNames._id],item).then((result)=>{        
             return {data:result,context:context};  
         });  
  }
  destroyDatabase(context) {
    TaskModel.destroyDatabase(context);
  }
}