"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("../model/car");
const data_source_1 = require("../data-source");
class CarService {
    constructor() {
        this.getAll = async () => {
            let sql = `select car.id, car.name, car.price, car.quantity, brand.nameBrand, brand.describe from car join brand on car.id = brand.idBrand`;
            let products = await this.carRepository.query(sql);
            return products;
        };
        this.save = async (car) => {
            return this.carRepository.save(car);
        };
        this.update = async (id, newCar) => {
            let product = await this.carRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.carRepository.update({ id: id }, newCar);
        };
        this.findById = async (id) => {
            let product = await this.carRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return product;
        };
        this.findByName = async (name) => {
            let sql = `select * from car c join brand b on c.idBrand = b.idBrand where c.name like '%${name}%'`;
            let car = await this.carRepository.query(sql);
            if (!car) {
                return null;
            }
            return car;
        };
        this.findByBrand = async (name) => {
            let sql = `select c.id,c.name,c.price,c.quantity,b.nameBrand, b.describe from car c join brand b on c.brand = b.idBrand where b.name like '%${name}%'`;
            let brand = await this.carRepository.query(sql);
            if (!brand) {
                return null;
            }
            return brand;
        };
        this.remove = async (id) => {
            let product = await this.carRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.carRepository.delete({ id: id });
        };
        this.sortPriceASC = async () => {
            let sql = `select * from car order by car.price ASC `;
            let sort = await this.carRepository.query(sql);
            return sort;
        };
        this.carRepository = data_source_1.AppDataSource.getRepository(car_1.Car);
    }
}
exports.default = new CarService();
//# sourceMappingURL=CarService.js.map