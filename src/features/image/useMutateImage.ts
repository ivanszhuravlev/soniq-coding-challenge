import {useMutation} from '@tanstack/react-query';
import {ImageModel} from './image.types';
import {imageService} from './image.service';

export const useMutateImage = (
  id: string | undefined,
  onSuccess: () => void,
) => {
  return useMutation(
    async (patch: Partial<ImageModel.Image>) => {
      if (id) {
        return await imageService.patch(id, patch);
      }
    },
    {
      onSuccess,
      onError: () => {
        // TODO: error handler with a message
      },
    },
  );
};
