"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CarService_1 = __importDefault(require("../service/CarService"));
const BrandService_1 = __importDefault(require("../service/BrandService"));
class HomeController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let products = await CarService_1.default.getAll();
                res.status(200).json(products);
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.create = async (req, res) => {
            try {
                let product = await CarService_1.default.save(req.body);
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.update = async (req, res) => {
            try {
                let id = req.params.id;
                let product = await this.carService.update(id, req.body);
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.remove = async (req, res) => {
            try {
                let id = req.params.id;
                await this.carService.remove(id);
                res.status(200).json({ message: 'thành công' });
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.findById = async (req, res) => {
            try {
                let id = req.params.id;
                let product = await this.carService.findById(id);
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.findByName = async (req, res) => {
            try {
                let name = req.query.name;
                let product = await this.carService.findByName(name);
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.findByAboutPrice = async (req, res) => {
            console.log(1);
            try {
                let price = req.query.price;
                let p = await this.carService.findByAboutPrice(price);
                res.status(200).json(p);
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.findByAboutQuantity = async (req, res) => {
            try {
                let quantity = req.query.quantity;
                let q = await this.carService.findByAboutPrice(quantity);
                res.status(200).json(q);
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.findByBrand = async (req, res) => {
            try {
                let brand = req.query.nameBrand;
                let product = await this.carService.findByBrand(brand);
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.sortPrice = async (req, res) => {
            let sort = await this.carService.sortPriceASC();
            res.status(200).json(sort);
        };
        this.sortQuantity = async (req, res) => {
            let sort = await this.carService.sortDownByQuantity();
            res.status(200).json(sort);
        };
        this.carService = CarService_1.default;
        this.brandService = BrandService_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=HomeController.js.map