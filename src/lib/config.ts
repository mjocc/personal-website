import siteConfig from 'content/config.json';
import { createContext } from 'react';
import { z } from 'zod';

// TODO: add validation here

const configSchema = z.object({
  twitter_account: z.string(),
  github_account: z.string(),
  gdev_account: z.string(),
  linkedin_account: z.string(),
  site_description: z.string(),
  site_keywords: z.string().array(),
});
type SiteConfig = z.infer<typeof configSchema>;

export default siteConfig as SiteConfig;
