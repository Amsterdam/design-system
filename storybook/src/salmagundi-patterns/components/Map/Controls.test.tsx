import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Controls from './Controls';

const INITIAL_ZOOM = 10;
const setZoom = vi.fn();
const getZoom = vi.fn().mockImplementation(() => INITIAL_ZOOM);

vi.mock('./MapContext', () => {
  const actual = vi.importActual('./MapContext');
  return {
    ...actual,
    useMapInstance: () => ({
      setZoom,
      getZoom,
    }),
  };
});

describe('ZoomControls Controls', () => {
  it('renders the component', () => {
    const { container } = render(<Controls />);
    expect(container.firstChild).toBeDefined();
  });

  it('calls zoom in and zoom out on click', async () => {
    render(<Controls />);
    await userEvent.click(screen.getByText('Zoom in'));
    expect(setZoom).toHaveBeenCalled();
    expect(setZoom).toHaveBeenCalledWith(INITIAL_ZOOM + 1);
    await userEvent.click(screen.getByText('Zoom out'));
    expect(setZoom).toHaveBeenCalled();
    expect(setZoom).toHaveBeenCalledWith(INITIAL_ZOOM - 1);
  });
});
