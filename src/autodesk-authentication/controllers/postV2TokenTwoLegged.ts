require('dotenv').config();
import Axios = require('axios');
const axios = Axios.default;
import models = require('../models/postV2TokenTwoLegged');
import shared_models = require('../../shared/models/AutodeskError');

/**
 * Wrapper for Autodesk API at https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/
 * @returns {AutodeskTokenTwoLegged | AutodeskError}
 */
export async function postTwoLegged() {
    const concatenated = `${process.env.AUTODESK_CLIENT_ID}:${process.env.AUTODESK_CLIENT_SECRET}`;
    const encoded = btoa(concatenated);

    const url = `${process.env.AUTODESK_BASE_URL}/authentication/v2/token`;

    const body = {
        'grant_type': 'client_credentials',
        'scope': 'data:read'
    };

    const configHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization': `Basic ${encoded}`
    };

    let result = await axios
        .post(url, body, { headers: configHeaders })
        .then(response => new models.AutodeskTokenTwoLegged(response?.data))
        .catch(error => new shared_models.AutodeskError(error));

    return result;
}