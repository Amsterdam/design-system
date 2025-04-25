/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export const generateAspectRatioClass = (aspectRatio?: string) =>
  aspectRatio && `ams-aspect-ratio-${aspectRatio.replace(':', '-')}`
