import { createMedia } from '@artsy/fresnel';

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};
export const AppMedia = createMedia({ breakpoints });
export const mediaStyles = AppMedia.createMediaStyle();
export const { MediaContextProvider, Media } = AppMedia;