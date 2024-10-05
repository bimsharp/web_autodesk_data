import * as controllers from '../../src/autodesk-data-management/controllers/getV1Projects';
import * as models from '../../src/autodesk-data-management/models/getV1Projects';
import * as BuiltInError from '../../src/shared/models/BuiltInError';
import * as AutodeskError from '../../src/shared/models/AutodeskError';

require('dotenv').config();

const axios = require('axios');
jest.mock('axios');

test('getV1Projects returns expected data shape', async () => {

    const mockResponseRecord: models.IAutodeskResponse_Project = {
        type: '',
        id: '',
        attributes: JSON.parse('{}')
    };

    const mockResponseObject: models.IAutodeskResponse_Projects = {
        data: [mockResponseRecord]
    };

    const params: models.GetAutodeskProjects_Payload = {
        autodesk_access_token: 'fake_token',
        autodesk_hub_id: 'fake_hub_id',
        autodesk_user_id: 'fake_user_id',
    };

    axios.get.mockResolvedValue({ data: { data: [new models.AutodeskProjects(mockResponseObject)] } });
    const result = await controllers.get(params);

    expect(axios.get).toHaveBeenCalled();
    expect(result).toBeInstanceOf(models.AutodeskProjects);
});

test('getV1Projects fails on unexpected response from Autodesk', async () => {

    const mockResponseRecord: models.IAutodeskResponse_Project = {
        type: '',
        id: '',
        attributes: JSON.parse('{}')
    };

    const mockResponseObject: models.IAutodeskResponse_Projects = {
        data: [mockResponseRecord]
    };

    const params: models.GetAutodeskProjects_Payload = {
        autodesk_access_token: 'fake_token',
        autodesk_hub_id: 'fake_hub_id',
        autodesk_user_id: 'fake_user_id',
    };

    axios.get.mockResolvedValue({ data: [new models.AutodeskProjects(mockResponseObject)] });
    const result = await controllers.get(params);

    expect(axios.get).toHaveBeenCalled();
    expect(result).toBeInstanceOf(AutodeskError.AutodeskError);
});