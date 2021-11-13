const {response} = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {

    /** Método: x-token headers */
    const token = req.header('x-token');

    /** Método: Authorization > Bearer token */
    // let token = '';
    // token = req.headers['x-access-token'] || req.headers['authorization'];

     //console.log(token);

    if(!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No se ha proporcionado un token valido'
        });
    }

    /** Método: Authorization > Bearer token */
    // if(token.startsWith('Bearer ')) {
    //     token = token.slice(7, token.lenth);
    // }

    // console.log(token);

    try {
        const { uid, name } = jwt.verify(
            token,
            process.env.Ventas_JWT
        );

        req.id = uid;
        req.name = name;
                
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token invalido'
        });
    }

    next();

}


module.exports = {validarJWT}