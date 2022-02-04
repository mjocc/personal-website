import { Context, createContext } from 'react';
import { z } from 'zod';
import siteConfig from 'content/config.json';

// TODO: add validation here

const configSchema = z.object({
  twitter_account: z.string(),
  github_account: z.string(),
  linkedin_account: z.string(),
  site_description: z.string(),
  site_keywords: z.string().array(),
});
type SiteConfig = z.infer<typeof configSchema>;

export const SiteConfigContext = createContext<SiteConfig | null>(null);

export const getSiteConfig = (): SiteConfig => siteConfig;

console.log(getSiteConfig())