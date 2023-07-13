# Coding Conventions

## Importing components through barrel files

We use barrel files (`index.ts` in both the package root and each component directory) to make it easier for consuming applications to import components from our React library.
Barrel files allow a consumer to do this:

`import { Heading, Link, Paragraph } from '@amsterdam/design-system-react'`

Instead of a separate import for each component, while even reaching into the `dist` directory:

```js
import Heading from "@amsterdam/design-system-react/dist/Heading/Heading";
import Link from "@amsterdam/design-system-react/dist/Link/Link";
import Paragraph from "@amsterdam/design-system-react/dist/Paragraph/Paragraph";
```

However, barrel files have 2 potential pitfalls:

1. Without proper treeshaking, importing from a barrel file can mean that a consumer imports the entire library, instead of just the components they need. To avoid this, the consumer needs to set up treeshaking in their project (TODO: add documentation on this? Or at least describe both methods of importing?)
2. If a component imports from a sibling component, using a barrel file for this import can lead to cyclical dependencies.

We can avoid this last pitfall by adhering to the following code convention: barrel file imports should only be used to import from a package, not within one.

To illustrate: If the `Accordion` React component needs the `HeadingLevel` type from the `Heading` React component, it should import it like this:

`import { HeadingLevel } from '../Heading/Heading'`

Instead of this:

`import { HeadingLevel } from '../Heading'` or `import { HeadingLevel } from '../'`
