import { render } from '@testing-library/react'
import { Link } from './Link'
import '@testing-library/jest-dom'

describe('Link', () => {
  it('renders a link role element', () => {
    it('renders an HTML a element', () => {
      const { container } = render(<Link href="#">{'https://example.com/'}</Link>)
      const link = container.querySelector('a:only-child')
      expect(link).toBeInTheDocument()
    })
  })
})
