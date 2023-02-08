import { Request, Response } from "express";
declare class HomeController {
    private carService;
    private brandService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    remove: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<void>;
    findByName: (req: Request, res: Response) => Promise<void>;
    findByBrand: (req: Request, res: Response) => Promise<void>;
    sortPrice: (req: Request, res: Response) => Promise<void>;
}
declare const _default: HomeController;
export default _default;
