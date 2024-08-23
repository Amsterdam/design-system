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
      iconStart: figma.boolean('Has icon start', {
        true: figma.instance('Icon start'),
        false: undefined,
      }),
      iconEnd: figma.boolean('Has icon end', {
        true: figma.instance('Icon end'),
        false: undefined,
      }),
      isDisabled: figma.enum('State', {
        Disabled: true,
      }),
    },
    example: ({ label, hierarchy, iconStart, iconEnd, isDisabled }) => (
      <Button variant={hierarchy} disabled={isDisabled}>
        {iconStart}
        {/* fragment is temp bugfix, figma removes label when icon is activated */}
        <>{label}</>
        {iconEnd}
      </Button>
    ),
  },
)
