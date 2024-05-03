import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    medicalHistory:{type: String,
    required: true
    }
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;