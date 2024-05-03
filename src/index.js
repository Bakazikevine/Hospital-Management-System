import dotenv from 'dotenv';
dotenv.config();
import swaggerUi from 'swagger-ui-express';
import express from 'express';
const app = express();
import configuration from '../src/configs/index.js'
import mongoose from 'mongoose';
import router from './routes/doctorRoute.js';
import patientrouter from './routes/patientRoute.js';
import appointmentroute from './routes/appointmentRoute.js';
import userRouter from './routes/user.routes.js';
import Errorhandler from './middlewares/Errorhandler.js';
import swagger from './docs/swagger.json' assert {type:"json"};

app.use(express.json());

app.use('/HSM',swaggerUi.serve,swaggerUi.setup(swagger));

 app.use('/doctors', router);
 app.use('/patient',patientrouter)
 app.use('/appointment',appointmentroute)
 app.use('/user',userRouter);

mongoose.connect(configuration.mongoURI)
.then(() => {
    app.listen(configuration.port, ()=> {
        console.log("listening on port "+configuration.port);
    });
})
.catch(err => {
    console.log(err);
});

app.use(Errorhandler);