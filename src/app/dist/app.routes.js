"use strict";
exports.__esModule = true;
var home_component_1 = require("@src/app/home/home.component");
var add_component_1 = require("./add/add.component");
var reminder_component_1 = require("./reminder/reminder.component");
var priority_component_1 = require("./priority/priority.component");
exports.routes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            {
                path: "add", component: add_component_1.AddComponent,
                children: [
                    {
                        path: "reminder", component: reminder_component_1.ReminderComponent, children: [
                            {
                                path: "priority", component: priority_component_1.PriorityComponent, children: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
];
