import {useQuery} from '@tanstack/react-query';
import {ApiModel} from 'api/api.types';
import {imageService} from './image.service';

export const useImageById = (id: string | undefined) => {
  return useQuery(
    [ApiModel.QueryKey.ImageItem, id],
    async () => {
      if (!id) {
        return;
      }

      return imageService.get(id);
    },
    {
      refetchOnMount: true,
    },
  );
};
