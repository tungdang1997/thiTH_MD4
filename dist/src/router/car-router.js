"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRouter = void 0;
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
exports.carRouter = (0, express_1.Router)();
exports.carRouter.get('/', HomeController_1.default.getAll);
exports.carRouter.post('', HomeController_1.default.create);
exports.carRouter.put('/:id', HomeController_1.default.update);
exports.carRouter.delete('/:id', HomeController_1.default.remove);
exports.carRouter.get('/:id', HomeController_1.default.findById);
exports.carRouter.get('/findByName', HomeController_1.default.findByName);
exports.carRouter.get('/findByBrand', HomeController_1.default.findByBrand);
exports.carRouter.get('/sort', HomeController_1.default.sortPrice);
//# sourceMappingURL=car-router.js.map