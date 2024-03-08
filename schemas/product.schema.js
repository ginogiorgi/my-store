import Joi from 'joi';

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().min(0);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  id: id,
  image: image,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

export { createProductSchema, updateProductSchema, getProductSchema };
