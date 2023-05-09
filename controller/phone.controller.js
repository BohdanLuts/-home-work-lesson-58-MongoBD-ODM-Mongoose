const createHttpError = require('http-errors');
const mongoose = require('mongoose');
const _ = require('lodash');
const { Phone } = require('../models');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);

    if (!createdPhone) {
      return next(createHttpError(400, 'Bad Request'));
    }

    res.status(201).send({ data: createdPhone });
  } catch (err) {
    next(err);
  }
};

module.exports.getPhones = async (req, res, next) => {
  const { limit = 5 } = req.query;

  try {
    const foundPhone = await Phone.find().sort({ _id: 1 }).limit(limit).skip();

    res.status(200).send({ data: foundPhone });
  } catch (error) {
    next(error);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const { phoneId } = req.params;

  try {
    const foundPhone = await Phone.findById(phoneId);
    if (!foundPhone) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    res.status(200).send({ data: foundPhone });
  } catch (err) {
    next(err);
  }
};
module.exports.updatePhoneById = async (req, res, next) => {};
module.exports.deletePhoneById = async (req, res, next) => {};