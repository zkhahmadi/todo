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
var add_component_1 = require("../add/add.component");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page, modalService, viewContainerRef) {
        this.page = page;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.Tasks = [];
        this.doneTasks = [];
        this.mode = 0;
        this.item = null;
        this.db = new task_1.taskdb();
    }
    HomeComponent.prototype.onChangeChecked = function (event, item) {
        if (item[taskModel_1.TaskModel.FieldNames._id] == event.object["id"] && item[taskModel_1.TaskModel.FieldNames.status]) {
            event.object.checked = true;
        }
        else if (item[taskModel_1.TaskModel.FieldNames._id] == event.object["id"] && !item[taskModel_1.TaskModel.FieldNames.status]) {
            event.object.checked = false;
        }
        this.listView.refresh();
        this.listView1.refresh();
    };
    HomeComponent.prototype.goToDo = function (event, item) {
        this.db.goToDo(this, item).then(function (result) {
            item[taskModel_1.TaskModel.FieldNames.status] = false;
            result.context.Tasks.push(Object.assign({}, item));
            for (var i = result.context.doneTasks.length - 1; i >= 0; i--) {
                if (result.context.doneTasks[i] === item) {
                    result.context.doneTasks.splice(i, 1);
                }
            }
            result.context.setNumber(result.context);
            result.context.listView.refresh();
            result.context.listView1.refresh();
        });
    };
    HomeComponent.prototype.finishTask = function (event, item) {
        this.db.finishTask(this, item).then(function (result) {
            item[taskModel_1.TaskModel.FieldNames.status] = true;
            result.context.doneTasks.push(Object.assign({}, item));
            for (var i = result.context.Tasks.length - 1; i >= 0; i--) {
                if (result.context.Tasks[i] === item) {
                    result.context.Tasks.splice(i, 1);
                }
            }
            result.context.setNumber(result.context);
            result.context.listView.refresh();
            result.context.listView1.refresh();
        });
    };
    HomeComponent.prototype.showEditTask = function (event, item) {
        var _this = this;
        var options = {
            context: this.page,
            fullscreen: false,
            viewContainerRef: this.viewContainerRef // #C
        };
        this.mode = 1;
        this.item = Object.assign({}, item);
        options.context = this;
        options.viewContainerRef = this.viewContainerRef;
        this.modalService.showModal(add_component_1.AddComponent, options)
            .then(function (dialogResult) {
            if (dialogResult) {
                var i = dialogResult.context.Tasks.findIndex(function (x) { return x[taskModel_1.TaskModel.FieldNames.date] === dialogResult.data[taskModel_1.TaskModel.FieldNames.date]; });
                dialogResult.context.Tasks[i] = dialogResult.data;
                dialogResult.context.setNumber(dialogResult.context);
                dialogResult.context.listView.refresh();
            }
            _this.mode = 0;
            _this.item = null;
        })["catch"](function (re) {
            _this.mode = 0;
            _this.item = null;
        });
    };
    HomeComponent.prototype.showAddTask = function () {
        var _this = this;
        var options = {
            context: this.page,
            fullscreen: false,
            viewContainerRef: this.viewContainerRef // #C
        };
        this.mode = 0;
        this.item = null;
        options.context = this;
        options.viewContainerRef = this.viewContainerRef;
        this.modalService.showModal(add_component_1.AddComponent, options)
            .then(function (dialogResult) {
            _this.mode = 0;
            _this.item = null;
            if (dialogResult) {
                dialogResult.context.Tasks.push(dialogResult.data);
                dialogResult.context.setNumber(dialogResult.context);
                dialogResult.context.listView.refresh();
            }
        })["catch"](function (re) {
            _this.mode = 0;
            _this.item = null;
        });
        ;
    };
    HomeComponent.prototype.addTask = function () {
        if (this.textField.text) {
            this.db.addTaskByName(this, this.textField.text).then(function (result) {
                result.context.Tasks.push(result.data);
                result.context.setNumber(result.context);
                result.context.listView.refresh();
                result.context.textField.text = "";
            });
        }
    };
    HomeComponent.prototype.setTask = function (result) {
        this.Tasks = result;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.listView = this.page.getViewById("listView");
        this.listView1 = this.page.getViewById("listView1");
        this.textField = this.page.getViewById("txtName");
        this.db.getDoingTasks(this).then(function (result) {
            result.context.Tasks = result.data;
            result.context.setNumber(result.context);
        });
        this.db.getDoneTasks(this).then(function (result) {
            result.context.doneTasks = result.data;
            result.context.setNumber(result.context);
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.db) {
            this.db.destroyDatabase();
        }
    };
    HomeComponent.prototype.setNumber = function (context) {
        context.numberDone = context.doneTasks.length;
        context.numberDoing = context.Tasks.length;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home-component',
            templateUrl: 'home.component.tns.html',
            styleUrls: ['home.component.tns.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
