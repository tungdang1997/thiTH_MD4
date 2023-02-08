"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const brand_1 = require("../model/brand");
const data_source_1 = require("../data-source");
class BrandService {
    constructor() {
        this.getAll = async () => {
            let brand = await this.brandRepository.find();
            return brand;
        };
        this.brandRepository = data_source_1.AppDataSource.getRepository(brand_1.Brand);
    }
}
exports.default = new BrandService();
//# sourceMappingURL=BrandService.js.map