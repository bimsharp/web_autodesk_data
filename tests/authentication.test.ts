const { postTwoLegged } = require('../src/autodesk-authentication/controllers/postV2Token');
const { AutodeskTokenTwoLegged } = require('../src/autodesk-authentication/models/postV2Token');

const axios = require('axios');
jest.mock('axios');

test('postTwoLegged returns expected data shape', async () => {

    const mockApiReturn = {
        data: [
            {
                access_token: 'access_token value',
                token_type: 'Bearer',
                expires_in: 1234
            }
        ]
    };

    axios.post.mockResolvedValue(mockApiReturn);
    const result = await postTwoLegged();

    expect(axios.post).toHaveBeenCalled();
    expect(result).toBeInstanceOf(AutodeskTokenTwoLegged);
});