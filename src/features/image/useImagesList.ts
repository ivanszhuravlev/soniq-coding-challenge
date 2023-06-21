import {useQuery} from '@tanstack/react-query';
import {ApiModel} from 'api/api.types';
import {imageService} from './image.service';

export const useImagesList = () => {
  return useQuery([ApiModel.QueryKey.ImagesList], async () => {
    return imageService.list();
  });
};
