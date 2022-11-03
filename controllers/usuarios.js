
const { response, request } = require('express');

const usuariosGet = (req, res = response) => {

    const { q, nombre = 'no name', page = '1' } = req.query;

    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        page
    });
}

const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'post API - controller',
        body
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - controller',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
   
}