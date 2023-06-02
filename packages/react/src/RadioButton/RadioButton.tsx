/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { RadioButton as CommunityRadioButton } from '@utrecht/component-library-react'
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'

export type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean
}

export const RadioButton = forwardRef((props: RadioButtonProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <CommunityRadioButton {...props} ref={ref} className="amsterdam-radio-button" />
})

RadioButton.displayName = 'RadioButton'
