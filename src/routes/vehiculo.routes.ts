import { Router } from 'express'
import * as vehiculoController from '../controllers/vehiculo.controller'
import multer from '../libs/multer'

const router = Router()

//http://localhost:5000/vehiculo
router.post('/',multer.single('tarjeta_propiedad'), vehiculoController.creatVehiculo)

//http://localhost:5000/vehiculo
router.get('/', vehiculoController.findAllVehiculos)


export default router;