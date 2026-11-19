/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { useEffect, useLayoutEffect } from 'react'

/**
 * A layout effect in the browser, and a plain effect on the server.
 * A layout effect runs before the browser paints, for example while a link that is about to be hidden still has focus.
 */
/* v8 ignore next -- React 18 and older warn about a layout effect on the server */
export const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect
