// @ts-nocheck
import figma from '@figma/code-connect'
import { Button } from '../src/Button/Button'

figma.connect(
  Button,
  'https://www.figma.com/design/9IGm6IdPUYizBNGsUnueBd/Amsterdam-Design-System?node-id=15700-53370&t=TrURZbZ6TkhD9Nri-11',
  {
    props: {
      label: figma.string('Label'),
      hierarchy: figma.enum('Hierarchy', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
      }),
      Icon: figma.instance('Icon'),
      iconBefore: figma.enum('Icon position', {
        None: false,
        End: false,
        Start: true,
        Only: false,
      }),
      iconOnly: figma.enum('Icon position', {
        None: false,
        End: false,
        Start: false,
        Only: true,
      }),
      isDisabled: figma.enum('State', {
        Disabled: true,
      }),
    },
    example: ({ label, hierarchy, Icon, iconBefore, iconOnly, isDisabled }) => (
      <Button variant={hierarchy} icon={Icon} iconBefore={iconBefore} iconOnly={iconOnly} disabled={isDisabled}>
        {label}
      </Button>
    ),
  },
)
