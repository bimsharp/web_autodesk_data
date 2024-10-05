import * as controllers from '../../src/autodesk-authentication/controllers/postV2TokenThreeLegged';
import * as models from '../../src/autodesk-authentication/models/postV2TokenThreeLegged';

const axios = require('axios');
jest.mock('axios');

test('postThreeLegged returns expected data shape', async () => {

    const mockResponseObject: models.IAutodeskResponse_TokenThreeLegged = {
        access_token: 'access_token value',
        token_type: 'Bearer value',
        expires_in: 1234,
        refresh_token: 'refresh_token value',
    };
    axios.post.mockResolvedValue({ data: [new models.AutodeskTokenThreeLegged(mockResponseObject)] });

    const params: models.PostAutodeskTokenThreeLegged_Payload = {
        authorization_code: 'some value'
    }

    const result = await controllers.postThreeLegged(params);

    expect(axios.post).toHaveBeenCalled();
    expect(result).toBeInstanceOf(models.AutodeskTokenThreeLegged);
});

test('postThreeLegged fails on unexpected response from Autodesk', async () => {

    const mockResponseObject: models.IAutodeskResponse_TokenThreeLegged = {
        access_token: 'access_token value',
        token_type: 'Bearer value',
        expires_in: 1234,
        refresh_token: 'refresh_token value',
    };
    axios.post.mockResolvedValue({ data: { data: [new models.AutodeskTokenThreeLegged(mockResponseObject)] } });

    const params: models.PostAutodeskTokenThreeLegged_Payload = {
        authorization_code: 'some value'
    }

    const result = await controllers.postThreeLegged(params);

    expect(axios.post).toHaveBeenCalled();
    expect(result).toBeInstanceOf(models.AutodeskTokenThreeLegged);
});