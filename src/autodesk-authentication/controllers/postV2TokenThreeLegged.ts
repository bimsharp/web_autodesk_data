require('dotenv').config();
import Axios = require('axios');
const axios = Axios.default;
import models = require('../models/postV2TokenThreeLegged');
import validators = require('../validators/postV2TokenThreeLegged');
import * as AutodeskError from '../../shared/models/AutodeskError';
import * as BuiltInError from '../../shared/models/BuiltInError';

/**
 * Wrapper for Autodesk API at https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/
 * @returns {AutodeskTokenThreeLegged | AutodeskError | BuiltInError}
 */
export async function postThreeLegged(params: models.PostAutodeskTokenThreeLegged_Payload) {
    //validation
    const { error } = validators.schema.validate(params);
    if (error) {
        return new BuiltInError.BuiltInError('Bad Request', 400, `${error}`);
    }

    //if we're here, we have apparently-properly-formed data and can make our API call
    const concatenated = `${process.env.AUTODESK_CLIENT_ID}:${process.env.AUTODESK_CLIENT_SECRET}`;
    const encoded = btoa(concatenated);

    const url = `${process.env.AUTODESK_BASE_URL}/authentication/v2/token`;

    const body = {
        'grant_type': 'authorization_code',
        'scope': `${process.env.AUTODESK_THREE_LEGGED_SCOPES_ENCODED}`,
        'code': `${params.authorization_code}`,
        'redirect_uri': `${process.env.AUTODESK_REDIRECT_URI}`,
    };

    const configHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization': `Basic ${encoded}`
    };

    let result = await axios
        .post(url, body, { headers: configHeaders })
        .then(response => { 
            return new models.AutodeskTokenThreeLegged(response?.data);
        })
        .catch(error => { 
            return new AutodeskError.AutodeskError(error);
        });

    return result;
}