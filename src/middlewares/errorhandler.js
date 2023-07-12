import { EError } from "../enums/EError.js";

export const errorHandler = (error, req, res, next) => {
    
    switch (error.code) {
        
        case EError.INVALID_JSON:
            
            res.json({status: "Error", error: error.cause, message: error.message});
            
        break;

        case EError.DATABASE_ERROR:

            res.json({status: "Error", message: error.message});

        break;

        case EError.INVALID_PARAM:

            res.json({status: "Error", message: error.message});

        break;

        default:

            res.json({status: "Error", message: error.message});

        break;

    };
    
    next();

};