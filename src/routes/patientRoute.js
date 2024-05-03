import express from 'express';
import patientController from '../controllers/patientController.js';
const patientrouter = express.Router();


patientrouter.post('/add',patientController.addPatient);
patientrouter.get('/get',patientController.getPatient);
patientrouter.get('/getById/:id',patientController.getPatientById);
patientrouter.put('/updatepatient/:id',patientController.updatePatient);
patientrouter.delete('/deletepatient/:id',patientController.deletePatient);

export default patientrouter;