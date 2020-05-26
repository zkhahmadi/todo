"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var taskModel_tns_1 = require("../db/taskModel.tns");
var nativescript_datetimepicker_1 = require("nativescript-datetimepicker");
var ReminderComponent = /** @class */ (function () {
    function ReminderComponent(modalService, modalDialogParams) {
        this.modalService = modalService;
        this.modalDialogParams = modalDialogParams;
        this.setd = function (selectedDate) {
            if (selectedDate) {
                var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                this.lblDate.text = selectedDate.toLocaleDateString(undefined, options); //selectedDate.toISOString().slice(0,10);
                this.result[taskModel_tns_1.TaskModel.FieldNames.date] = selectedDate.toLocaleDateString(undefined, options); //.split(" ").join("-");      
            }
        };
        this.sett = function (selectedDate) {
            if (selectedDate) {
                var l = selectedDate.toString();
                this.lblTime.text = l.slice(17, 24);
                this.result[taskModel_tns_1.TaskModel.FieldNames.time] = l.slice(17, 24);
            }
        };
    }
    ReminderComponent.prototype.save = function (event) {
        var _a;
        if (this.result[taskModel_tns_1.TaskModel.FieldNames.date]) {
            this.modalDialogParams.closeCallback({ context: this.modalDialogParams.context, data: this.result });
        }
        else {
            this.modalDialogParams.closeCallback({ context: this.modalDialogParams.context, data: (_a = {}, _a[taskModel_tns_1.TaskModel.FieldNames.time] = null, _a[taskModel_tns_1.TaskModel.FieldNames.date] = null, _a[taskModel_tns_1.TaskModel.FieldNames.reminder] = null, _a[taskModel_tns_1.TaskModel.FieldNames.repeat] = null, _a) });
        }
    };
    ReminderComponent.prototype.ngOnInit = function () {
        var _a;
        this.lblDate = this.lbl1.nativeElement;
        this.lblTime = this.lbl2.nativeElement;
        this.mode = this.modalDialogParams.context.mode;
        this.item = this.modalDialogParams.context.item;
        if (this.mode == 1) {
            this.result = this.item;
            if (this.result[taskModel_tns_1.TaskModel.FieldNames.date] && this.result[taskModel_tns_1.TaskModel.FieldNames.date] != "null" &&
                this.result[taskModel_tns_1.TaskModel.FieldNames.date] != "undefined" && this.result[taskModel_tns_1.TaskModel.FieldNames.date] != "") {
                this.lblDate.text = this.result[taskModel_tns_1.TaskModel.FieldNames.date];
            }
            if (this.result[taskModel_tns_1.TaskModel.FieldNames.time] && this.result[taskModel_tns_1.TaskModel.FieldNames.time] != "null" &&
                this.result[taskModel_tns_1.TaskModel.FieldNames.time] != "undefined" && this.result[taskModel_tns_1.TaskModel.FieldNames.time] != "") {
                this.lblTime.text = this.result[taskModel_tns_1.TaskModel.FieldNames.time];
            }
        }
        else {
            this.result = (_a = {}, _a[taskModel_tns_1.TaskModel.FieldNames.time] = null, _a[taskModel_tns_1.TaskModel.FieldNames.date] = null, _a[taskModel_tns_1.TaskModel.FieldNames.reminder] = null, _a[taskModel_tns_1.TaskModel.FieldNames.repeat] = null, _a);
        }
        this.setd = this.setd.bind(this);
        this.sett = this.sett.bind(this);
    };
    ReminderComponent.prototype.setDate = function (event) {
        var option;
        if (this.mode == 1) {
            var dd = new Date();
            if (this.result[taskModel_tns_1.TaskModel.FieldNames.date] && this.result[taskModel_tns_1.TaskModel.FieldNames.date] != "null" &&
                this.result[taskModel_tns_1.TaskModel.FieldNames.date] != "undefined" && this.result[taskModel_tns_1.TaskModel.FieldNames.date] != "") {
                var d = Date.parse(this.result[taskModel_tns_1.TaskModel.FieldNames.date] + " 00:00:00 GMT");
                dd.setTime(d);
            }
            option = {
                context: event.object._context,
                date: dd,
                title: "choose date",
                locale: "en_GB"
            };
        }
        else {
            option = {
                context: event.object._context,
                date: new Date(),
                title: "choose date",
                locale: "en_GB"
            };
        }
        nativescript_datetimepicker_1.DateTimePicker.pickDate(option).then(this.setd);
    };
    ReminderComponent.prototype.setTime = function (event) {
        var option;
        if (this.mode == 1) {
            var d = new Date();
            if (this.result[taskModel_tns_1.TaskModel.FieldNames.time] && this.result[taskModel_tns_1.TaskModel.FieldNames.time] != "null" &&
                this.result[taskModel_tns_1.TaskModel.FieldNames.time] != "undefined" && this.result[taskModel_tns_1.TaskModel.FieldNames.time] != "") {
                var s = this.result[taskModel_tns_1.TaskModel.FieldNames.time].split(":");
                if (s.length >= 2) {
                    d.setHours(parseInt(s[0]));
                    d.setMinutes(parseInt(s[1]));
                }
            }
            option = {
                context: event.object._context,
                time: d,
                okButtonText: "OK",
                cancelButtonText: "Cancel",
                title: "choose time",
                locale: "en_GB",
                is24Hours: true
            };
        }
        else {
            option = {
                context: event.object._context,
                time: new Date(),
                okButtonText: "OK",
                cancelButtonText: "Cancel",
                title: "choose time",
                locale: "en_GB",
                is24Hours: true
            };
        }
        nativescript_datetimepicker_1.DateTimePicker.pickTime(option).then(this.sett);
    };
    ReminderComponent.prototype.removeTime = function (event) {
        this.lblTime.text = "Set Time";
        this.result[taskModel_tns_1.TaskModel.FieldNames.time] = null;
    };
    ReminderComponent.prototype.setReminder = function (event) {
    };
    ReminderComponent.prototype.removeReminder = function (event) {
    };
    ReminderComponent.prototype.setRepeat = function (event) {
    };
    ReminderComponent.prototype.removeRepeat = function (event) {
    };
    __decorate([
        core_1.ViewChild('lblDate', { static: true })
    ], ReminderComponent.prototype, "lbl1");
    __decorate([
        core_1.ViewChild('lblTime', { static: true })
    ], ReminderComponent.prototype, "lbl2");
    ReminderComponent = __decorate([
        core_1.Component({
            selector: 'app-reminder-component',
            templateUrl: 'reminder.component.tns.html',
            styleUrls: ['reminder.component.tns.css']
        })
    ], ReminderComponent);
    return ReminderComponent;
}());
exports.ReminderComponent = ReminderComponent;
