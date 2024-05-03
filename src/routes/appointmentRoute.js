import express from 'express';
import appointmentController from '../controllers/appointmentController.js';
const appointmentroute = express.Router();


appointmentroute.post('/add',appointmentController.addappointment);
appointmentroute.get('/get',appointmentController.getappointment);
appointmentroute.get('/getById/:id',appointmentController.getAppointmentById);
appointmentroute.put('/updateappointment/:id',appointmentController.updateAppointment);
appointmentroute.delete('/deleteappointment/:id',appointmentController.deleteAppointment);
export default appointmentroute;