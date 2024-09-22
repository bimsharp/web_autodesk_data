require('dotenv').config();
const axios = require('axios').default;
const { AutodeskHubs } = require('../models/getV1Hubs');
const schema = require('../validators/getV1Hubs');
const { AutodeskError } = require('../../shared/AutodeskError');
const { BuiltInError } = require('../../shared/BuiltInError');

/**
 * Wrapper for Autodesk API at https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET/
 * @returns {AutodeskHubs | AutodeskError | BuiltInError}
 */
async function get(params) {

    //validation
    const { error } = schema.validate(params); 
    if (error) {
        return new BuiltInError( 'Bad Request', 400, `${error}` );
    }

    //if we're here, we have apparently-properly-formed data and can make our API call
    const url = `${process.env.AUTODESK_BASE_URL}/project/v1/hubs`;

    const configHeaders = {
        'Authorization': `Bearer ${params.autodesk_access_token}`,
        'x-user-id': `${params.autodesk_user_id}`,
    };

    let result = await axios
        .get(url, { headers: configHeaders })
        .then(response => new AutodeskHubs(response?.data))
        .catch(error => new AutodeskError(error));

    return result;
}

module.exports = {
    get
}