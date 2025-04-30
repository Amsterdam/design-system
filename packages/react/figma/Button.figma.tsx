// @ts-nocheck
import figma from '@figma/code-connect'
import { Button } from '../src/Button/Button'

figma.connect(
  Button,
  'https://www.figma.com/design/9IGm6IdPUYizBNGsUnueBd/Amsterdam-Design-System?node-id=15700-53370&t=TrURZbZ6TkhD9Nri-11',
  {
    example: ({ hierarchy, Icon, iconBefore, iconOnly, isDisabled, label }) => (
      <Button disabled={isDisabled} icon={Icon} iconBefore={iconBefore} iconOnly={iconOnly} variant={hierarchy}>
        {label}
      </Button>
    ),
    props: {
      hierarchy: figma.enum('Hierarchy', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
      }),
      Icon: figma.instance('Icon'),
      iconBefore: figma.enum('Icon position', {
        End: false,
        None: false,
        Only: false,
        Start: true,
      }),
      iconOnly: figma.enum('Icon position', {
        End: false,
        None: false,
        Only: true,
        Start: false,
      }),
      isDisabled: figma.enum('State', {
        Disabled: true,
      }),
      label: figma.string('Label'),
    },
  },
)
