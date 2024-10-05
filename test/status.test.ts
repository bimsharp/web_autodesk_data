import * as status from '../src/status/controllers/status';

test('status returns expected data shape', async () => {

    const result = await status.get();

    expect(result).toEqual('API is up!');
});