/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { disablePageLevelChecks } from './disablePageLevelChecks'

describe('disablePageLevelChecks', () => {
  it('disables the named rules and nothing else', () => {
    expect(disablePageLevelChecks('label', 'select-name')).toEqual({
      a11y: {
        config: {
          rules: [
            { enabled: false, id: 'label' },
            { enabled: false, id: 'select-name' },
          ],
        },
      },
    })
  })
})
