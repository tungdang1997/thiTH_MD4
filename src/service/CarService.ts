import {Car} from "../model/car";
import {AppDataSource} from "../data-source";


class CarService {
    private carRepository
    constructor() {
        this.carRepository = AppDataSource.getRepository(Car)
    }
    getAll = async ()=>{
        let sql = `select car.id, car.name, car.price, car.quantity, brand.nameBrand, brand.describe from car join brand on car.id = brand.idBrand`
        let products = await this.carRepository.query(sql)
        return products;
    }
    save = async (car)=>{
        return this.carRepository.save(car);
    }
    private update = async (id, newCar)=>{
        let product = await this.carRepository.findOneBy({id:id});
        if(!product){
            return null;
        }
        return this.carRepository.update({id:id},newCar);
    }
    private findById = async (id)=>{
        let product = await this.carRepository.findOneBy({id:id});
        if(!product){
            return null;
        }
        return product;
    }
    private findByName = async (name)=>{
        let sql =`select * from car c join brand b on c.idBrand = b.idBrand where c.name like '%${name}%'`
        let car = await this.carRepository.query(sql);
        if(!car){
            return null;
        }
        return car;
    }

    private findByBrand = async (name)=>{
        let sql =`select c.id,c.name,c.price,c.quantity,b.nameBrand, b.describe from car c join brand b on c.brand = b.idBrand where b.name like '%${name}%'`
        let brand = await this.carRepository.query(sql);
        if(!brand){
            return null;
        }
        return brand;
    }

    // private findByBrand = async (name)=>{
    //     let sql =`select c.id,c.name,c.price,c.quantity,b.name as nameBrand, b.describe from card c join brand b on p.category = c.id where b.name like '%${name}%'`
    //     let brand = await this.cardRepository.query(sql);
    //     if(!brand){
    //         return null;
    //     }
    //     return brand;
    // }


    private remove = async (id)=>{
        let product = await this.carRepository.findOneBy({id:id});
        if(!product){
            return null;
        }
        return this.carRepository.delete({id: id});
    }

    sortPriceASC = async()=>{
        let sql = `select * from car order by car.price ASC `
        let sort = await this.carRepository.query(sql);
        return sort

    }

}
export default new CarService();