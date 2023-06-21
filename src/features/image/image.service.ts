import {ApiService} from 'api/api.service';
import {ImageModel} from './image.types';

export const imageService = new ApiService<ImageModel.Image>('/image');
