
import {Request, Response} from "express";

import brandService from "../service/BrandService";


class BrandController {
    private brandService;


    constructor() {
        this.brandService =brandService;

    }
    getAll = async (req: Request, res: Response) => {
        try {
            let categories = await brandService.getAll()
            res.status(200).json(categories)
        } catch (e) {
            res.status(500).json({
                    message: e.message
                }
            )
        }


    }


}
export default new BrandController();