"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var task_1 = require("../db/task");
var core_1 = require("@angular/core");
var taskModel_1 = require("../db/taskModel");
var reminder_component_1 = require("../reminder/reminder.component");
var priority_component_1 = require("../priority/priority.component");
var dialogs = require("tns-core-modules/ui/dialogs");
var AddComponent = /** @class */ (function () {
    function AddComponent(pageRoute, page, modalService, viewContainerRef, modalDialogParams) {
        this.pageRoute = pageRoute;
        this.page = page;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.modalDialogParams = modalDialogParams;
    }
    AddComponent.prototype.ngOnInit = function () {
        this.mode = this.modalDialogParams.context.mode;
        this.item = this.modalDialogParams.context.item;
        this.db = new task_1.taskdb();
        this.Desc = this.Desc1.nativeElement;
        ;
        this.NameTask = this.NameTask1.nativeElement;
        if (this.mode == 1) {
            this.newObject = this.modalDialogParams.context.item;
            this.NameTask.text = this.item[taskModel_1.TaskModel.FieldNames.name];
            this.Desc.text = this.item[taskModel_1.TaskModel.FieldNames.desc];
        }
        else {
            this.newObject = taskModel_1.TaskModel.getEmptyObject();
        }
    };
    AddComponent.prototype.addTask = function (event) {
        if (this.NameTask.text && this.mode == 0) {
            this.newObject[taskModel_1.TaskModel.FieldNames.name] = this.NameTask.text;
            this.newObject[taskModel_1.TaskModel.FieldNames.desc] = this.Desc.text;
            this.db.addTask(this, this.newObject).then(function (result) {
                result.context.modalDialogParams.closeCallback({ data: result.data, context: result.context.modalDialogParams.context });
            });
        }
        else if (this.NameTask.text && this.mode == 1) {
            this.newObject[taskModel_1.TaskModel.FieldNames.name] = this.NameTask.text;
            this.newObject[taskModel_1.TaskModel.FieldNames.desc] = this.Desc.text;
            this.db.updateTask(this, this.newObject).then(function (result) {
                result.context.modalDialogParams.closeCallback({ data: result.data, context: result.context.modalDialogParams.context });
            });
        }
    };
    AddComponent.prototype.showReminder = function (event) {
        var options = {
            context: this.page,
            fullscreen: false,
            viewContainerRef: this.viewContainerRef // #C
        };
        options.context = this;
        options.viewContainerRef = this.viewContainerRef;
        this.modalService.showModal(reminder_component_1.ReminderComponent, options)
            .then(function (dialogResult) {
            if (dialogResult) {
                dialogResult.context.newObject[taskModel_1.TaskModel.FieldNames.reminder] = dialogResult.data[taskModel_1.TaskModel.FieldNames.reminder];
                dialogResult.context.newObject[taskModel_1.TaskModel.FieldNames.time] = dialogResult.data[taskModel_1.TaskModel.FieldNames.time];
                dialogResult.context.newObject[taskModel_1.TaskModel.FieldNames.date] = dialogResult.data[taskModel_1.TaskModel.FieldNames.date];
                dialogResult.context.newObject[taskModel_1.TaskModel.FieldNames.repeat] = dialogResult.data[taskModel_1.TaskModel.FieldNames.repeat];
            }
        });
    };
    AddComponent.prototype.showPriority = function (event) {
        var options = {
            context: this.page,
            fullscreen: false,
            viewContainerRef: this.viewContainerRef // #C
        };
        options.context = this;
        options.viewContainerRef = this.viewContainerRef;
        this.modalService.showModal(priority_component_1.PriorityComponent, options)
            .then(function (dialogResult) {
            if (dialogResult) {
                dialogResult.context.newObject[taskModel_1.TaskModel.FieldNames.priority] = dialogResult.data;
            }
        });
    };
    __decorate([
        core_1.ViewChild('txtDesc', { static: true })
    ], AddComponent.prototype, "Desc1");
    __decorate([
        core_1.ViewChild('txtName', { static: true })
    ], AddComponent.prototype, "NameTask1");
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-add-component',
            templateUrl: 'add.component.tns.html',
            styleUrls: ['add.component.tns.css']
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
