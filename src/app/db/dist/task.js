"use strict";
exports.__esModule = true;
var taskModel_tns_1 = require("./taskModel.tns");
var taskdb = /** @class */ (function () {
    function taskdb(context) {
        taskModel_tns_1.TaskModel.init(context);
    }
    taskdb.prototype.getItem = function (context, documentId) {
        var _a;
        return taskModel_tns_1.TaskModel.get(context, (_a = {}, _a[taskModel_tns_1.TaskModel.FieldNames.id] = documentId, _a)).then(function (result) {
            return { context: context, data: result };
        });
    };
    taskdb.prototype.getDoingTasks = function (context) {
        var _a;
        return taskModel_tns_1.TaskModel.get(context, (_a = {}, _a[taskModel_tns_1.TaskModel.FieldNames.status] = false, _a)).then(function (result) {
            return { context: context, data: result };
        });
    };
    taskdb.prototype.getDoneTasks = function (context) {
        var _a;
        return taskModel_tns_1.TaskModel.get(context, (_a = {}, _a[taskModel_tns_1.TaskModel.FieldNames.status] = true, _a)).then(function (result) {
            return { context: context, data: result };
        });
    };
    taskdb.prototype.addTaskByName = function (context, name) {
        var data = taskModel_tns_1.TaskModel.getEmptyObject();
        data[taskModel_tns_1.TaskModel.FieldNames.name] = name;
        data[taskModel_tns_1.TaskModel.FieldNames.status] = false;
        return taskModel_tns_1.TaskModel.add(context, data).then(function (data) {
            return { context: context, data: data };
        });
    };
    taskdb.prototype.addTask = function (context, newobj) {
        newobj[taskModel_tns_1.TaskModel.FieldNames.status] = false;
        return taskModel_tns_1.TaskModel.add(context, newobj).then(function (id) {
            newobj[taskModel_tns_1.TaskModel.FieldNames._id] = id;
            return { context: context, data: newobj };
        });
    };
    taskdb.prototype.updateTask = function (context, newobj) {
        return taskModel_tns_1.TaskModel.update(context, newobj[taskModel_tns_1.TaskModel.FieldNames._id], newobj).then(function (result) {
            return { context: context, data: newobj };
        });
    };
    taskdb.prototype.deleteItem = function (context, item) {
        return taskModel_tns_1.TaskModel["delete"](context, item[taskModel_tns_1.TaskModel.FieldNames._id]).then(function () {
            return "";
        });
    };
    taskdb.prototype.finishTask = function (context, item) {
        item[taskModel_tns_1.TaskModel.FieldNames.status] = true;
        return taskModel_tns_1.TaskModel.update(context, item[taskModel_tns_1.TaskModel.FieldNames._id], item).then(function (result) {
            return { context: context, data: result };
        });
    };
    taskdb.prototype.goToDo = function (context, item) {
        item[taskModel_tns_1.TaskModel.FieldNames.status] = false;
        item[taskModel_tns_1.TaskModel.FieldNames.date] = null;
        item[taskModel_tns_1.TaskModel.FieldNames.time] = null;
        item[taskModel_tns_1.TaskModel.FieldNames.priority] = null;
        item[taskModel_tns_1.TaskModel.FieldNames.repeat] = null;
        item[taskModel_tns_1.TaskModel.FieldNames.reminder] = null;
        return taskModel_tns_1.TaskModel.update(context, item[taskModel_tns_1.TaskModel.FieldNames._id], item).then(function (result) {
            return { data: result, context: context };
        });
    };
    taskdb.prototype.destroyDatabase = function (context) {
        taskModel_tns_1.TaskModel.destroyDatabase(context);
    };
    return taskdb;
}());
exports.taskdb = taskdb;
