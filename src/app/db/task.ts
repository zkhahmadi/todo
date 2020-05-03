import {TaskModel} from './taskModel';
export class taskdb {
    constructor() {
        TaskModel.init();
    }
    getDoingTasks(context) {    
      return  TaskModel.get({[TaskModel.FieldNames.status]:false}).then((result)=>{
         return {context:context,data:result};
        });
    }
    getDoneTasks(context) {     
      return   TaskModel.get({[TaskModel.FieldNames.status]:true}).then((result)=>{
         return {context:context,data:result};
        });
    }
    addTaskByName(context,name) {      
            var data=TaskModel.getEmptyObject();
            data[TaskModel.FieldNames.name]=name;
            data[TaskModel.FieldNames.status]=false;           
            return TaskModel.add(data).then((id)=>{
               data[TaskModel.FieldNames._id]=id;
               return {context:context,data:data}; 
            });     
    } 
    addTask(context,newobj) {   
          newobj[TaskModel.FieldNames.status]=false;      
          return   TaskModel.add(newobj).then(id=>{
            newobj[TaskModel.FieldNames._id]=id;
            return {context:context,data:newobj};
          });
  } 
  updateTask(context,newobj) {          
    return   TaskModel.update(newobj[TaskModel.FieldNames._id],newobj).then((result)=>{
      return {context:context,data:newobj};
    }); 
} 
    deleteItem(item) {       
      return  TaskModel.delete(item[TaskModel.FieldNames._id]).then(()=>{
        return "";
      }); 
    }
    finishTask(context,item) {
           item[TaskModel.FieldNames.status]=true;
           return TaskModel.update(item[TaskModel.FieldNames._id],item).then((result)=>{
           return {context:context,data:item};
           }); 
    }
    goToDo(context,item) {     
          item[TaskModel.FieldNames.status]=false;
          item[TaskModel.FieldNames.date]=null;
          item[TaskModel.FieldNames.time]=null;
          item[TaskModel.FieldNames.priority]=null;
          item[TaskModel.FieldNames.repeat]=null;
          item[TaskModel.FieldNames.reminder]=null;
          return      TaskModel.update(item[TaskModel.FieldNames._id],item).then((result)=>{        
             return {data:result,context:context};  
         });  
  }
  destroyDatabase(){
    TaskModel.destroyDatabase();
  }
}