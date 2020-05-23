"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var app_routes_1 = require("./app.routes");
var angular_1 = require("@nstudio/nativescript-checkbox/angular");
var app_routing_module_1 = require("@src/app/app-routing.module");
var app_component_1 = require("./appcomp/app.component");
var home_component_1 = require("./home/home.component");
var add_component_1 = require("./add/add.component");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_floatingactionbutton_1 = require("@nstudio/nativescript-floatingactionbutton");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var reminder_component_1 = require("./reminder/reminder.component");
var priority_component_1 = require("./priority/priority.component");
var angular_2 = require("nativescript-datetimepicker/angular");
element_registry_1.registerElement('Fab', function () { return nativescript_floatingactionbutton_1.Fab; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                add_component_1.AddComponent,
                reminder_component_1.ReminderComponent,
                priority_component_1.PriorityComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                router_1.NativeScriptRouterModule,
                forms_1.NativeScriptFormsModule,
                [angular_1.TNSCheckBoxModule],
                angular_2.NativeScriptDateTimePickerModule,
                router_1.NativeScriptRouterModule.forRoot(app_routes_1.routes),
            ],
            entryComponents: [home_component_1.HomeComponent, add_component_1.AddComponent, reminder_component_1.ReminderComponent, priority_component_1.PriorityComponent],
            providers: [modal_dialog_1.ModalDialogService],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
