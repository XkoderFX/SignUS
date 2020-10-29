"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var usersRouter_1 = require("./routes/usersRouter");
var cors_1 = __importDefault(require("cors"));
var dbConfig_1 = require("./config/dbConfig");
dotenv_1.default.config({ path: "./config.env" });
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
dbConfig_1.connectDB();
app.use("/api/users", usersRouter_1.userRouter);
app.listen(process.env.PORT, function () {
    console.log("started successfully");
});
