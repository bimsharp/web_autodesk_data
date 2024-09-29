import * as controllers from '../../src/autodesk-authentication/controllers/postV2TokenTwoLegged';
import * as models from '../../src/autodesk-authentication/models/postV2TokenTwoLegged';

const axios = require('axios');
jest.mock('axios');

test('postTwoLegged returns expected data shape', async () => {

    const mockResponseObject: models.IAutodeskResponse_TokenTwoLegged = {
        access_token: 'access_token value',
        token_type: 'Bearer',
        expires_in: 1234
    };

    axios.post.mockResolvedValue({ data: [new models.AutodeskTokenTwoLegged(mockResponseObject)] });
    const result = await controllers.postTwoLegged();

    expect(axios.post).toHaveBeenCalled();
    expect(result).toBeInstanceOf(models.AutodeskTokenTwoLegged);
});

test('postTwoLegged fails on unexpected response from Autodesk', async () => {

    const mockResponseObject: models.IAutodeskResponse_TokenTwoLegged = {
        access_token: 'access_token value',
        token_type: 'Bearer',
        expires_in: 1234
    };

    axios.post.mockResolvedValue({ data: { data: [new models.AutodeskTokenTwoLegged(mockResponseObject)] } });
    const result = await controllers.postTwoLegged();

    expect(axios.post).toHaveBeenCalled();
    expect(result).toBeInstanceOf(models.AutodeskTokenTwoLegged);
});