import figma from '@figma/code-connect'
import { Button } from '../src/Button/Button'

figma.connect(
  Button,
  'https://www.figma.com/design/9IGm6IdPUYizBNGsUnueBd/Amsterdam-Design-System?node-id=15700-53370&t=TrURZbZ6TkhD9Nri-11',
  {
    props: {
      iconshape: figma.instance('Icon'),
      text: figma.string('Text'),
      hierarchy: figma.enum('Hierarchy', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
      }),
      disabled: figma.boolean('Disabled'),
      icon: figma.enum('Icon', {
        Start: 'start',
        End: 'end',
        // Only: 'only',
      }),
    },
    example: ({ hierarchy, disabled, text, icon, iconshape }) => (
      <Button variant={hierarchy} disabled={disabled}>
        {icon === 'start' && iconshape}
        {text}
        {icon === 'end' && iconshape}
      </Button>
    ),
  },
)
