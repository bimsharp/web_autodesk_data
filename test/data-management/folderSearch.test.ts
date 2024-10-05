import * as controllers from '../../src/autodesk-data-management/controllers/getV1FolderSearch';
import * as models from '../../src/autodesk-data-management/models/getV1FolderSearch';
import * as BuiltInError from '../../src/shared/models/BuiltInError';
import * as AutodeskError from '../../src/shared/models/AutodeskError';

require('dotenv').config();

const axios = require('axios');
jest.mock('axios');

test('getV1FolderSearch returns expected data shape', async () => {

    const mockResponseRecord: models.IAutodeskResponse_FolderSearchResult = {
        type: '',
        id: '',
        attributes: JSON.parse('{}')
    };

    const mockResponseObject: models.IAutodeskResponse_FolderSearchResults = {
        data: [mockResponseRecord]
    };

    const params: models.GetAutodeskFolderSearch_Payload = {
        autodesk_access_token_three_legged: 'fake_token',
        autodesk_folder_id: 'fake_folder_id',
        autodesk_project_id: 'fake_project_id',
        filters: [
            {
                filter_name: 'displayName',
                filter_value: 'fake_display_name',
            }
        ]
    };

    axios.get.mockResolvedValue({ data: { data: [new models.AutodeskFolderSearchResults(mockResponseObject)] } });
    const result = await controllers.get(params);

    expect(axios.get).toHaveBeenCalled();
    expect(result).toBeInstanceOf(models.AutodeskFolderSearchResults);
});

test('getV1FolderSearch returns expected data shape', async () => {

    const mockResponseRecord: models.IAutodeskResponse_FolderSearchResult = {
        type: '',
        id: '',
        attributes: JSON.parse('{}')
    };

    const mockResponseObject: models.IAutodeskResponse_FolderSearchResults = {
        data: [mockResponseRecord]
    };

    const params: models.GetAutodeskFolderSearch_Payload = {
        autodesk_access_token_three_legged: 'fake_token',
        autodesk_folder_id: 'fake_folder_id',
        autodesk_project_id: 'fake_project_id',
        filters: [
            {
                filter_name: 'type',
                filter_value: 'fake_type',
            }
        ]
    };

    axios.get.mockResolvedValue({ data: { data: [new models.AutodeskFolderSearchResults(mockResponseObject)] } });
    const result = await controllers.get(params);

    expect(axios.get).toHaveBeenCalled();
    expect(result).toBeInstanceOf(models.AutodeskFolderSearchResults);
});

test('getV1FolderSearch returns expected data shape', async () => {

    const mockResponseRecord: models.IAutodeskResponse_FolderSearchResult = {
        type: '',
        id: '',
        attributes: JSON.parse('{}')
    };

    const mockResponseObject: models.IAutodeskResponse_FolderSearchResults = {
        data: [mockResponseRecord]
    };

    const params: models.GetAutodeskFolderSearch_Payload = {
        autodesk_access_token_three_legged: 'fake_token',
        autodesk_folder_id: 'fake_folder_id',
        autodesk_project_id: 'fake_project_id',
        filters: [
            {
                filter_name: 'displayName',
                filter_value: 'fake_display_name',
            },
            {
                filter_name: 'type',
                filter_value: 'fake_type',
            }
        ]
    };

    axios.get.mockResolvedValue({ data: { data: [new models.AutodeskFolderSearchResults(mockResponseObject)] } });
    const result = await controllers.get(params);

    expect(axios.get).toHaveBeenCalled();
    expect(result).toBeInstanceOf(models.AutodeskFolderSearchResults);
});

test('getV1FolderSearch fails on unexpected response from Autodesk', async () => {

    const mockResponseRecord: models.IAutodeskResponse_FolderSearchResult = {
        type: '',
        id: '',
        attributes: JSON.parse('{}')
    };

    const mockResponseObject: models.IAutodeskResponse_FolderSearchResults = {
        data: [mockResponseRecord]
    };

    const params: models.GetAutodeskFolderSearch_Payload = {
        autodesk_access_token_three_legged: 'fake_token',
        autodesk_folder_id: 'fake_folder_id',
        autodesk_project_id: 'fake_project_id',
        filters: [
            {
                filter_name: 'displayName',
                filter_value: 'fake_display_name',
            }
        ]
    };

    axios.get.mockResolvedValue({ data: [new models.AutodeskFolderSearchResults(mockResponseObject)] });
    const result = await controllers.get(params);

    expect(axios.get).toHaveBeenCalled();
    expect(result).toBeInstanceOf(AutodeskError.AutodeskError);
});
