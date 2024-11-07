/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AspectRatioProps as IAspectRatioProps } from '@amsterdam/design-system-react/src/common/types'
import { HTMLAttributes, PropsWithChildren } from 'react'

export type AspectRatioProps = IAspectRatioProps & PropsWithChildren<HTMLAttributes<HTMLSpanElement>>

/** Renders examples in Storybook. Not for reuse. */
export const AspectRatio = ({ children, aspectRatio }: AspectRatioProps) => (
  <span className={`ams-aspect-ratio--${aspectRatio}`}>{children}</span>
)
