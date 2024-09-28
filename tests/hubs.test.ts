import * as controllers from '../src/autodesk-data-management/controllers/getV1Hubs';
import * as models from '../src/autodesk-data-management/models/getV1Hubs';
import * as BuiltInError from '../src/shared/models/BuiltInError';
import * as AutodeskError from '../src/shared/models/AutodeskError';

require('dotenv').config();

const axios = require('axios');
jest.mock('axios');

test('postTwoLegged returns expected data shape', async () => {

    const mockResponseRecord: models.IAutodeskResponse_Hub = {
        type: '',
        id: '',
        attributes: JSON.parse('{}')
    };

    const mockResponseObject: models.IAutodeskResponse_Hubs = {
        data: [mockResponseRecord]
    };

    const params: models.GetAutodeskHubs_Payload = {
        autodesk_access_token: 'fake_token',
        autodesk_user_id: 'fake_user_id'
    };

    axios.get.mockResolvedValue({ data: { data: [new models.AutodeskHubs(mockResponseObject)] } });
    const result = await controllers.get(params);

    expect(axios.get).toHaveBeenCalled();
    expect(result).toBeInstanceOf(models.AutodeskHubs);
});

test('postTwoLegged fails on unexpected response from Autodesk', async () => {

    const mockResponseRecord: models.IAutodeskResponse_Hub = {
        type: '',
        id: '',
        attributes: JSON.parse('{}')
    };

    const mockResponseObject: models.IAutodeskResponse_Hubs = {
        data: [mockResponseRecord]
    };

    const params: models.GetAutodeskHubs_Payload = {
        autodesk_access_token: 'fake_token',
        autodesk_user_id: 'fake_user_id'
    };

    axios.get.mockResolvedValue({ data: [new models.AutodeskHubs(mockResponseObject)] });
    const result = await controllers.get(params);

    expect(axios.get).toHaveBeenCalled();
    expect(result).toBeInstanceOf(AutodeskError.AutodeskError);
});