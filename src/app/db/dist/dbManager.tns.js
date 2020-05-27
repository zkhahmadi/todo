"use strict";
exports.__esModule = true;
exports.dbManager = void 0;
var nativescript_couchbase_plugin_1 = require("nativescript-couchbase-plugin");
var dbManager = /** @class */ (function () {
    function dbManager(context, db) {
        this.viewNames = [];
        if (db && db instanceof dbManager) {
            this.database = db.database;
        }
        else if (db) {
            this.database = new nativescript_couchbase_plugin_1.Couchbase(db);
            this.setupSync(context);
        }
    }
    dbManager.prototype.destroyDb = function () {
        if (this.database) {
            //  this.database.de
        }
    };
    dbManager.prototype.checkViewExist = function (viewName, whereObject) {
        if (whereObject === void 0) { whereObject = {}; }
        for (var key in this.viewNames) {
            if (this.viewNames[key].viewName === viewName) {
                var keys1 = Object.keys(whereObject);
                var keys2 = Object.keys(this.viewNames[key].whereObject);
                if (keys1.length === keys2.length) {
                    var equal = true;
                    for (var k in whereObject) {
                        if (whereObject[k] !== this.viewNames[key].whereObject[k]) {
                            equal = false;
                        }
                    }
                    if (equal) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    dbManager.prototype.getView = function (viewName, whereObject) {
        if (whereObject === void 0) { whereObject = {}; }
        if (this.database) { }
    };
    dbManager.prototype.add = function (data) {
        if (this.database) {
            return this.database.createDocument(data);
        }
    };
    dbManager.prototype.update = function (documentId, data) {
        if (this.database) {
            this.database.updateDocument(documentId, data);
        }
    };
    dbManager.prototype["delete"] = function (documentId) {
        if (this.database) {
            return this.database.deleteDocument(documentId);
        }
    };
    dbManager.prototype.getall = function (viewName, option) {
        if (option === void 0) { option = {}; }
        if (this.database) {
            var results = this.database.query({
                select: [],
                from: null,
                where: [],
                order: []
            });
            return results; //this.database.executeQuery(viewName,option);
        }
    };
    dbManager.prototype.get = function (whereObject) {
        if (this.database) {
            var where = [];
            for (var key in whereObject) {
                var k = {};
                k["property"] = key;
                k["comparison"] = "equalTo";
                k["value"] = whereObject[key];
                where.push(k);
            }
            var results = this.database.query({
                select: [],
                from: null,
                where: where,
                order: []
            });
            return results;
            /*if(!this.checkViewExist(viewName,whereObject)) {
            this.database.createView(viewName , "1" , function(document , emitter) {
                var obj = document;
                if (whereObject) {
                     var has=true;
                    for(var key in whereObject) {
                      if(obj[key]!==whereObject[key]) {
                         has=false;
                      }
                    }
                    if (has) {
                     emitter.emit(obj._id,obj);
                    }
                } else {
                 emitter.emit(obj._id,obj);
                }
            });
            return this.database.executeQuery(viewName,option);
        } else {
            return this.database.executeQuery(viewName,option);
        }*/
        }
    };
    dbManager.prototype.setupSync = function (context) {
        this.push = this.database.createPushReplication('ws://172.18.160.179:4984/todo/');
        this.push.setUserNameAndPassword("zkhahmadi", "123456");
        var pull = this.database.createPullReplication('ws://172.18.160.179:4984/todo/');
        pull.setUserNameAndPassword("zkhahmadi", "123456");
        this.push.setChannels(["Doing", "Done"]);
        this.push.setContinuous(true);
        this.push.start();
        pull.setChannels(["Doing", "Done"]);
        pull.setContinuous(true);
        pull.start();
        this.database.addDatabaseChangeListener(function (changes) {
            context.onChange(changes);
            /*for (var i = 0; i < changes.length; i++) {
              const documentId = changes[i];
              console.log(documentId);
            }*/
        });
    };
    dbManager.prototype.destroyDatabase = function () {
        if (this.database) {
            this.database.destroyDatabase();
        }
    };
    return dbManager;
}());
exports.dbManager = dbManager;
