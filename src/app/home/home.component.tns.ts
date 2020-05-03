import {taskdb} from '../db/task';
import { Component, OnInit,OnDestroy,ViewContainerRef} from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { TaskModel } from '../db/taskModel';
import { AddComponent } from '../add/add.component';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
@Component({
  selector: 'app-home-component',
  templateUrl:'home.component.tns.html',
  styleUrls: ['home.component.tns.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  Tasks=[];
  doneTasks=[];
  data;
  listView;
  textField;
  db:taskdb;
  numberDoing;
  numberDone;
  listView1;
  mode=0;
  item=null;
  onChangeChecked(event , item) {
    if(item[TaskModel.FieldNames._id]==event.object["id"] && item[TaskModel.FieldNames.status]) {
      event.object.checked=true;
    } else if(item[TaskModel.FieldNames._id]==event.object["id"] && !item[TaskModel.FieldNames.status]) {
      event.object.checked=false;
    }
    this.listView.refresh();
    this.listView1.refresh();
  }
  goToDo (event,item) {
    this.db.goToDo(this,item).then(function(result:{context,data}) { 
      item[TaskModel.FieldNames.status]=false;              
          result.context.Tasks.push(Object.assign({}, item));
          for(var i =  result.context.doneTasks.length - 1; i >= 0; i--) {
            if(result.context.doneTasks[i] === item) {
              result.context.doneTasks.splice(i, 1);
            }
          }
          result.context.setNumber(result.context); 
          result.context.listView.refresh();
          result.context.listView1.refresh(); 
 });
  }
  finishTask(event,item) {
    this.db.finishTask(this,item).then(function(result:{context,data}) {                 
          item[TaskModel.FieldNames.status]=true;
          result.context.doneTasks.push(Object.assign({}, item));
          for(var i =  result.context.Tasks.length - 1; i >= 0; i--) {
            if(result.context.Tasks[i] === item) {
              result.context.Tasks.splice(i, 1);
            }
          }
          result.context.setNumber(result.context); 
          result.context.listView.refresh();
          result.context.listView1.refresh();
 });    
}

  showEditTask(event,item) {
    let options: ModalDialogOptions = { // #C
      context: this.page, // #C
      fullscreen: false, // #C
      viewContainerRef: this.viewContainerRef // #C
      };   
      this.mode=1;
      this.item=Object.assign({}, item);
      options.context=this;
      options.viewContainerRef= this.viewContainerRef;
    this.modalService.showModal(AddComponent, options)
    .then((dialogResult: any) => {      
      if (dialogResult) {
          var i=dialogResult.context.Tasks.findIndex(x => x[TaskModel.FieldNames.date] === dialogResult.data[TaskModel.FieldNames.date])
          dialogResult.context.Tasks[i]=dialogResult.data;
          dialogResult.context.setNumber(dialogResult.context); 
          dialogResult.context.listView.refresh();
      }  
      this.mode=0;
      this.item=null;    
    }).catch((re)=>{
      this.mode=0;
      this.item=null;
    });
  }

  showAddTask() {
    let options: ModalDialogOptions = { // #C
      context: this.page, // #C
      fullscreen: false, // #C
      viewContainerRef: this.viewContainerRef // #C
      };
      this.mode=0;
      this.item=null;
      options.context=this;
      options.viewContainerRef= this.viewContainerRef;
    this.modalService.showModal(AddComponent, options)
    .then((dialogResult: any) => {
      this.mode=0;
        this.item=null;
      if(dialogResult){
        dialogResult.context.Tasks.push(dialogResult.data);
        dialogResult.context.setNumber(dialogResult.context); 
        dialogResult.context.listView.refresh();
      }      
      }).catch((re)=>{
        this.mode=0;
        this.item=null;
      });;
  }
  
  addTask() {
    if (this.textField.text) {  
      this.db.addTaskByName(this , this.textField.text).then(function(result:{context , data}) {      
          result.context.Tasks.push(result.data);
          result.context.setNumber(result.context); 
          result.context.listView.refresh();
          result.context.textField.text = "";           
    });
  }
}

  constructor(private page:Page,private modalService: ModalDialogService,private viewContainerRef:ViewContainerRef) {
     this.db = new taskdb();
  }

  setTask(result){
    this.Tasks = result;
  }
  
  ngOnInit() {
    this.listView=this.page.getViewById("listView"); 
    this.listView1=this.page.getViewById("listView1");   
    this.textField=this.page.getViewById("txtName");  
    this.db.getDoingTasks(this).then(function(result:{context,data}) {      
        result.context.Tasks=result.data;
        result.context.setNumber(result.context);
    });
    this.db.getDoneTasks(this).then(function(result:{context,data}) {     
        result.context.doneTasks=result.data;        
        result.context.setNumber(result.context);   
    });
  }

  ngOnDestroy() {
  if(this.db){
    this.db.destroyDatabase();
  }
  }

  setNumber(context){
    context.numberDone= context.doneTasks.length;
    context.numberDoing=context.Tasks.length;
  }

}
