/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { vi } from 'vitest'

// Sourced from https://jestjs.io/docs/29.4/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
// Updated `jest.fn` to `vi.fn` when migrating from Jest to Vitest

Object.defineProperty(window, 'matchMedia', {
  value: vi.fn().mockImplementation((query) => ({
    addEventListener: vi.fn(),
    addListener: vi.fn(), // deprecated
    dispatchEvent: vi.fn(),
    matches: false,
    media: query,
    onchange: null,
    removeEventListener: vi.fn(),
    removeListener: vi.fn(), // deprecated
  })),
  writable: true,
})
