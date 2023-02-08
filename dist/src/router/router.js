"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const car_router_1 = require("./car-router");
exports.router = (0, express_1.Router)();
exports.router.use('/cars', car_router_1.carRouter);
//# sourceMappingURL=router.js.map