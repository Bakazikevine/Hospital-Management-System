import Doctor from "../models/doctorModel.js";
import asyncWrapper from "../middlewares/async.js";
import { NotFoundError, BadRequestError } from '../errors/index.js';
import { validationResult } from 'express-validator';
const doctorController = {
  addDoctor: asyncWrapper( async (req, res,next) => {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
          next(new BadRequestError(errors.array()[0].msg));
      }
      const newDoctor = await Doctor.create(req.body);
      res.status(201).json({ success: true, data: newDoctor 
      });
  }),

  getDoctors:asyncWrapper( async (req, res,next) => {
      const listDoctor = await Doctor.find();
      res.status(201).json({
        message: "List of All Doctors",
        data: listDoctor,
      });
  }),

  getDoctorById: asyncWrapper( async (req, res, next) => {
      const doctorById = await Doctor.findById(req.params.id);
      if (!doctorById) {
        return next(new NotFoundError(`Doctor not found`));
      }
      res.status(201).json({
        message: "Get Doctor",
        data: doctorById,
      });
  }),

  updateDoctor: asyncWrapper( async (req, res ,next) => {
      const updatedoctor = await Doctor.findOneAndUpdate(
        { _id: req.params.id },
        {
         name: req.body.name,
          specialty: req.body.specialty,
          availability: req.body.availability
        },
        { new: true }
      );
      if (!updatedoctor) {
        return next(new NotFoundError(`Doctor not found`));
    } 
      res.status(201).json({
        message: "Doctor updated",
        data: updatedoctor,
      });
  }),

  deleteDoctor: asyncWrapper( async (req, res , next) => {
      const deletedoctor = await Doctor.deleteOne({
        _id: req.params.id,
      });
  
      res.status(201).json({
        message: "Doctor deleted",
        data: deletedoctor,
      });
  }),
};
export default doctorController;
