/**
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const Errorhandler = (err ,req ,res , next)=>{
    const errStatus = err.statusCode || 500;
    const errMessage = err.message || "Internal Server Error";
    
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: process.env.NODE_ENV === "development" ? err.stack : {}
    })
};
 export default Errorhandler;