"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var router = express_1.Router();
exports.userRouter = router;
router.post("/", userController_1.postUser);
