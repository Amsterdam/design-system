import figma from '@figma/code-connect'
import { Alert } from '../src/Alert/Alert'

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Alert,
  'https://www.figma.com/design/9IGm6IdPUYizBNGsUnueBd/Amsterdam-Design-System?node-id=18418-109765&m=dev',
  {
    props: {
      // showheading: figma.boolean('Show heading'),
      heading: figma.string('Heading'),
      content: figma.instance('Content'),
      closable: figma.boolean('Closable'),
      severity: figma.enum('Severity', {
        Info: 'info',
        Error: 'error',
        Success: 'success',
      }),
    },
    example: ({ content, closable, heading, severity }) => (
      <Alert closeable={closable} heading={heading} severity={severity}>
        {content}
      </Alert>
    ),
  },
)
