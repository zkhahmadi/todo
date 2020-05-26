"use strict";
exports.__esModule = true;
var task_1 = require("../app/db/task");
describe("Go To Do Test:", function () {
    var task;
    beforeEach(function () {
        task = new task_1.taskdb(null);
    });
    it("Check gotodo", function () {
        var k = task.getItem(null, "1111");
        console.log(k);
        expect(k).toBeInstanceOf(Promise);
    });
});
