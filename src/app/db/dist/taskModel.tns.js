"use strict";
exports.__esModule = true;
var dbManager_tns_1 = require("./dbManager.tns");
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
            var manager = new dbManager_tns_1.dbManager(TaskModel.dbName);
            TaskModel.dbManager = manager;
            for (var key in TaskModel.viewNames) {
                TaskModel.dbManager.getView(TaskModel.viewNames[key].name);
            }
        }
    };
    TaskModel.add = function (data) {
        return new Promise(function (resolve, reject) {
            var manager = new dbManager_tns_1.dbManager(TaskModel.dbManager);
            resolve(manager.add(data));
        });
    };
    TaskModel.getAll = function () { };
    TaskModel.get = function (where) {
        if (where === void 0) { where = {}; }
        return new Promise(function (resolve, reject) {
            var manager = new dbManager_tns_1.dbManager(TaskModel.dbManager);
            resolve(manager.get(where));
        });
    };
    TaskModel["delete"] = function (id) {
        return new Promise(function (resolve, reject) {
            var manager = new dbManager_tns_1.dbManager(TaskModel.dbManager);
            resolve(manager["delete"](id));
        });
    };
    TaskModel.update = function (documentId, obj) {
        return new Promise(function (resolve, reject) {
            var manager = new dbManager_tns_1.dbManager(TaskModel.dbManager);
            resolve(manager.update(documentId, obj));
        });
    };
    TaskModel.destroyDatabase = function () {
        return new Promise(function (resolve, reject) {
            var manager = new dbManager_tns_1.dbManager(TaskModel.dbManager);
            resolve(manager.destroyDatabase());
        });
    };
    TaskModel.FieldNames = {
        name: "Name", desc: "Desc", date: "Date", reminder: "Reminder",
        priority: "Priority", status: "Status", _id: "_id", time: "Time",
        repeat: "Repeat"
    };
    TaskModel.viewNames = { allTasks: { name: "allTasks", where: {} } };
    TaskModel.dbName = "tasks";
    return TaskModel;
}());
exports.TaskModel = TaskModel;
