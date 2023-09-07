const catchError = require('../utils/catchError');
const Country = require('../models/Country');
const User = require('../models/User');
const City = require('../models/City');
const Continent = require('../models/Continent');

const getAll = catchError(async (req, res) => {
  const countries = await Country.findAll({ include: [ User, City, Continent ]});
  return res.json(countries);
});

const create = catchError(async (req, res) => {
  // const { name, currency, continentId } = req.body;
  const country = await Country.create(req.body);
  return res.status(201).json(country);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const country = await Country.findByPk(id, { include: [ User ] });
  return res.json(country);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Country.destroy({ where: {id} });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const country = await Country.update(req.body, {
    where: { id }, returning: true,
  });
  return res.json(country);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
}
