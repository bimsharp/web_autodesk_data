require('dotenv').config();
import Axios = require('axios');
const axios = Axios.default;
import models = require('../models/getV1FolderSearch');
import validators = require('../validators/getV1FolderSearch');
import * as AutodeskError from '../../shared/models/AutodeskError';
import * as BuiltInError from '../../shared/models/BuiltInError';
import { fileURLToPath } from 'url';

/**
 * Wrapper for Autodesk API at https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-search-GET/
 * See also: https://aps.autodesk.com/en/docs/data/v2/developers_guide/filtering/
 * @returns {AutodeskFolderSearchResults | AutodeskError | BuiltInError}
 */
export async function get(params: models.GetAutodeskFolderSearch_Payload) {

    //validation
    const { error } = validators.schema.validate(params);
    if (error) {
        return new BuiltInError.BuiltInError('Bad Request', 400, `${error}`);
    }

    //if we're here, we have apparently-properly-formed data and can make our API call
    let url = `${process.env.AUTODESK_BASE_URL}/projects/${params.autodesk_project_id}/folders/${params.autodesk_folder_id}/search`;

    let filterPrefix = '?';
    params.filters.forEach(f => {
        url += `${filterPrefix}filter[${f.filter_name}]=${f.filter_value}`;
        if (filterPrefix === '?') filterPrefix = '&';
    });

    const configHeaders = {
        'Authorization': `Bearer ${params.autodesk_access_token_three_legged}`,
    };

    let result = await axios
        .get(url, { headers: configHeaders })
        .then(response => new models.AutodeskFolderSearchResults(response?.data))
        .catch(error => new AutodeskError.AutodeskError(error));

    //@ToDo: store result in DB

    return result;
}