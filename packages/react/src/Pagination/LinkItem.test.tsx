/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { LinkItem } from './LinkItem'

describe('LinkItem', () => {
  const linkTemplate = (page: number) => `#?pagina=${page}`

  it('renders nothing when linkComponent is not provided', () => {
    const { container } = render(<LinkItem currentPage={1} linkTemplate={linkTemplate} pageNumber={1} />)

    expect(container).toBeEmptyDOMElement()
  })
})
