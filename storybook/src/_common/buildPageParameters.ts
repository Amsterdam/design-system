/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta } from '@storybook/react-vite'

/**
 * Merges a page template's description into its Storybook parameters.
 *
 * Page stories use `render` rather than `component`, so Storybook has no
 * component to derive a description from. Setting it explicitly under
 * `parameters.docs.description.component` gives the page a subtitle on its Docs
 * page and, crucially, a description in the documentation MCP server, which
 * reads that same field.
 *
 * Spreading `...commonMeta` and then setting `parameters` on a meta replaces the
 * whole `parameters` object, so pass the shared parameters as `baseParameters`
 * to fold them back in. Any `extraParameters` are merged last.
 *
 * `docs` is merged a level deeper than the rest, so that settings either side
 * already carries, such as `docs.source` or `docs.page`, survive. The
 * `description` argument is the one field that always wins: a page that wants a
 * different subtitle passes it there rather than through `extraParameters`.
 */
export const buildPageParameters = (
  baseParameters: Meta['parameters'],
  description: string,
  extraParameters?: Meta['parameters'],
): Meta['parameters'] => ({
  ...baseParameters,
  ...extraParameters,
  docs: {
    ...baseParameters?.['docs'],
    ...extraParameters?.['docs'],
    description: {
      ...baseParameters?.['docs']?.description,
      ...extraParameters?.['docs']?.description,
      component: description,
    },
  },
})
