import express from 'express';
export var router = express.Router();


router.get('*', (req, res, next) => {
    res.status(404).render('err/404');
});

