import { ApiClient } from "api/api.client";
import { AsyncStorageClient } from "api/implementations/asyncStorage";
import { ImageModel } from "features/image/image.types";

describe('ApiClient with AsyncStorage', () => {
  const apiClient = ApiClient(AsyncStorageClient)

  it('gets mocked data list', async () => {
    const list = await apiClient.list<ImageModel.Image>('/image');

    expect(list?.data).not.toBeUndefined();
    expect(list?.data.length).toBeGreaterThan(0);
  });

  it('gets a specific item from mocked data', async () => {
    const id = '4352247';

    const item = await apiClient.get<ImageModel.Image>(`/image/${id}`);

    expect(item).not.toBeUndefined();
    expect(item).toMatchObject({
      id,
      description: '',
      src: {
        original: expect.stringMatching('http.+'),
        large2x: expect.stringMatching('http.+'),
        large: expect.stringMatching('http.+'),
        medium: expect.stringMatching('http.+'),
        small: expect.stringMatching('http.+'),
        portrait: expect.stringMatching('http.+'),
        landscape: expect.stringMatching('http.+'),
        tiny: expect.stringMatching('http.+'),
      }
    });
  });

  it('updates the description of the image', async () => {
    const id = '4352247';

    const item = await apiClient.patch<ImageModel.Image>(`/image/${id}`, {
      description: 'yoyoyo',
    });

    const matcherObject = {
      id,
      description: 'yoyoyo',
      src: {
        original: expect.stringMatching('http.+'),
        large2x: expect.stringMatching('http.+'),
        large: expect.stringMatching('http.+'),
        medium: expect.stringMatching('http.+'),
        small: expect.stringMatching('http.+'),
        portrait: expect.stringMatching('http.+'),
        landscape: expect.stringMatching('http.+'),
        tiny: expect.stringMatching('http.+'),
      }
    };

    expect(item).not.toBeUndefined();
    expect(item).toMatchObject(matcherObject);

    const itemAgain = await apiClient.get<ImageModel.Image>(`/image/${id}`);

    expect(itemAgain).toMatchObject(matcherObject);
  });
})