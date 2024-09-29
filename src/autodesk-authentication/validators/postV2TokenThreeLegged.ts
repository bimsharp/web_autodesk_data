const Joi = require('joi');

export const schema = Joi.object({
    authorization_code: Joi.string().required()
});