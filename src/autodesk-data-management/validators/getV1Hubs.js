const Joi = require('joi');

module.exports = schema = Joi.object({
    autodesk_access_token: Joi.string().required(),
    autodesk_user_id: Joi.string().required(),
});