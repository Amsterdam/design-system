<!-- @license CC0-1.0 -->

# Component library for React apps

The `@utrecht/component-library-react` package contains React implementations of various components. You can use this package in React apps, both client side and server side, to render the right HTML elements with the Utrecht design system class names.

The CSS components that implement the Utrecht design system class names are published in a separate npm package, so don't forget to install and include `@utrecht/component-library-css` too for the styling of the white-label components, as well as a package with design tokens for your theme.

## Stability of the components

The React components are released as _alpha_ version, which means the components are still work in progress and it is likely that some APIs will between releases.

Make sure you specify the exact version as dependency, so you can schedule to upgrade to the latest version when you have time to test for regression bugs.

## React Component or React Web Component?

We currently have two packages with React components, and you might wonder which to choose. Our Web Components are still experimental and since the Shadow DOM prevents you from simply extending the CSS implementation, you wouldn't be able to easily tweak it to your needs. Therefore we suggest using the React components when they are available.

In the future this advice might change since some components could be released exclusively as Web Component while others will remain available as CSS component with React wrapper only.

## Getting started

```shell
npm install --save-dev --save-exact @utrecht/component-library-react
```

With this package available, you can render any component from the library in your page. For example:

```jsx
import { Document } from "@utrecht/component-library-react/Document";
import { Heading1 } from "@utrecht/component-library-react/Heading1";

export const MyPage = () => (
  <Document>
    <Heading1>Page styled with NL Design System</Heading1>
  </Document>
);
```

Additionally you should also include the CSS for the components and the design tokens to configure the CSS components. For example:

```js
// Package with the HTML rendering of components
import { Document } from "@utrecht/component-library-react/Document";
import { Heading1 } from "@utrecht/component-library-react/Heading1";

// Package with CSS for white-label components
import "@utrecht/component-library-css";

// Package with Utrecht design tokens for the white-label components
// Substitute with your another theme for other organizations.
import "@utrecht/design-tokens/dist/index.css";

export const MyPage = () => (
  // Class name to apply the design tokens from the theme
  <Document className="utrecht-theme">
    <Heading1>Page styled with NL Design System</Heading1>
  </Document>
);
```

Only when you use the `<HTMLContent/>` component, you should import the `html.css` from the `component-library-css`

```jsx
import { HTMLContent } from "@utrecht/component-library-react";

import "@utrecht/component-library-css/dist/html.css";
import "@utrecht/design-tokens/dist/index.css";

export const MyPage = () => (
  // Class name to apply the design tokens from the theme
  <HTMLContent
    className="utrecht-theme"
    dangerouslySetInnerHTML={{
      _html: `<h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>`,
    }}
  />
);
```

## Components overview

We make components for React available when needed in a project. Not every component is available yet, and we welcome you to discuss contributions.

Currently the following components are available:

```js
import { Article } from "@utrecht/component-library-react/Article";
import { Backdrop } from "@utrecht/component-library-react/Backdrop";
import { Button } from "@utrecht/component-library-react/Button";
import { Checkbox } from "@utrecht/component-library-react/Checkbox";
import { Document } from "@utrecht/component-library-react/Document";
import { Fieldset } from "@utrecht/component-library-react/Fieldset";
import { FieldsetLegend } from "@utrecht/component-library-react/FieldsetLegend";
import { FormField } from "@utrecht/component-library-react/FormField";
import { FormFieldDescription } from "@utrecht/component-library-react/FormFieldDescription";
import { FormLabel } from "@utrecht/component-library-react/FormLabel";
import { HTMLContent } from "@utrecht/component-library-react/HTMLContent";
import { Heading1 } from "@utrecht/component-library-react/Heading1";
import { Heading2 } from "@utrecht/component-library-react/Heading2";
import { Heading3 } from "@utrecht/component-library-react/Heading3";
import { Heading4 } from "@utrecht/component-library-react/Heading4";
import { Heading5 } from "@utrecht/component-library-react/Heading5";
import { Heading6 } from "@utrecht/component-library-react/Heading6";
import { Link } from "@utrecht/component-library-react/Link";
import { OrderedList } from "@utrecht/component-library-react/OrderedList";
import { OrderedListItem } from "@utrecht/component-library-react/OrderedListItem";
import { Page } from "@utrecht/component-library-react/Page";
import { PageContent } from "@utrecht/component-library-react/PageContent";
import { PageFooter } from "@utrecht/component-library-react/PageFooter";
import { PageHeader } from "@utrecht/component-library-react/PageHeader";
import { Paragraph } from "@utrecht/component-library-react/Paragraph";
import { RadioButton } from "@utrecht/component-library-react/RadioButton";
import { Select, SelectOption } from "@utrecht/component-library-react/Select";
import { Separator } from "@utrecht/component-library-react/Separator";
import { Surface } from "@utrecht/component-library-react/Surface";
import { Table } from "@utrecht/component-library-react/Table";
import { TableBody } from "@utrecht/component-library-react/TableBody";
import { TableCaption } from "@utrecht/component-library-react/TableCaption";
import { TableCell } from "@utrecht/component-library-react/TableCell";
import { TableFooter } from "@utrecht/component-library-react/TableFooter";
import { TableHeader } from "@utrecht/component-library-react/TableHeader";
import { TableHeaderCell } from "@utrecht/component-library-react/TableHeaderCell";
import { TableRow } from "@utrecht/component-library-react/TableRow";
import { Textarea } from "@utrecht/component-library-react/Textarea";
import { Textbox } from "@utrecht/component-library-react/Textbox";
import { URLValue } from "@utrecht/component-library-react/URLValue";
import { UnorderedList } from "@utrecht/component-library-react/UnorderedList";
import { UnorderedListItem } from "@utrecht/component-library-react/UnorderedListItem";
```

Alternatively it is possible to include them via the collection of components too, but be careful: you will likely need to take additional steps prevent your site from also including the code for components you don't actually use. Including unused components would negatively impact the performance of your site.

For example:

```js
import { Document, Heading1, Link, Paragraph } from "@utrecht/component-library-react";
```

## Contributing

When a project needs a component from the design system that already exists as CSS component with an HTML example, they will create a React component for it internally. Projects that have new React components can let the design system team know and create a pull request to include it in this component library. No
