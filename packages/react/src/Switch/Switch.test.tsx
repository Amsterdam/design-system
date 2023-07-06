import { render } from '@testing-library/react'
import { Switch } from './Switch'

describe('Switch', () => {
  it('should render correctly', () => {
    const { container } = render(<Switch />)
    expect(container).toMatchSnapshot()
  })
})
