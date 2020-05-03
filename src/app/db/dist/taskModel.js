"use strict";
exports.__esModule = true;
var dbManager_1 = require("./dbManager");
var TaskModel = /** @class */ (function () {
    function TaskModel() {
    }
    TaskModel.getEmptyObject = function () {
        var obj = {};
        for (var key in TaskModel.FieldNames) {
            obj[TaskModel.FieldNames[key]] = null;
        }
        obj[TaskModel.FieldNames.status] = false;
        obj[TaskModel.FieldNames.priority] = 'normal';
        return obj;
    };
    TaskModel.init = function () {
        if (!TaskModel.dbManager) {
            var manager = new dbManager_1.dbManager(TaskModel.dbName);
            TaskModel.dbManager = manager;
        }
    };
    TaskModel.add = function (data) {
        var manager = new dbManager_1.dbManager(TaskModel.dbManager);
        return manager.add(data);
    };
    TaskModel.getAll = function () {
    };
    TaskModel.get = function (viewName, where) {
        if (where === void 0) { where = {}; }
        var manager = new dbManager_1.dbManager(TaskModel.dbManager);
        return manager.get(viewName, where);
    };
    TaskModel["delete"] = function (id) {
        var manager = new dbManager_1.dbManager(TaskModel.dbManager);
        return manager["delete"](id);
    };
    TaskModel.update = function (documentId, obj) {
        var manager = new dbManager_1.dbManager(TaskModel.dbManager);
        return manager.update(documentId, obj);
    };
    TaskModel.destroyDatabase = function () {
        var manager = new dbManager_1.dbManager(TaskModel.dbManager);
        manager.destroyDatabase();
    };
    TaskModel.FieldNames = {
        name: "Name", desc: "Desc", date: "Date", reminder: "Reminder",
        priority: "Priority", status: "Status", _id: "_id", time: "Time",
        repeat: "Repeat"
    };
    TaskModel.dbName = "home";
    return TaskModel;
}());
exports.TaskModel = TaskModel;
