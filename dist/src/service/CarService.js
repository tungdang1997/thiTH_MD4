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
        this.findByAboutPrice = async () => {
            console.log(1);
            let sql = `select c.id,c.name,c.price,c.quantity,b.nameBrand, b.describe from car c join brand b on c.brand = b.idBrand where c.price BETWEEN 5 AND 9`;
            let price = await this.carRepository.query(sql);
            console.log(price);
            if (!price) {
                return null;
            }
            return price;
        };
        this.findByAboutQuantity = async () => {
            let sql = `select * from car c join brand b on c.brand = b.idBrand where c.quantity BETWEEN 0 AND 10`;
            let price = await this.carRepository.query(sql);
            if (!price) {
                return null;
            }
            return price;
        };
        this.findByMaxCar = async () => {
            let sql = `select MAX(car) from brand join car on brand.idBrand = car.brand`;
            let price = await this.carRepository.query(sql);
            if (!price) {
                return null;
            }
            return price;
        };
        this.remove = async (id) => {
            let product = await this.carRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.carRepository.delete({ id: id });
        };
        this.sortPriceASC = async () => {
            let sql = `select * from car join brand on car.brand = brand.idBrand order by car.price ASC `;
            let sort = await this.carRepository.query(sql);
            return sort;
        };
        this.sortDownByQuantity = async () => {
            let sql = `select * from car order by car.quantity DESC`;
            let car = await this.carRepository.query(sql);
            return car;
        };
        this.carRepository = data_source_1.AppDataSource.getRepository(car_1.Car);
    }
}
exports.default = new CarService();
//# sourceMappingURL=CarService.js.map