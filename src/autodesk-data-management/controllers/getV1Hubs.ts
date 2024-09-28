require('dotenv').config();
import Axios = require('axios');
const axios = Axios.default;
import models = require('../models/getV1Hubs');
import validators = require('../validators/getV1Hubs');
const { AutodeskError } = require('../../shared/models/AutodeskError');
const { BuiltInError } = require('../../shared/models/BuiltInError');

/**
 * Wrapper for Autodesk API at https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET/
 * @returns {AutodeskHubs | AutodeskError | BuiltInError}
 */
export async function get(params: models.GetAutodeskHubs_Payload) {

    //validation
    const { error } = validators.schema.validate(params);
    if (error) {
        return new BuiltInError('Bad Request', 400, `${error}`);
    }

    //if we're here, we have apparently-properly-formed data and can make our API call
    const url = `${process.env.AUTODESK_BASE_URL}/project/v1/hubs`;

    const configHeaders = {
        'Authorization': `Bearer ${params.autodesk_access_token}`,
        'x-user-id': `${params.autodesk_user_id}`,
    };

    let result = await axios
        .get(url, { headers: configHeaders })
        .then(response => new models.AutodeskHubs(response?.data))
        .catch(error => new AutodeskError(error));

    //@ToDo: store result in DB

    return result;
}