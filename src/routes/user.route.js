import { Router } from "express";
import { CustomError } from "../services/customerror.service.js";
import { EError } from "../enums/EError.js";
import { generateUserErrorInfo } from "../services/userErrorInfo.service.js";
import { generateUserErrorParam } from "../services/userErrorParam.service.js";

const router = Router();

let users = [];

router.get('/', (req, res) => {

    res.json({status: "Success", data: users});

});

router.post('/', (req, res) => {

    const { first_name, last_name, email } = req.body;

    if (!first_name || !last_name || !email) {
        
        CustomError.createError({
            name: "User create error",
            cause: generateUserErrorInfo(req.body),
            message: "Error creando el usuario",
            errorCode: EError.INVALID_PARAM
        });

    };

    const newUser = {
        id: users.length + 1,
        first_name,
        last_name,
        email
    };

    users.push(newUser);

    res.json({status: "Success", data: users});

});

router.get('/:uid', (req, res) => {

    const uid = req.params.uid;

    const userID = parseInt(uid);

    if (Number.isNaN(userID)) {

        CustomError.createError({
            name: "Get user by ID error",
            cause: generateUserErrorParam(uid),
            message: "Error getting user by ID",
            errorCode: EError.INVALID_PARAM
        });

    };

    const user = users.find(user => user.id === userID);

    if (user) {

        res.json({status: "Success", data: user});

    } else {

        res.json({status: "Error", message: "Usuario no encontrado"});

    };


});

export { router as userRouter };