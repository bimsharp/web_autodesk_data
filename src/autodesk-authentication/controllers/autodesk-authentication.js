require('dotenv').config();
const axios = require('axios').default;
const { AutodeskTokenTwoLegged, AutodeskTokenTwoLeggedError } = require('../models/autodesk-authentication');

async function autodeskAuthenticationTwoLegged() {
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
        .then(response => new AutodeskTokenTwoLegged(response?.data))
        .catch(error => new AutodeskTokenTwoLeggedError(error));

    return result;
}

module.exports = {
    autodeskAuthenticationTwoLegged
}