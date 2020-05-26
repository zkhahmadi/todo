import {taskdb} from '../db/task';
import {ListenToDb} from "../interfaces/dbinterface"
import { Component, OnInit,OnDestroy,ViewContainerRef} from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { TaskModel } from '../db/taskModel.tns';
import { AddComponent } from '../add/add.component';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
var observable = require('tns-core-modules/data/observable');
@Component({
  selector: 'app-home-component',
  templateUrl:'home.component.tns.html',
  styleUrls: ['home.component.tns.css']
})
export class HomeComponent implements OnInit,OnDestroy,ListenToDb {
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
  viewModel;

  onChangeChecked(event , item) {
    let indexTask = this.Tasks.findIndex(x => x[TaskModel.FieldNames._id] === item[TaskModel.FieldNames._id]);
    let indexDone= this.doneTasks.findIndex(x => x[TaskModel.FieldNames._id] === item[TaskModel.FieldNames._id]);        
    if(item[TaskModel.FieldNames.status] && indexDone<0 && indexTask>=0) {
      setTimeout(()=>{
        event.object.checked=false;
      },600);     
    } else if(!item[TaskModel.FieldNames.status] && indexDone>=0 && indexTask<0) {
      setTimeout(()=>{
        event.object.checked=true;
      },600);     
    }
  }
  goToDo (event,item) {
    this.db.goToDo(this,item).then(function(result:{context,data}) { 
      /*item[TaskModel.FieldNames.status]=false;              
          result.context.Tasks.push(Object.assign({}, item));
          for(var i =  result.context.doneTasks.length - 1; i >= 0; i--) {
            if(result.context.doneTasks[i] === item) {
              result.context.doneTasks.splice(i, 1);
            }
          }
          result.context.setNumber(result.context); */
          //result.context.listView.refresh();
          //result.context.listView1.refresh(); 
 });
  }
  finishTask(event,item) {
    this.db.finishTask(this,item).then(function(result:{context,data}) {                 
          /*item[TaskModel.FieldNames.status]=true;
          result.context.doneTasks.push(Object.assign({}, item));
          for(var i =  result.context.Tasks.length - 1; i >= 0; i--) {
            if(result.context.Tasks[i] === item) {
              result.context.Tasks.splice(i, 1);
            }
          }
          result.context.setNumber(result.context); 
          result.context.listView.refresh();
          result.context.listView1.refresh();*/
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
          /*var i=dialogResult.context.Tasks.findIndex(x => x[TaskModel.FieldNames.date] === dialogResult.data[TaskModel.FieldNames.date])
          dialogResult.context.Tasks[i]=dialogResult.data;
          dialogResult.context.setNumber(dialogResult.context); 
          dialogResult.context.listView.refresh();*/
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
       /* dialogResult.context.Tasks.push(dialogResult.data);
        dialogResult.context.setNumber(dialogResult.context); 
        dialogResult.context.listView.refresh();*/
      }      
      }).catch((re)=>{
        this.mode=0;
        this.item=null;
      });;
  }
  
  addTask() {
    if (this.textField.text) {  
      this.db.addTaskByName(this , this.textField.text).then(function(result:{context,data}) {      
          /*result.context.Tasks.push(result.data);
          result.context.setNumber(result.context); 
          result.context.listView.refresh();*/
          result.context.textField.text = "";           
    });
  }
}
  constructor(private page:Page,private modalService: ModalDialogService,private viewContainerRef:ViewContainerRef) {
     this.db = new taskdb(this);
  }
  setTask(result) {
    this.Tasks = result;
  }
  onChange(data) {
    for (var i = 0; i < data.length; i++) {
      const documentId = data[i];
      this.db.getItem(this,documentId).then(function(result:{context,data}) { 
        let indexTask = result.context.Tasks.findIndex(x => x[TaskModel.FieldNames._id] ===result.data[0][TaskModel.FieldNames._id]);
        let indexDone= result.context.doneTasks.findIndex(x => x[TaskModel.FieldNames._id] ===result.data[0][TaskModel.FieldNames._id]);
        if (!result.data[0][TaskModel.FieldNames.status]) {
          if (indexTask>=0) {
              result.context.Tasks[indexTask]=result.data[0];
          } else {
            if(indexDone>=0){
              result.context.doneTasks.splice(indexDone, 1);
            }
            result.context.Tasks.push(result.data[0]);
          }
        } else {
          if (indexDone>=0) {
              result.context.doneTasks[indexDone]=result.data[0];
          } else {
            if(indexTask>=0){
              result.context.Tasks.splice(indexTask, 1);
            }
            result.context.doneTasks.push(result.data[0]);
          }
        }
         result.context.setNumber(result.context);
         result.context.listView1.refresh();
         result.context.listView.refresh();
    });
    }
  }
  ngOnInit() {
    this.viewModel = new observable.Observable();
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
    this.db.destroyDatabase(this);
  }
  }
  setNumber(context){
    context.numberDone= context.doneTasks.length;
    context.numberDoing=context.Tasks.length;
  }
}
