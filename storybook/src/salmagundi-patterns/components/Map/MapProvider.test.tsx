import { render } from '@testing-library/react';
import MapProvider from './MapProvider';

describe('ZoomControls MapProvider', () => {
  it('renders the component', () => {
    const { container } = render(<MapProvider scrollWheelZoom={false} />);
    expect(container.firstChild).toBeDefined();
  });
});
