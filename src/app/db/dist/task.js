"use strict";
exports.__esModule = true;
var taskModel_1 = require("./taskModel");
var taskdb = /** @class */ (function () {
    function taskdb() {
        taskModel_1.TaskModel.init();
    }
    taskdb.prototype.getDoingTasks = function (context) {
        var _a;
        return taskModel_1.TaskModel.get((_a = {}, _a[taskModel_1.TaskModel.FieldNames.status] = false, _a)).then(function (result) {
            return { context: context, data: result };
        });
    };
    taskdb.prototype.getDoneTasks = function (context) {
        var _a;
        return taskModel_1.TaskModel.get((_a = {}, _a[taskModel_1.TaskModel.FieldNames.status] = true, _a)).then(function (result) {
            return { context: context, data: result };
        });
    };
    taskdb.prototype.addTaskByName = function (context, name) {
        var data = taskModel_1.TaskModel.getEmptyObject();
        data[taskModel_1.TaskModel.FieldNames.name] = name;
        data[taskModel_1.TaskModel.FieldNames.status] = false;
        return taskModel_1.TaskModel.add(data).then(function (id) {
            data[taskModel_1.TaskModel.FieldNames._id] = id;
            return { context: context, data: data };
        });
    };
    taskdb.prototype.addTask = function (context, newobj) {
        newobj[taskModel_1.TaskModel.FieldNames.status] = false;
        return taskModel_1.TaskModel.add(newobj).then(function (id) {
            newobj[taskModel_1.TaskModel.FieldNames._id] = id;
            return { context: context, data: newobj };
        });
    };
    taskdb.prototype.updateTask = function (context, newobj) {
        return taskModel_1.TaskModel.update(newobj[taskModel_1.TaskModel.FieldNames._id], newobj).then(function (result) {
            return { context: context, data: newobj };
        });
    };
    taskdb.prototype.deleteItem = function (item) {
        return taskModel_1.TaskModel["delete"](item[taskModel_1.TaskModel.FieldNames._id]).then(function () {
            return "";
        });
    };
    taskdb.prototype.finishTask = function (context, item) {
        item[taskModel_1.TaskModel.FieldNames.status] = true;
        return taskModel_1.TaskModel.update(item[taskModel_1.TaskModel.FieldNames._id], item).then(function (result) {
            return { context: context, data: item };
        });
    };
    taskdb.prototype.goToDo = function (context, item) {
        item[taskModel_1.TaskModel.FieldNames.status] = false;
        item[taskModel_1.TaskModel.FieldNames.date] = null;
        item[taskModel_1.TaskModel.FieldNames.time] = null;
        item[taskModel_1.TaskModel.FieldNames.priority] = null;
        item[taskModel_1.TaskModel.FieldNames.repeat] = null;
        item[taskModel_1.TaskModel.FieldNames.reminder] = null;
        return taskModel_1.TaskModel.update(item[taskModel_1.TaskModel.FieldNames._id], item).then(function (result) {
            return { data: result, context: context };
        });
    };
    taskdb.prototype.destroyDatabase = function () {
        taskModel_1.TaskModel.destroyDatabase();
    };
    return taskdb;
}());
exports.taskdb = taskdb;
