import appointment from "../models/appointmentmodel.js";
import asyncWrapper from "../middlewares/async.js";
import { NotFoundError, BadRequestError } from '../errors/index.js';
import { validationResult } from 'express-validator';

const appointmentController = {
  addappointment: asyncWrapper( async (req, res, next) => {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
          next(new BadRequestError(errors.array()[0].msg));
      }
      const newappointment = await appointment.create(req.body);
      res.status(201).json({ success: true, data: newappointment });
  }),

  getappointment:asyncWrapper( async (req, res , next) => {
      const listappointment = await appointment.find();
      res.status(201).json({
        message: "List of All Appointment",
        data: listappointment,
      });
  }),

  getAppointmentById:asyncWrapper( async (req, res, next) => {
      const appointmentById = await appointment.findById(req.params.id);
      if (!appointmentById) {
          return next(new NotFoundError(`Appointment not found`));
      } 
      res.status(201).json({
        message: "Get Appointment",
        data: appointmentById,
      });
  }),

  updateAppointment:asyncWrapper( async (req, res , next) => {
      const updateappointment = await appointment.findOneAndUpdate(
        { _id: req.params.id },
        {
          patientId: req.body.patientId,
          doctorId: req.body.doctorId,
          appointmentDate: req.body.appointmentDate,
          status: req.body.status,
        },
        { new: true }
      );
      if (!updateappointment) {
        return next(new NotFoundError(`Appointment not found`));
    } 
      res.status(201).json({
        message: "Appointment updated",
        data: updateappointment,
      });
  }),

  deleteAppointment: asyncWrapper( async (req, res , next) => {
      const deleteappointment = await appointment.deleteOne({
        _id: req.params.id,
      });
  
      res.status(201).json( {
        message: "Appointment deleted",
        data: deleteappointment,
      });
  }),
  
};
export default appointmentController;
