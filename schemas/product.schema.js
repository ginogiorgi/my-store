import Joi from 'joi';

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().min(0);

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  id: id,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

export { createProductSchema, updateProductSchema, getProductSchema };
