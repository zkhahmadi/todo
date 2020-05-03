import {Component,OnInit, Input,ViewContainerRef, ViewChild, ElementRef} from '@angular/core';
import {taskdb} from '../db/task';
import { TaskModel } from '../db/taskModel';
@Component({
  selector: 'app-home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  openList(evt, state) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(state).style.display = "block";
  evt.currentTarget.className += " active";
  if (state=="doing") {
    
  } else {
    
  }
}
doneTasks=[];
doingTasks=[];
txtName;
db;
numberDoing=0;
numberDone=0;
onKey(event) {
  this.txtName = event.target.value;
}
addTaskByName() {
if (this.txtName) {
  this.db.addTaskByName(this,this.txtName).then((result:{context,data})=>{
       result.context.doingTasks.push(result.data);    
       result.context.taskName= "";  
       result.context.numberDoing= result.context.doingTasks.length;
       let el=<HTMLInputElement>document.getElementById("txtName");
       el.value="";        
  });
}
}
goToDoing(item){
  this.db.goToDo(this,item).then(function(result:{context,data}) { 
    item[TaskModel.FieldNames.status]=false;              
        result.context.doingTasks.push(Object.assign({}, item));
        for(var i =  result.context.doneTasks.length - 1; i >= 0; i--) {
          if(result.context.doneTasks[i] === item) {
            result.context.doneTasks.splice(i, 1);
          }
        }
        result.context.numberDoing= result.context.doingTasks.length;
        result.context.numberDone= result.context.doneTasks.length;  
});
}
goToDone(item) {
  this.db.finishTask(this,item).then(function(result:{context,data}) {                 
    item[TaskModel.FieldNames.status]=true;
    result.context.doneTasks.push(Object.assign({}, item));
    for(var i =  result.context.doingTasks.length - 1; i >= 0; i--) {
      if(result.context.doingTasks[i] === item) {
        result.context.doingTasks.splice(i, 1);
      }
    }
    result.context.numberDoing= result.context.doingTasks.length;
    result.context.numberDone= result.context.doneTasks.length;
});
}
constructor() {
  this.db = new taskdb();
}
ngOnInit() {
  this.txtName=this.txtName; 
  this.db.getDoingTasks(this).then(function(result:{context,data}) {      
    result.context.doingTasks=[...result.data];
    result.context.numberDoing= result.context.doingTasks.length;
    result.context.numberDone= result.context.doneTasks.length;
});
this.db.getDoneTasks(this).then(function(result:{context,data}) {     
  result.context.doneTasks=[...result.data];
  result.context.numberDoing= result.context.doingTasks.length;
  result.context.numberDone= result.context.doneTasks.length;    
});
}
}
