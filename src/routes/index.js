const express = require('express');
const countryRouter = require('./country.router');
const userRouter = require('./user.router');
const cityRouter = require('./city.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/countries', countryRouter);
router.use('/users', userRouter);
router.use('/cities', cityRouter);

module.exports = router;
