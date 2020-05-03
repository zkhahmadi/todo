(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div>\r\n<div>\r\n    <input #txtName (keyup)=\"onKey($event)\" type=\"text\" id=\"txtName\" hint=\"Task Name\" style=\"margin:10px;\">\r\n    <button class=\"tablinks\" (click)=\"addTaskByName()\">Add Task</button>\r\n</div> \r\n<p></p>  \r\n<div class=\"tab\">\r\n  <button class=\"tablinks\"  (click)=\"openList($event, 'doing')\">{{numberDoing+\"  \"}}Tasks</button>\r\n  <button class=\"tablinks\" (click)=\"openList($event, 'done')\">Done{{\"  \"+numberDone}}</button>\r\n</div>\r\n<div id=\"doing\" class=\"tabcontent\">\r\n    <ul type = \"disc\">\r\n        <li *ngFor=\"let task of doingTasks\" > \r\n            <input type=\"checkbox\"  (click)=\"goToDone(task)\">\r\n            <strong>{{task.Name}}</strong>\r\n        </li>       \r\n    </ul>\r\n</div>\r\n<div id=\"done\" class=\"tabcontent\">\r\n    <ul type = \"disc\">\r\n        <li *ngFor=\"let task of doneTasks\" >   \r\n            <input type=\"checkbox\"  (click)=\"goToDoing(task)\">\r\n            <strong>{{task.Name}}</strong>\r\n        </li>     \r\n    </ul>\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/priority/priority.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/priority/priority.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reminder/reminder.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reminder/reminder.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC9hZGQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AddComponent = /** @class */ (function () {
    function AddComponent() {
    }
    AddComponent.prototype.ngOnInit = function () { };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/app.routes */ "./src/app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _reminder_reminder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reminder/reminder.component */ "./src/app/reminder/reminder.component.ts");
/* harmony import */ var _priority_priority_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./priority/priority.component */ "./src/app/priority/priority.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"], _reminder_reminder_component__WEBPACK_IMPORTED_MODULE_5__["ReminderComponent"], _priority_priority_component__WEBPACK_IMPORTED_MODULE_6__["PriorityComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ],
            entryComponents: [_src_app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"], _reminder_reminder_component__WEBPACK_IMPORTED_MODULE_5__["ReminderComponent"], _priority_priority_component__WEBPACK_IMPORTED_MODULE_6__["PriorityComponent"]],
            providers: [],
            bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _reminder_reminder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reminder/reminder.component */ "./src/app/reminder/reminder.component.ts");
/* harmony import */ var _priority_priority_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priority/priority.component */ "./src/app/priority/priority.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var routes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
        children: [
            {
                path: "add", component: _add_add_component__WEBPACK_IMPORTED_MODULE_1__["AddComponent"],
                children: [
                    {
                        path: "reminder", component: _reminder_reminder_component__WEBPACK_IMPORTED_MODULE_2__["ReminderComponent"], children: [
                            {
                                path: "priority", component: _priority_priority_component__WEBPACK_IMPORTED_MODULE_3__["PriorityComponent"], children: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
];


/***/ }),

/***/ "./src/app/db/dbManager.ts":
/*!*********************************!*\
  !*** ./src/app/db/dbManager.ts ***!
  \*********************************/
/*! exports provided: dbManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbManager", function() { return dbManager; });
/* harmony import */ var pouchdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pouchdb */ "./node_modules/pouchdb/lib/index-browser.es.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var dbManager = /** @class */ (function () {
    function dbManager(db) {
        this.viewNames = [];
        if (db && db instanceof dbManager) {
            this.database = db.database;
        }
        else if (db) {
            this.database = new pouchdb__WEBPACK_IMPORTED_MODULE_0__["default"](db);
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
            data._id = res.id;
            data._rev = res.rev;
            return data;
        });
    };
    dbManager.prototype.update = function (documentId, data) {
        return this.database.put(data);
    };
    dbManager.prototype.delete = function (documentId) {
        return new Promise(function () {
        });
    };
    dbManager.prototype.getall = function () { };
    dbManager.prototype.get = function (whereObject, option) {
        if (option === void 0) { option = {}; }
        return this.database.allDocs({
            include_docs: true,
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
        }).catch(function (err) {
            console.log(err);
        });
    };
    dbManager.prototype.destroyDatabase = function () { };
    return dbManager;
}());



/***/ }),

