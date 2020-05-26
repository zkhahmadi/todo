import { Component, OnInit,OnDestroy, ViewChild, ElementRef} from '@angular/core';
import { Label } from "tns-core-modules/ui/label";
import { TaskModel } from '../db/taskModel.tns';
import { ModalDialogService, ModalDialogOptions,ModalDialogParams} from "nativescript-angular/modal-dialog";
import { DateTimePicker ,DatePickerOptions,TimePickerOptions} from "nativescript-datetimepicker";
@Component({
  selector: 'app-reminder-component',
  templateUrl:'reminder.component.tns.html',
  styleUrls: ['reminder.component.tns.css']
})
export class ReminderComponent implements OnInit {
  @ViewChild('lblDate',{static:true}) lbl1: ElementRef;
  @ViewChild('lblTime',{static:true}) lbl2: ElementRef;
   mDtpicker ;
   lblDate;
   lblTime;
   result;
   mode;
   item;
   setd=function (selectedDate: Date){
    if (selectedDate) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      
      this.lblDate.text=selectedDate.toLocaleDateString(undefined, options);//selectedDate.toISOString().slice(0,10);
      this.result[TaskModel.FieldNames.date]=selectedDate.toLocaleDateString(undefined, options);//.split(" ").join("-");      
    }
  }
  sett=function (selectedDate: Date){
    if (selectedDate) {
      var l=selectedDate.toString();
      this.lblTime.text=l.slice(17,24);
      this.result[TaskModel.FieldNames.time]=l.slice(17,24);
    }
  }

  save(event) {
    if(this.result[TaskModel.FieldNames.date]) {
      this.modalDialogParams.closeCallback({context:this.modalDialogParams.context,data:this.result});
    }   
    else{
      this.modalDialogParams.closeCallback({context:this.modalDialogParams.context,data:{[TaskModel.FieldNames.time]:null,
        [TaskModel.FieldNames.date]:null,
        [TaskModel.FieldNames.reminder]:null,
        [TaskModel.FieldNames.repeat]:null,
     }});
    }
  }

   constructor(private modalService:ModalDialogService,private modalDialogParams: ModalDialogParams) {}
   ngOnInit() { 
    this.lblDate=<Label>this.lbl1.nativeElement;
    this.lblTime=<Label>this.lbl2.nativeElement;
    this.mode=this.modalDialogParams.context.mode;
    this.item=this.modalDialogParams.context.item;
    if(this.mode==1){
      this.result=this.item;
      if(this.result[TaskModel.FieldNames.date] && this.result[TaskModel.FieldNames.date]!="null" &&
      this.result[TaskModel.FieldNames.date]!="undefined" && this.result[TaskModel.FieldNames.date]!="" ){
        this.lblDate.text=this.result[TaskModel.FieldNames.date];
      }
     if(this.result[TaskModel.FieldNames.time] && this.result[TaskModel.FieldNames.time]!="null" &&
     this.result[TaskModel.FieldNames.time]!="undefined" && this.result[TaskModel.FieldNames.time]!=""){
      this.lblTime.text=this.result[TaskModel.FieldNames.time];
     }
    
    }
    else {
        this.result={[TaskModel.FieldNames.time]:null,
        [TaskModel.FieldNames.date]:null,
        [TaskModel.FieldNames.reminder]:null,
        [TaskModel.FieldNames.repeat]:null,
     }
   } 
   this.setd = this.setd.bind(this);
   this.sett = this.sett.bind(this);
  }
   setDate(event) { 
     var option:DatePickerOptions;
     if(this.mode==1){
      var dd=new Date();
      if(this.result[TaskModel.FieldNames.date] && this.result[TaskModel.FieldNames.date]!="null" &&
      this.result[TaskModel.FieldNames.date]!="undefined" && this.result[TaskModel.FieldNames.date]!="")
      {
      var d= Date.parse(this.result[TaskModel.FieldNames.date]+" 00:00:00 GMT");      
      dd.setTime (d) ; 
     }  
      option = {     
        context:(<Label>event.object)._context,
        date:dd ,
        title: "choose date",
        locale: "en_GB", 
       }; 
     } else {
      option = {     
        context:(<Label>event.object)._context,
        date: new Date(),
        title: "choose date",
        locale: "en_GB", 
       }; 
     }        
       DateTimePicker.pickDate(option).then(this.setd);
  }
  setTime(event){
    var option:TimePickerOptions;
      
    if(this.mode==1){
      var d=new Date(); 
      if(this.result[TaskModel.FieldNames.time] && this.result[TaskModel.FieldNames.time]!="null" &&
    this.result[TaskModel.FieldNames.time]!="undefined" && this.result[TaskModel.FieldNames.time]!="")
    { 
      var s=this.result[TaskModel.FieldNames.time].split(":");
      if(s.length>=2){
        d.setHours(parseInt(s[0]));
        d.setMinutes(parseInt(s[1]));
      }     
        }
      option ={     
        context: (<Label>event.object)._context,
              time: d,
              okButtonText: "OK",
              cancelButtonText: "Cancel",
              title: "choose time",
              locale: "en_GB",
              is24Hours: true
       };
    }else{
      option ={     
        context: (<Label>event.object)._context,
              time: new Date(),
              okButtonText: "OK",
              cancelButtonText: "Cancel",
              title: "choose time",
              locale: "en_GB",
              is24Hours: true
       };
    }    
    DateTimePicker.pickTime(option).then(this.sett);
  }
  removeTime(event){
    this.lblTime.text="Set Time";
    this.result[TaskModel.FieldNames.time]=null;
  }
  setReminder(event){

  }
  removeReminder(event){

  }
  setRepeat(event){

  }
  removeRepeat(event){

  }
}
