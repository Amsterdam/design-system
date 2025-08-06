import { render } from '@testing-library/react'
import ZoomControls from './Map'

describe('Map', () => {
  it('renders the component', () => {
    const { container } = render(<ZoomControls />)
    expect(container.firstChild).toBeDefined()
  })
})
