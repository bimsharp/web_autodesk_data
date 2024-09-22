require('dotenv').config();
const axios = require('axios').default;
const { AutodeskHubs } = require('../models/getV1Hubs');
const { AutodeskError } = require('../../shared/AutodeskError');

/**
 * Wrapper for Autodesk API at https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET/
 * @returns {AutodeskHubs | AutodeskError}
 */
async function get(params) {

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