"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardRouter = void 0;
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
exports.cardRouter = (0, express_1.Router)();
exports.cardRouter.get('/', HomeController_1.default.getAll);
exports.cardRouter.post('', HomeController_1.default.create);
exports.cardRouter.put('/:id', HomeController_1.default.update);
exports.cardRouter.delete('/:id', HomeController_1.default.remove);
exports.cardRouter.get('/:id', HomeController_1.default.findById);
exports.cardRouter.get('/search/findByName', HomeController_1.default.findByName);
//# sourceMappingURL=product-router.js.map