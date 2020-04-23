"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ? TS import syntax so TS has better support and auto complete
const express_1 = __importDefault(require("express"));
const todo_routes_1 = __importDefault(require("./routes/todo-routes"));
const body_parser_1 = require("body-parser");
const app = express_1.default();
// parses body of all incoming requests and extracts json data to place in req.body
app.use(body_parser_1.json());
// ? All Requests starting with todos will use imported routes
app.use('/todos', todo_routes_1.default);
// ? handles error if any other middleware has error
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
