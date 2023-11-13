/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

export type SpaceSize = 'small' | 'medium' | 'large'

export type SpaceProps = {
  spaceBottom?: SpaceSize
  spaceTop?: SpaceSize
  spaceVertical?: SpaceSize
}
