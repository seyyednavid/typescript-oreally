"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/hello", (req, res) => {
    res.send("Hello from Express with TypeScript and Nodemon and ts-node!!!");
});
app.listen(8080, () => {
    console.log(`Server is listening on port 8080 `);
});
