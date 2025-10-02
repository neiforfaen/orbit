// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_DocsSlugs_getConfig } from './pages/(docs)/[...slugs]';

// prettier-ignore
type Page =
| ({ path: '/[...slugs]' } & GetConfigResponse<typeof File_DocsSlugs_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
