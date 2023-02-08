import {Request, Response} from "express";
import carService from "../service/CarService";
import brandService from "../service/BrandService";


class HomeController {
    private carService;
    private brandService;

    constructor() {
        this.carService = carService;
        this.brandService = brandService;
    }

    getAll = async (req: Request, res: Response) => {
        try {
            let products = await carService.getAll()
            res.status(200).json(products)
        } catch (e) {
            res.status(500).json({
                    message: e.message
                }
            )
        }


    }

    create = async (req: Request, res: Response) => {
        try {
            let product = await carService.save(req.body)
            res.status(200).json(product)

        } catch (e) {
            res.status(500).json({
                    message: e.message
                }
            )
        }

    }

    update = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let product = await this.carService.update(id, req.body)
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json({
                    message: e.message
                }
            )
        }

    }

    remove = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            await this.carService.remove(id)
            res.status(200).json({message: 'thành công'})
        } catch (e) {
            res.status(500).json({
                    message: e.message
                }
            )
        }
    }
    findById = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let product = await this.carService.findById(id)
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json({
                    message: e.message
                }
            )
        }
    }
    findByName = async (req: Request, res: Response) => {
        try {
            let name = req.query.name;
            let product = await this.carService.findByName(name)
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json({
                    message: e.message
                }
            )
        }
    }
    findByBrand = async (req: Request, res: Response) => {
        try {
            let brand = req.query.nameBrand;
            let product = await this.carService.findByBrand(brand)
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json({
                    message: e.message
                }
            )
        }
    }

    sortPrice = async (req: Request, res: Response) => {

            let sort = await this.carService.sortPriceASC()
            res.status(200).json(sort)



    }
}

export default new HomeController()