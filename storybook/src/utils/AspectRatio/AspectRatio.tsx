/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AspectRatioProps } from '@amsterdam/design-system-react/src/common/types'
import { HTMLAttributes, PropsWithChildren } from 'react'

/** Renders examples in Storybook. Not for reuse. */
export const AspectRatio = ({
  children,
  aspectRatio,
}: AspectRatioProps & PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) => (
  <span className={`ams-aspect-ratio--${aspectRatio}`}>{children}</span>
)
