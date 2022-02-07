import { useMediaQuery } from 'react-responsive';
import baseTailwindConfig from 'tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig';

interface TailwindBreakpoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

const tailwindConfig = resolveConfig(baseTailwindConfig);
const breakpoints = tailwindConfig.theme
  .screens as unknown as TailwindBreakpoints;

const useMinMediaQuery = (pixels: string) =>
  useMediaQuery({ query: `(min-width: ${pixels})` });
const useMaxMediaQuery = (pixels: string) =>
  useMediaQuery({ query: `(max-width: ${pixels})` });
const useMinMaxMediaQuery = (minPixels: string, maxPixels: string) =>
  useMediaQuery({
    query: `(min-width: ${minPixels}) and (max-width: ${maxPixels})`,
  });

const usePhoneMediaQuery = () => useMaxMediaQuery(breakpoints.sm);
const useSmallTabletMediaQuery = () =>
  useMinMaxMediaQuery(breakpoints.sm, breakpoints.md);
const useTabletMediaQuery = () =>
  useMinMaxMediaQuery(breakpoints.md, breakpoints.lg);
const useDesktopMediaQuery = () => useMinMediaQuery(breakpoints.lg);

export const useBreakpoints = () => ({
  isPhone: usePhoneMediaQuery(),
  isSmallTablet: useSmallTabletMediaQuery(),
  isTablet: useTabletMediaQuery(),
  isDesktop: useDesktopMediaQuery(),
});
