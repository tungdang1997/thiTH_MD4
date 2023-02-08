"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BrandService_1 = __importDefault(require("../service/BrandService"));
class BrandController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let categories = await BrandService_1.default.getAll();
                res.status(200).json(categories);
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.brandService = BrandService_1.default;
    }
}
exports.default = new BrandController();
//# sourceMappingURL=BrandController.js.map