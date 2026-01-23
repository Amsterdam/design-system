import type { ButtonProps } from '../Button'

import { Button } from '../Button'

export const ImageSliderControl = ({ icon, ...restProps }: ButtonProps) => {
  return <Button className="ams-image-slider__control" color="inverse" icon={icon} {...restProps} />
}
