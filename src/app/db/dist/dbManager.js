"use strict";
exports.__esModule = true;
var pouchdb_1 = require("pouchdb");
var dbManager = /** @class */ (function () {
    function dbManager(db) {
        this.viewNames = [];
        if (db && db instanceof dbManager) {
            this.database = db.database;
        }
        else if (db) {
            this.database = new pouchdb_1["default"](db);
        }
    }
    dbManager.prototype.checkViewExist = function (viewName, whereObject) {
        if (whereObject === void 0) { whereObject = {}; }
    };
    dbManager.prototype.getView = function (viewName, whereObject) {
        if (whereObject === void 0) { whereObject = {}; }
    };
    dbManager.prototype.add = function (data) {
        return this.database.post(data).then(function (res) {
            return res.id;
        });
    };
    dbManager.prototype.update = function (documentId, data) {
        //data._rev= documentId;      
        return this.database.put(data);
    };
    dbManager.prototype["delete"] = function (documentId) {
        return new Promise(function () {
        });
    };
    dbManager.prototype.getall = function () { };
    dbManager.prototype.get = function (whereObject, option) {
        if (option === void 0) { option = {}; }
        return this.database.allDocs({
            include_docs: true
        }).then(function (result) {
            var res = [];
            var m = [];
            for (var s = 0; s < result.rows.length; s++) {
                m[s] = result.rows[s].doc;
            }
            for (var s = 0; s < m.length; s++) {
                var obj = m[s];
                if (whereObject) {
                    var has = true;
                    for (var key in whereObject) {
                        if (obj[key] !== whereObject[key]) {
                            has = false;
                        }
                    }
                    if (has) {
                        res.push(obj);
                    }
                }
                else {
                    res.push(obj);
                }
            }
            return res;
        })["catch"](function (err) {
            console.log(err);
        });
    };
    dbManager.prototype.destroyDatabase = function () { };
    return dbManager;
}());
exports.dbManager = dbManager;
