import {Router} from "express";
import homeController from "../controller/HomeController";
import {router} from "./router";

export const carRouter = Router();

carRouter.get('/',homeController.getAll)
carRouter.post('',homeController.create)
carRouter.put('/:id',homeController.update)
carRouter.delete('/:id',homeController.remove)
carRouter.get('/:id',homeController.findById)
carRouter.get('/findByName',homeController.findByName)
carRouter.get('/findByBrand',homeController.findByBrand)
carRouter.get('/sort',homeController.sortPrice)