import { Request, Response } from "express";
declare class BrandController {
    private brandService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
}
declare const _default: BrandController;
export default _default;
