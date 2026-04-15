/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export const picsum = (seed: string | number, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

export const heroImage = (seed: string | number) => ({
  alt: '',
  sizes: '(max-width: 37.5rem) 640px, (max-width: 72.5rem) 1280px, 1440px',
  src: picsum(seed, 1440, 450),
  srcSet: `${picsum(seed, 640, 200)} 640w, ${picsum(seed, 1280, 400)} 1280w, ${picsum(seed, 1440, 450)} 1440w`,
})

export const sliderImages = [
  { alt: 'Gracht', src: picsum('slider-1', 1280, 720) },
  { alt: 'Brug', src: picsum('slider-2', 1280, 720) },
  { alt: 'Gevel', src: picsum('slider-3', 1280, 720) },
  { alt: 'Fiets', src: picsum('slider-4', 1280, 720) },
]
