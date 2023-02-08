import {Router} from "express"
import {carRouter} from "./car-router";
export const router = Router();

router.use('/cars',carRouter)
// router.use('/brands',carRouter)
