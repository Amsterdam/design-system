import { PropsWithChildren, useState } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import type { Map } from 'leaflet';
import { MapContext, useMapInstance } from './MapContext';

// Helper component to test the context
const TestComponent = () => {
  const mapInstance = useMapInstance();

  return (
    <div>
      <div data-testid="mapInstance">
        {mapInstance !== null ? 'Map Set' : 'No Map'}
      </div>
    </div>
  );
};

describe('ZoomControls MapContext', () => {
  it('provides and updates context values', async () => {
    const Wrapper = ({ children }: PropsWithChildren) => {
      const [mapInstance] = useState<Map | null>(vi.fn() as unknown as Map);

      const value: { mapInstance: Map | null } = {
        mapInstance,
      };

      return (
        <MapContext.Provider value={value}>{children}</MapContext.Provider>
      );
    };

    render(
      <Wrapper>
        <TestComponent />
      </Wrapper>
    );

    expect(screen.getByTestId('mapInstance').textContent).toBe('Map Set');
  });

  it('throws error when not used within MapContext provider', () => {
    // Catch the error thrown by the hook when used outside the provider
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TestComponent />)).toThrow(
      'Fout, geen mapinstance gevonden in context.'
    );
    spy.mockRestore();
  });
});
