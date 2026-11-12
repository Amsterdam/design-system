/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta } from '@storybook/react-vite'

import { MenuWithItems } from './MenuWithItems'
import { PageLayout } from './PageLayout'

type MenuPlacementProps = {
  readonly collapsibleSubmenus?: boolean
  readonly defaultExpanded?: boolean
  readonly expandable?: boolean
  readonly expanded?: boolean
  readonly expandForCurrentSubmenu?: boolean
  readonly navigationDepth?: 1 | 2
}

type InternalPageParameters = {
  readonly currentPageId?: string
  readonly currentSectionId?: string
  readonly navigation?: {
    readonly headerMenu?: MenuPlacementProps
    readonly wideMenu?: MenuPlacementProps
  }
} & Meta['parameters']

export const commonMeta = {
  decorators: [
    // Every internal template renders inside the same Page Layout, so each story supplies the page body only.
    // A template names its place in the Menu through the parameter `currentPageId`,
    // or through `currentSectionId` when the Menu has no link to the page itself.
    (Story, context) => {
      const { currentPageId, currentSectionId, navigation } = context.parameters as InternalPageParameters

      const withCurrentLocation = (
        menuProps: MenuPlacementProps | undefined,
        placementProps?: { className: string; inWideWindow: true },
      ) => {
        if (menuProps === undefined) {
          return undefined
        }

        return (
          <MenuWithItems
            currentPageId={currentPageId}
            currentSectionId={currentSectionId}
            {...menuProps}
            {...placementProps}
          />
        )
      }

      return (
        <PageLayout
          currentPageId={currentPageId}
          currentSectionId={currentSectionId}
          headerNavigation={withCurrentLocation(navigation?.headerMenu)}
          // The Menu beside the page needs its area class to land in the menu column of the Page.
          wideNavigation={withCurrentLocation(navigation?.wideMenu, {
            className: 'ams-page__area--menu',
            inWideWindow: true,
          })}
        >
          <Story />
        </PageLayout>
      )
    },
  ],
  parameters: {
    // Snapshot at the maximum Page width with a menu (`ams.page.with-menu.max-inline-size`, 120rem)
    // instead of Chromatic’s 1200px default, so the visual test covers the widest layout we design for.
    chromatic: { modes: { '1920px': { viewport: 1920 } } },
    layout: 'fullscreen',
    // Internal websites use Compact Mode, and the Menu may only be used with it. These options limit the
    // theme toolbar to Compact Mode and its Lo-fi variant.
    themes: { options: ['Compact', 'Compact Lo-fi'] },
  },
} satisfies Meta

/**
 * Builds an internal page's parameters from the shared ones plus its description.
 *
 * A page story renders through `render`, so Storybook has no component to take a
 * description from. `docs.description.component` gives the page its subtitle.
 *
 * Spreading `...commonMeta` into a meta and then setting `parameters` replaces the
 * whole object rather than merging into it, so the shared parameters are spread
 * back in here. Storybook only merges parameters across preview, meta and story;
 * `commonMeta` is a plain object, so this last step is ours to do.
 */
export const pageParameters = (description: string, extraParameters?: Meta['parameters']) => ({
  ...commonMeta.parameters,
  ...extraParameters,
  docs: { description: { component: description } },
})
