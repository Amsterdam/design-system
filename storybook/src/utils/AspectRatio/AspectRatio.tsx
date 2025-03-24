/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AspectRatioProps } from '@amsterdam/design-system-react/src/common/types'
import { HTMLAttributes } from 'react'

/** Mock component to render examples in Storybook. Not for reuse. */
export const AspectRatio = (props: AspectRatioProps & HTMLAttributes<HTMLSpanElement>) => <span {...props} />
