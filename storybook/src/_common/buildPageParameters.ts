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
 */
export const buildPageParameters = (
  baseParameters: Meta['parameters'],
  description: string,
  extraParameters?: Meta['parameters'],
): Meta['parameters'] => ({
  ...baseParameters,
  docs: { description: { component: description } },
  ...extraParameters,
})