/***/ "./src/app/db/task.ts":
/*!****************************!*\
  !*** ./src/app/db/task.ts ***!
  \****************************/
/*! exports provided: taskdb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskdb", function() { return taskdb; });
/* harmony import */ var _taskModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskModel */ "./src/app/db/taskModel.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var taskdb = /** @class */ (function () {
    function taskdb() {
        _taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].init();
    }
    taskdb.prototype.getDoingTasks = function (context) {
        var _a;
        return _taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].get((_a = {}, _a[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames.status] = false, _a)).then(function (result) {
            return { context: context, data: result };
        });
    };
    taskdb.prototype.getDoneTasks = function (context) {
        var _a;
        return _taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].get((_a = {}, _a[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames.status] = true, _a)).then(function (result) {
            return { context: context, data: result };
        });
    };
    taskdb.prototype.addTaskByName = function (context, name) {
        var data = _taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].getEmptyObject();
        data[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames.name] = name;
        data[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames.status] = false;
        return _taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].add(data).then(function (data) {
            //data[TaskModel.FieldNames._id]=res.id;
            //data[TaskModel.FieldNames._id]=res.id;
            return { context: context, data: data };
        });
    };
    taskdb.prototype.addTask = function (context, newobj) {
        newobj[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames.status] = false;
        return _taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].add(newobj).then(function (id) {
            newobj[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames._id] = id;
            return { context: context, data: newobj };
        });
    };
    taskdb.prototype.updateTask = function (context, newobj) {
        return _taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].update(newobj[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames._id], newobj).then(function (result) {
            return { context: context, data: newobj };
        });
    };
    taskdb.prototype.deleteItem = function (item) {
        return _taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].delete(item[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames._id]).then(function () {
            return "";
        });
    };
    taskdb.prototype.finishTask = function (context, item) {
        item[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames.status] = true;
        return _taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].update(item[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames._id], item).then(function (result) {
            return { context: context, data: result };
        });
    };
    taskdb.prototype.goToDo = function (context, item) {
        item[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames.status] = false;
        item[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames.date] = null;
        item[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames.time] = null;
        item[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames.priority] = null;
        item[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames.repeat] = null;
        item[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames.reminder] = null;
        return _taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].update(item[_taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].FieldNames._id], item).then(function (result) {
            return { data: result, context: context };
        });
    };
    taskdb.prototype.destroyDatabase = function () {
        _taskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"].destroyDatabase();
    };
    return taskdb;
}());



/***/ }),

/***/ "./src/app/db/taskModel.ts":
/*!*********************************!*\
  !*** ./src/app/db/taskModel.ts ***!
  \*********************************/
/*! exports provided: TaskModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModel", function() { return TaskModel; });
/* harmony import */ var _dbManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dbManager */ "./src/app/db/dbManager.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

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
            var manager = new _dbManager__WEBPACK_IMPORTED_MODULE_0__["dbManager"](TaskModel.dbName);
            TaskModel.dbManager = manager;
        }
    };
    TaskModel.add = function (data) {
        var manager = new _dbManager__WEBPACK_IMPORTED_MODULE_0__["dbManager"](TaskModel.dbManager);
        return manager.add(data);
    };
    TaskModel.getAll = function () {
    };
    TaskModel.get = function (viewName, where) {
        if (where === void 0) { where = {}; }
        var manager = new _dbManager__WEBPACK_IMPORTED_MODULE_0__["dbManager"](TaskModel.dbManager);
        return manager.get(viewName, where);
    };
    TaskModel.delete = function (id) {
        var manager = new _dbManager__WEBPACK_IMPORTED_MODULE_0__["dbManager"](TaskModel.dbManager);
        return manager.delete(id);
    };
    TaskModel.update = function (documentId, obj) {
        var manager = new _dbManager__WEBPACK_IMPORTED_MODULE_0__["dbManager"](TaskModel.dbManager);
        return manager.update(documentId, obj).then(function (result) {
            obj._rev = result.rev;
            return obj;
        });
    };
    TaskModel.destroyDatabase = function () {
        var manager = new _dbManager__WEBPACK_IMPORTED_MODULE_0__["dbManager"](TaskModel.dbManager);
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



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tab {\r\n    overflow: hidden;\r\n    border: 1px solid #ccc;\r\n    background-color: #f1f1f1;\r\n  }\r\n  .tab button {\r\n    background-color: inherit;\r\n    float: left;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 14px 16px;\r\n    transition: 0.3s;\r\n  }\r\n  .tab button:hover {\r\n    background-color: #ddd;\r\n  }\r\n  .tab button.active {\r\n    background-color: #ccc;\r\n  }\r\n  .tabcontent {\r\n    display: none;\r\n    padding: 6px 12px;\r\n    border: 1px solid #ccc;\r\n    border-top: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICB9XHJcbiAgLnRhYiBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG4gIC50YWIgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgfVxyXG4gIC50YWIgYnV0dG9uLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIH1cclxuICAudGFiY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _db_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/task */ "./src/app/db/task.ts");
/* harmony import */ var _db_taskModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/taskModel */ "./src/app/db/taskModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.doneTasks = [];
        this.doingTasks = [];
        this.numberDoing = 0;
        this.numberDone = 0;
        this.db = new _db_task__WEBPACK_IMPORTED_MODULE_1__["taskdb"]();
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
            result.data[_db_taskModel__WEBPACK_IMPORTED_MODULE_2__["TaskModel"].FieldNames.status] = false;
            result.context.doingTasks.push(Object.assign({}, result.data));
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
            result.data[_db_taskModel__WEBPACK_IMPORTED_MODULE_2__["TaskModel"].FieldNames.status] = true;
            result.context.doneTasks.push(Object.assign({}, result.data));
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
            result.context.doingTasks = result.data.slice();
            result.context.numberDoing = result.context.doingTasks.length;
            result.context.numberDone = result.context.doneTasks.length;
        });
        this.db.getDoneTasks(this).then(function (result) {
            result.context.doneTasks = result.data.slice();
            result.context.numberDoing = result.context.doingTasks.length;
            result.context.numberDone = result.context.doneTasks.length;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/priority/priority.component.css":
/*!*************************************************!*\
  !*** ./src/app/priority/priority.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/priority/priority.component.ts":
/*!************************************************!*\
  !*** ./src/app/priority/priority.component.ts ***!
  \************************************************/
/*! exports provided: PriorityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriorityComponent", function() { return PriorityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PriorityComponent = /** @class */ (function () {
    function PriorityComponent() {
    }
    PriorityComponent.prototype.ngOnInit = function () { };
    PriorityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-priority-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./priority.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/priority/priority.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./priority.component.css */ "./src/app/priority/priority.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PriorityComponent);
    return PriorityComponent;
}());



/***/ }),

/***/ "./src/app/reminder/reminder.component.css":
/*!*************************************************!*\
  !*** ./src/app/reminder/reminder.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbWluZGVyL3JlbWluZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/reminder/reminder.component.ts":
/*!************************************************!*\
  !*** ./src/app/reminder/reminder.component.ts ***!
  \************************************************/
/*! exports provided: ReminderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderComponent", function() { return ReminderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ReminderComponent = /** @class */ (function () {
    function ReminderComponent() {
    }
    ReminderComponent.prototype.ngOnInit = function () { };
    ReminderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reminder-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./reminder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reminder/reminder.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./reminder.component.css */ "./src/app/reminder/reminder.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ReminderComponent);
    return ReminderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _src_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_src_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\project\ToDo\todo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map