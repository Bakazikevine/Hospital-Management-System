import express from 'express';
import doctorController from '../controllers/doctorController.js';
const router = express.Router();


router.post('/add',doctorController.addDoctor);
router.get('/get',doctorController.getDoctors);
router.get('/getById/:id',doctorController.getDoctorById);
router.put('/updateDoctor/:id',doctorController.updateDoctor);
router.delete('/deleteDoctor/:id',doctorController.deleteDoctor);
export default router;