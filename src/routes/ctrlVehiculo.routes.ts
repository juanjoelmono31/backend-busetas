import { Router } from 'express'
import * as ctrlVehiculoController from '../controllers/controlVehiculo.controller'

const router = Router()

//http://localhost:5000/control
router.post('/', ctrlVehiculoController.creatCtrlVehiculo)

//http://localhost:5000/control
router.get('/', ctrlVehiculoController.findAllCtrlVehiculos)

export default router;