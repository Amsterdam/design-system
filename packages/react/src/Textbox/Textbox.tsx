import { Textbox as CommunityTextBox } from '@utrecht/component-library-react'
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'

export type TextboxTypes =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'

export interface TextboxProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
  type?: TextboxTypes
}

export const Textbox = forwardRef(
  ({ type = 'text', ...restProps }: TextboxProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <CommunityTextBox {...restProps} className="amsterdam-textbox" type={type} ref={ref} />
  },
)

Textbox.displayName = 'Textbox'
