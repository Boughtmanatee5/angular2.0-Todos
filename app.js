/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var TodoList = (function () {
    function TodoList() {
        this.todos = ['eat', 'sleep', 'poop'];
    }
    TodoList.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodoList.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    };
    TodoList = __decorate([
        angular2_1.Component({
            selector: 'todolist'
        }),
        angular2_1.View({
            template: "\n    <h1>Angular 2.0 Todo</h1>\n    <input #todoInput (keyup)=\"doneTyping($event)\">\n    <button (click)=\"addTodo(todoInput.value)\">Add Todo</button>\n    <ul>\n      <li *for=\"#todo of todos\">{{todo}}</li>\n    </ul>\n  ",
            directives: [angular2_1.For]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoList);
    return TodoList;
})();
angular2_1.bootstrap(TodoList);
