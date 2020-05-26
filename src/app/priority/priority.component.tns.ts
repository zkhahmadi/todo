import {taskdb} from '../db/task';
import { Component, OnInit,OnDestroy} from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { TaskModel } from '../db/taskModel.tns';
import { ModalDialogService, ModalDialogOptions,ModalDialogParams} from "nativescript-angular/modal-dialog";
@Component({
  selector: 'app-priority-component',
  templateUrl:'priority.component.tns.html',
  styleUrls: ['priority.component.tns.css']
})
export class PriorityComponent implements OnInit {
   mDtpicker ;
   constructor(private modalService:ModalDialogService,private modalDialogParams: ModalDialogParams) {}
   ngOnInit() {}

   selectOption(priority) {
    this.modalDialogParams.closeCallback({context:this.modalDialogParams.context,data:priority});
   }
  
}
