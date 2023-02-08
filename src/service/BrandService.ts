import {Brand} from "../model/brand";
import {AppDataSource} from "../data-source";


class BrandService{
    private brandRepository
    constructor() {
        this.brandRepository = AppDataSource.getRepository(Brand)
    }
    getAll = async ()=>{
        let brand = await this.brandRepository.find()
        return brand;
    }


}
export default new BrandService();