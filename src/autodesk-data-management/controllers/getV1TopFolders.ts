require('dotenv').config();
import Axios = require('axios');
const axios = Axios.default;
import models = require('../models/getV1TopFolders');
import validators = require('../validators/getV1TopFolders');
import * as AutodeskError from '../../shared/models/AutodeskError';
import * as BuiltInError from '../../shared/models/BuiltInError';

/**
 * Wrapper for Autodesk API at https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET/
 * @returns {AutodeskFolders | AutodeskError | BuiltInError}
 */
export async function get(params: models.GetAutodeskTopFolders_Payload) {

    //validation
    const { error } = validators.schema.validate(params);
    if (error) {
        return new BuiltInError.BuiltInError('Bad Request', 400, `${error}`);
    }

    //if we're here, we have apparently-properly-formed data and can make our API call
    const url = `${process.env.AUTODESK_BASE_URL}/project/v1/hubs/${params.autodesk_hub_id}/projects/${params.autodesk_project_id}`;

    const configHeaders = {
        'Authorization': `Bearer ${params.autodesk_access_token}`,
        'x-user-id': `${params.autodesk_user_id}`,
    };

    let result = await axios
        .get(url, { headers: configHeaders })
        .then(response => new models.AutodeskFolders(response?.data))
        .catch(error => new AutodeskError.AutodeskError(error));

    //@ToDo: store result in DB

    return result;
}