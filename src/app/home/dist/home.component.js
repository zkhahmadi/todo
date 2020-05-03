"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var task_1 = require("../db/task");
var taskModel_1 = require("../db/taskModel");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.doneTasks = [];
        this.doingTasks = [];
        this.numberDoing = 0;
        this.numberDone = 0;
        this.db = new task_1.taskdb();
    }
    HomeComponent.prototype.openList = function (evt, state) {
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
        if (state == "doing") {
        }
        else {
        }
    };
    HomeComponent.prototype.onKey = function (event) {
        this.txtName = event.target.value;
    };
    HomeComponent.prototype.addTaskByName = function () {
        if (this.txtName) {
            this.db.addTaskByName(this, this.txtName).then(function (result) {
                result.context.doingTasks.push(result.data);
                result.context.taskName = "";
                result.context.numberDoing = result.context.doingTasks.length;
                var el = document.getElementById("txtName");
                el.value = "";
            });
        }
    };
    HomeComponent.prototype.goToDoing = function (item) {
        this.db.goToDo(this, item).then(function (result) {
            item[taskModel_1.TaskModel.FieldNames.status] = false;
            result.context.doingTasks.push(Object.assign({}, item));
            for (var i = result.context.doneTasks.length - 1; i >= 0; i--) {
                if (result.context.doneTasks[i] === item) {
                    result.context.doneTasks.splice(i, 1);
                }
            }
            result.context.numberDoing = result.context.doingTasks.length;
            result.context.numberDone = result.context.doneTasks.length;
        });
    };
    HomeComponent.prototype.goToDone = function (item) {
        this.db.finishTask(this, item).then(function (result) {
            item[taskModel_1.TaskModel.FieldNames.status] = true;
            result.context.doneTasks.push(Object.assign({}, item));
            for (var i = result.context.doingTasks.length - 1; i >= 0; i--) {
                if (result.context.doingTasks[i] === item) {
                    result.context.doingTasks.splice(i, 1);
                }
            }
            result.context.numberDoing = result.context.doingTasks.length;
            result.context.numberDone = result.context.doneTasks.length;
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.txtName = this.txtName;
        this.db.getDoingTasks(this).then(function (result) {
            result.context.doingTasks = __spreadArrays(result.data);
            result.context.numberDoing = result.context.doingTasks.length;
            result.context.numberDone = result.context.doneTasks.length;
        });
        this.db.getDoneTasks(this).then(function (result) {
            result.context.doneTasks = __spreadArrays(result.data);
            result.context.numberDoing = result.context.doingTasks.length;
            result.context.numberDone = result.context.doneTasks.length;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home-component',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
