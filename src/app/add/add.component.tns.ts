import {taskdb} from '../db/task';
import { Component, OnInit,OnDestroy,ViewContainerRef, ViewChild, ElementRef} from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { TaskModel } from '../db/taskModel.tns';
import { ReminderComponent } from '../reminder/reminder.component';
import { PriorityComponent } from '../priority/priority.component';
var dialogs = require("tns-core-modules/ui/dialogs");

import { TextView, TextField} from "tns-core-modules/ui";

import { RouterExtensions, PageRoute } from "nativescript-angular/router";

import { ModalDialogService, ModalDialogOptions,ModalDialogParams } from "nativescript-angular/modal-dialog";
@Component({
  selector: 'app-add-component',
  templateUrl:'add.component.tns.html',
  styleUrls: ['add.component.tns.css'],
  
})
export class AddComponent implements OnInit {
  @ViewChild('txtDesc',{static:true}) Desc1: ElementRef;
  @ViewChild('txtName',{static:true}) NameTask1: ElementRef;
  newObject; 
  Desc;
  NameTask;
  db;
  mode;
  item;
     constructor(private pageRoute: PageRoute,private page:Page
    ,private modalService:ModalDialogService,private viewContainerRef:ViewContainerRef
    ,private modalDialogParams: ModalDialogParams) {}
   ngOnInit()
    { 
    this.mode=this.modalDialogParams.context.mode;
    this.item=this.modalDialogParams.context.item;
    this.db = new taskdb(this); 
    this.Desc=<TextView>this.Desc1.nativeElement;
    this.NameTask=<TextField>this.NameTask1.nativeElement;
    if(this.mode==1){
      this.newObject=this.modalDialogParams.context.item;
      this.NameTask.text=this.item[TaskModel.FieldNames.name];
      this.Desc.text=this.item[TaskModel.FieldNames.desc];
        } else 
        {
      this.newObject=TaskModel.getEmptyObject();
    }    
   }
   addTask(event) {
    if (this.NameTask.text &&  this.mode==0){
      this.newObject [TaskModel.FieldNames.name]=this.NameTask.text;
      this.newObject [TaskModel.FieldNames.desc]=this.Desc.text;
      this.db.addTask(this , this.newObject ).then(function(result:{context , data}) {      
        result.context.modalDialogParams.closeCallback({data:result.data,context:result.context.modalDialogParams.context}); 
  });      
    }
    else if(this.NameTask.text &&  this.mode==1){
      this.newObject[TaskModel.FieldNames.name]=this.NameTask.text;;;;;;
      this.newObject[TaskModel.FieldNames.desc]=this.Desc.text;
      this.db.updateTask(this , this.newObject ).then(function(result:{context , data}) {      
      result.context.modalDialogParams.closeCallback({data:result.data,context:result.context.modalDialogParams.context});   
    });
  }
   }
   showReminder(event){
    let options: ModalDialogOptions = { // #C
      context: this.page, // #C
      fullscreen: false, // #C
      viewContainerRef: this.viewContainerRef // #C
      };   
      options.context=this;
      options.viewContainerRef= this.viewContainerRef;
    this.modalService.showModal(ReminderComponent, options)
    .then((dialogResult: any) => {
      if(dialogResult){
        dialogResult.context.newObject[TaskModel.FieldNames.reminder]=dialogResult.data[TaskModel.FieldNames.reminder];
        dialogResult.context.newObject[TaskModel.FieldNames.time]=dialogResult.data[TaskModel.FieldNames.time];
        dialogResult.context.newObject[TaskModel.FieldNames.date]=dialogResult.data[TaskModel.FieldNames.date];
        dialogResult.context.newObject[TaskModel.FieldNames.repeat]=dialogResult.data[TaskModel.FieldNames.repeat]; 
        
      }
     });
   }
   showPriority(event){  
    let options: ModalDialogOptions = { // #C
      context: this.page, // #C
      fullscreen: false, // #C
      viewContainerRef: this.viewContainerRef // #C
      };   
      options.context=this;
      options.viewContainerRef= this.viewContainerRef;
    this.modalService.showModal(PriorityComponent, options)
    .then((dialogResult: any) => {
      if(dialogResult){
        dialogResult.context.newObject[TaskModel.FieldNames.priority]=dialogResult.data;
      }
      }); 
   }
}
