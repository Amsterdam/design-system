<!-- @license CC0-1.0 -->

# Contribution Guidelines for CSS

## Configure your code editor to catch mistakes early

Install plugins for color coding of CSS and SCSS:

- Sublime: [`SCSS`](https://github.com/MarioRicalde/SCSS.tmbundle)

## Use Stylelint to maintain consistency and high quality

Stylelint can run in your code editor while working on CSS code, by installing an extension:

- VS Code: [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- Sublime: [`SublimeLinter-stylelint`](https://packagecontrol.io/packages/SublimeLinter-stylelint)

Stylelint will run as Git pre-commit hook, so it will warn you if you commit code that needs changes still. When that happens you can fix the code, stage and commit the file to Git again.

Stylelint will run in GitHub as PR check, so it will prevent your code from merging.

## Order imports alphabetically to avoid merge conflicts

Order imports alphabetically.

Adding all new imports at the end of the list is a method that will result in a merge conflict when two PRs add a new import at the same time.

Don't:

```scss
@import "component-y";
@import "component-b";
@import "component-p";
@import "component-new";
```

Do:

```scss
@import "component-b";
@import "component-new";
@import "component-p";
@import "component-y";
```

## Define `margin` and `padding` in the modern way

The layout should work equally well in pages with right-to-left text direction for Arabic script, as in pages with left-to-right text for typical European languages and Latin script. This means using `-left` and `-right` is best avoided in many cases, because the values would need to be inversed for the other text direction.

CSS now offers alternatives that work for all text directions, and are inversed automatically depending on the context. The new method also makes `-top` and `-bottom` obsolete, because the new CSS properties are also agnostic for the [vertical text direction in East Asian scripts](https://en.wikipedia.org/wiki/Horizontal_and_vertical_writing_in_East_Asian_scripts).

For pages with Latin scripts you should use the following alternatives:

- `margin` shorthand should not be used
- `margin-top` becomes `margin-block-start`
- `margin-right` becomes `margin-inline-end`
- `margin-bottom` becomes `margin-block-end`
- `margin-left` becomes `margin-inline-start`
- `padding` shorthand should not be used
- `padding-top` becomes `padding-block-start`
- `padding-right` becomes `padding-inline-end`
- `padding-bottom` becomes `padding-block-end`
- `padding-left` becomes `padding-inline-start`

Do not use the the following new shorthands yet, since they don't have great browser support at the moment:

- `margin-block` ([Can I use …?](https://caniuse.com/mdn-css_properties_margin-block))
- `margin-inline` ([Can I use …?](https://caniuse.com/mdn-css_properties_margin-inline))
- `padding-block` ([Can I use …?](https://caniuse.com/mdn-css_properties_padding-block))
- `padding-inline` ([Can I use …?](https://caniuse.com/mdn-css_properties_padding-inline))

The following article may be of interest, if you want to know more about these new CSS properties:

- [Digging Into CSS Logical Properties, by Ahmad Shadeed](https://ishadeed.com/article/css-logical-properties/)

## Use BEM class names to structure your component

Don't use BEM syntax for CSS variables, however:

```css
.example-card__heading {
  color: var(--example-card__heading-color);
}
```

Only use dashes to separate segments of the CSS variable name:

```css
.example-card__heading {
  color: var(--example-card-heading-color);
}
```

- [BEM — Block Element Modifier](http://getbem.com)

## Separately define vanilla HTML element selectors

If you need to style HTML elements without class names, define those selectors in a separate file. For example:

`css/index.css`

```css
.nl-link {
  color: var(--nl-link-color);
}

.nl-link--focus {
  color: var(--nl-link-focus-color);
}
```

`html.scss`:

```scss
@import "../css";

a {
  @extend .nl-link;
}

a:focus {
  @extend .nl-link--focus;
}
```

Having a file with only BEM class name selectors will help making your layout reusable in other components and other component libraries.

## Separately define the CSS variable values from the layout

Do not include the custom properties that define your theme in the same file that defines the layout of a component:

`components/link.css`:

```css
.nl-link {
  color: var(--nl-link-color);
}
```

`theme/link.css`:

```css
:root {
  --nl-link-color: cornflowerblue;
}
```

This way, others that don't use the same theme as you, can only include the `component.css` and configure their own theme.

## Use a prefix for your project in class names and CSS variables

Start all the names in your code with the same prefix that identifies your project. When others want to reuse your code, they will not have any issues with their and your code using identical names -- they will never clash because of the prefix.

Prefixes make names bit longer, but give you a great advantage for exchanging code between projects and collaborating with other teams.

For example, a `xyz` prefix for class names:

```css
.xyz-link {
  color: blue;
}
```

For example, a `xyz` prefix for CSS variables:

```css
a:link {
  color: var(--xyz-link-color);
}
```

Prefixes can be long or short, but you should be careful to pick something that is likely to be unique amongst the project which you want to collaborate.

## Use prefixed CSS variables from other projects, share and enjoy the work of others

When another project already has component or a CSS variable that does exactly what you need, you don't have to create one yourself with your own prefix. You can simply reuse the CSS variable with the prefix from the original author. **It is okay to have many prefixes in one file!**

```css
.example-component {
  font-family: var(--example-component-font-family, var(--nl-document-font-family));
}
```

## Use CSS variables for themable properties

To make your component reusable for many different themes and a wide variety of visual designs, you can use CSS variables to separate your choice for the visual design from the CSS code for the component.

CSS properties that have different values for different themes should be configured with a CSS variable instead of a hardcoded value. Typical properties are related to color and typography, and often spacing too.

CSS properties that don't vary between themes, don't need a CSS variable. Variables that typically have a hardcoded value include `display`, `position`, et cetera.

Your initial version of a component does not need to provide a CSS variable for every imaginable property, it is recommended to start out with fewer properties and add new CSS variables on request.

```css
.example-icon {
  display: inline-block;
}

.example-icon,
.example-icon--medium {
  height: var(--example-icon-medium-height);
  width: var(--example-icon-medium-width);
}
```

## Name things after their purpose, not after the visual design

Do not use the visual design in the naming of class names:

```css
.example-badge--maroon {
  color: maroon;
}
```

Name the class name after the purpose instead:

```css
.example-badge--danger {
  color: maroon;
}
```

## Don't affect the layout outside your component: margins are opt-in

Another aspect of keeping your component CSS side-effect free is by specifying `margin` as `0` by default, and allow to enable it optionally using `--utrecht-space-around: 1`.

```css
.example-paragraph {
  font-size: var(--example-paragraph-font-size);
  margin-block-start: calc(var(--utrecht-space-between, 0) * var(--example-paragraph-margin-block-start, 0));
}
```

## Include fallback values for CSS variables so making a theme is less time consuming

If you allow customization for a property with CSS variables, it can be convenient to have a fallback value so you don't have to specify _every_ custom property to make the theme work.

For example, for colors you can use `inherit` to keep the color unchanged from the parent element when the CSS variable is undefined:

```css
.example-heading {
  color: var(--example-heading-color, inherit);
}
```

Including fallback values will make it easier to create a theme for your components, because others need to specify much fewer properties to make the initial version work well.

## Use only relative font sizes

Do not use `px` font sizes:

```css
:root {
  font-size: 10px;
}

p {
  font-size: 1.6rem;
}
```

Use a relative font size instead.

```css
:root {
  font-size: 62.5%;
}

p {
  font-size: 1.6rem;
}
```

Relative font sizes don't offer the guarantuee the website looks the same on every browser, and that is okay. Relative font sizes offer the freedom to users to choose a larger default font-size when the 16px default size is too small to read, without affecting other parts of the layout and image sizes -- which would cause even less text content to fit on the screen.

Page zoom is very convenient in many cases, but it is not the best solution for users that only want larger text.

## Avoid nesting BEM class name selectors

For example:

```html
<ul class="example-nav">
  <li class="example-nav__item example-nav__item--current">
    <a class="example-nav__link" href="/">Home</a>
  </li>
  <li class="example-nav__item">
    <a class="example-nav__link" href="/contact">Home</a>
  </li>
</ul>
```

The nesting in this example can be avoided:

```css
.example-nav__item--current .example-nav__link {
  font-weight: bold;
}
```

Update the template and include the `current` modifier for both elements:

```html
<li class="example-nav__item example-nav__item--current">
  <a class="example-nav__link example-nav__link--current" href="/">Home</a>
</li>
```

With the modfier available for both elements, the nesting is no longer necessary.

```css
.example-nav__link--current {
  font-weight: bold;
}
```

## Include BEM modifier class names for pseudo-classes, even if you don't use them yourself

Include class names even for states for which CSS pseudo-classes are available, such as `focus` and `hover`:

```css
.example-link--hover {
  text-decoration: underline;
}

.example-link--focus {
  background-color: silver;
}

.example-link--visited {
  color: purple;
}
```

These classes can be used for automated visual regression tests and automated accessibility tests. Including examples with these class names in Storybook will help keep track of every variant.

```html
<ul>
  <li><a href="#" class="example-link">Example</a></li>
  <li><a href="#" class="example-link example-link--hover">Example for :hover</a></li>
  <li><a href="#" class="example-link example-link--focus">Example for :focus</a></li>
  <li><a href="#" class="example-link example-link--visited">Example for :visited</a></li>
</ul>
```

## Avoid short-hand properties that unintentionally override properties

```css
.example-card {
  background: url("image.jpg");
}
```

In this example you can use `background-image` instead of `background`, and avoid resetting properties that might be defined elsewhere, such as `background-repeat` or `background-color`.

The same goes for `margin` in the following example:

```css
ul {
  margin: 0;
}
```

This example code is only used to reset the browsers' built-in stylesheet for vertical margin. You can make the reset stylesheet more specific like this, with the same effect:

```css
ul {
  margin-block-start: 0;
  margin-block-end: 0;
}
```

## Round values to a reasonable significance

Design tools that export CSS sometimes include calculated subpixel values with a degree of detail that isn't visible on most screens and browsers, and wasn't necessarily intended by the designer.

```css
.example-paragraph {
  font-size: 16.143px;
}
```

Round the values to whole pixels:

```css
.example-paragraph {
  font-size: 16px;
}
```

## Include the open source license in every file

Include the [SPDX license code](https://spdx.org/licenses/) for the open source license in a code comment at the start of the file:

```css
/**
 * @license EUPL-1.2
 * Copyright (c) 2021 NL Design System Community
 */
```

Many open source license allow copying and modifying their code, but require the copyright notice to be included in all derived works. If you copy over open source code from a project with a EUPL-1.2 compatible license, such as the MIT license, be careful to copy over the copyright notice too.

For example, if you would copy over CSS from the [Bootstrap framework](https://getbootstrap.com), the code comment could look like this:

```css
/**
 * @license EUPL-1.2
 * Copyright (c) 2021 NL Design System Community
 * Copyright (c) 2011-2021 The Bootstrap Authors
 * Copyright (c) 2011-2021 Twitter, Inc.
 */
```
