export const generateAspectRatioClass = (aspectRatio?: string) =>
  aspectRatio && `ams-aspect-ratio--${aspectRatio.replace(':', '-')}`
