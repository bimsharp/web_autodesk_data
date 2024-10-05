import * as controllers from '../../src/autodesk-data-management/controllers/getV1TopFolders';
import * as models from '../../src/autodesk-data-management/models/getV1TopFolders';
import * as BuiltInError from '../../src/shared/models/BuiltInError';
import * as AutodeskError from '../../src/shared/models/AutodeskError';

require('dotenv').config();

const axios = require('axios');
jest.mock('axios');

test('getV1Folders returns expected data shape', async () => {

    const mockResponseRecord: models.IAutodeskResponse_Folder = {
        type: '',
        id: '',
        attributes: JSON.parse('{}')
    };

    const mockResponseObject: models.IAutodeskResponse_Folders = {
        data: [mockResponseRecord]
    };

    const params: models.GetAutodeskTopFolders_Payload = {
        autodesk_access_token: 'fake_token',
        autodesk_hub_id: 'fake_hub_id',
        autodesk_project_id: 'fake_project_id',
        autodesk_user_id: 'fake_user_id',
    };

    axios.get.mockResolvedValue({ data: { data: [new models.AutodeskFolders(mockResponseObject)] } });
    const result = await controllers.get(params);

    expect(axios.get).toHaveBeenCalled();
    expect(result).toBeInstanceOf(models.AutodeskFolders);
});

test('getV1Folders fails on unexpected response from Autodesk', async () => {

    const mockResponseRecord: models.IAutodeskResponse_Folder = {
        type: '',
        id: '',
        attributes: JSON.parse('{}')
    };

    const mockResponseObject: models.IAutodeskResponse_Folders = {
        data: [mockResponseRecord]
    };

    const params: models.GetAutodeskTopFolders_Payload = {
        autodesk_access_token: 'fake_token',
        autodesk_hub_id: 'fake_hub_id',
        autodesk_project_id: 'fake_project_id',
        autodesk_user_id: 'fake_user_id',
    };

    axios.get.mockResolvedValue({ data: [new models.AutodeskFolders(mockResponseObject)] });
    const result = await controllers.get(params);

    expect(axios.get).toHaveBeenCalled();
    expect(result).toBeInstanceOf(AutodeskError.AutodeskError);
});