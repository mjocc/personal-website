import { useMediaQuery } from 'react-responsive';

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const useMinMediaQuery = (pixels: number) =>
  useMediaQuery({ query: `(min-width: ${pixels}px)` });
const useMaxMediaQuery = (pixels: number) =>
  useMediaQuery({ query: `(max-width: ${pixels}px)` });
const useMinMaxMediaQuery = (minPixels: number, maxPixels: number) =>
  useMediaQuery({
    query: `(min-width: ${minPixels}px) and (max-width: ${maxPixels}px)`,
  });

const usePhoneMediaQuery = () => useMaxMediaQuery(breakpoints.sm);
const useSmallTabletMediaQuery = () =>
  useMinMaxMediaQuery(breakpoints.sm, breakpoints.md);
const useLargeTabletMediaQuery = () =>
  useMinMaxMediaQuery(breakpoints.md, breakpoints.lg);
const useDesktopMediaQuery = () =>
  useMinMaxMediaQuery(breakpoints.lg, breakpoints.xl);
const useLargeDesktopMediaQuery = () => useMinMediaQuery(breakpoints.xl);

export const useBreakpoints = () => ({
  isPhone: usePhoneMediaQuery(),
  isSmallTablet: useSmallTabletMediaQuery(),
  isLargeTablet: useLargeTabletMediaQuery(),
  isDesktop: useDesktopMediaQuery(),
  isLargeDesktop: useLargeDesktopMediaQuery(),
});
