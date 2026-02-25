import type { ButtonProps } from '../Button'
import type { IconButtonProps, TextButtonProps } from '../Button/Button'

import { Button } from '../Button'

type ImageSliderControlProps = IconButtonProps & Omit<ButtonProps, keyof TextButtonProps>

export const ImageSliderControl = ({ icon, ...restProps }: ImageSliderControlProps) => {
  return <Button className="ams-image-slider__control" color="inverse" icon={icon} {...restProps} />
}
