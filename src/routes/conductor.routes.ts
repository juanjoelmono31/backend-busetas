import { Router } from 'express'
import * as conductorController from '../controllers/conductor.controller'

const router = Router()

//http://localhost:5000/conductor
router.post('/', conductorController.creatConductor)

//http://localhost:5000/conductor
router.get('/', conductorController.findAllConductor)

export default router;