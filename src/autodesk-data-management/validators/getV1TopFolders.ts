const Joi = require('joi');

export const schema = Joi.object({
    autodesk_access_token: Joi.string().required(),
    autodesk_hub_id: Joi.string().required(),
    autodesk_project_id: Joi.string().required(),
    autodesk_user_id: Joi.string().required(),
});