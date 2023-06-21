import {ApiModel} from 'api/api.types';

export namespace ImageModel {
  export type Image = ApiModel.ApiEntity & {
    description: string;
    src: {
      original: string;
      large2x: string;
      large: string;
      medium: string;
      small: string;
      portrait: string;
      landscape: string;
      tiny: string;
    };
    width: number;
    height: number;
  };
}
