import patient from "../models/patientModel.js";
import { validationResult } from 'express-validator';
import asyncWrapper from '../middlewares/async.js';
import { NotFoundError, BadRequestError } from '../errors/index.js';

const patientController = {
  addPatient: asyncWrapper(async (req, res , next) => {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
          next(new BadRequestError(errors.array()[0].msg));
      }
      const newPatient = await patient.create(req.body);
      res.status(201).json({ success: true, data: newPatient });
  }),

  getPatient:asyncWrapper(async (req, res , next) => {
      const listPatient = await patient.find();
      res.status(201).json({
        message: "List of All Patients",
        data: listPatient,
      });
  }),

  getPatientById: asyncWrapper(async (req, res, next) => {
      const patientById = await patient.findById(req.params.id);
      if (!patientById) {
        return next(new NotFoundError(`Patient not found`));
        next(error);
      }
      res.status(201).json({
        message: "Get Patient",
        data: patientById,
      });
  }),

  updatePatient: asyncWrapper(async (req, res , next) => {
      const updatepatient = await patient.findOneAndUpdate(
        { _id: req.params.id },
        {
         name: req.body.name,
          contact: req.body.contact,
          medicalhistory: req.body.medicalHistory
        },
        { new: true }
      );
      if (!updatepatient) {
        return next(new NotFoundError(`Patient not found`));
    } 
      res.status(201).json({
        message: "Appointment updated",
        data: updatepatient,
      });
  }),

  deletePatient: asyncWrapper( async (req, res , next ) => {
      const deletepatient = await patient.deleteOne({
        _id: req.params.id,
      });
  
      res.status(201).json({
        message: "Patient deleted",
        data: deletepatient,
      });
  }),
 };
export default patientController;
