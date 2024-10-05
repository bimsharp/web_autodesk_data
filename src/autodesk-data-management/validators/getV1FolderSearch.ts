const Joi = require('joi');

export const schema = Joi.object({
    autodesk_access_token_three_legged: Joi.string().required(),
    autodesk_folder_id: Joi.string().required(),
    autodesk_project_id: Joi.string().required(),
    filters: Joi.array().items(Joi.object({
        filter_name: Joi.string().required(),
        filter_value: Joi.string().required(),
    })).optional()
});