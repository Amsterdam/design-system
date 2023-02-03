<!-- @license CC0-1.0 -->

# Contribution Guidelines for HTML

## Do not use inline styles

Do not use the `style` attribute in templates, only apply style using class names.

```html
<table style="border-collapse: collapse"></table>
```

Replace the `style` attribute with a class name:

```html
<table class="example-table example-table--reset"></table>
```

Configure the CSS in a separate file:

```css
.example-table--reset {
  border-collapse: collapse;
}
```

## Use the parts of HTML that are well-supported by assistive technologies

While HTML and ARIA are well-established web standards, you will find that some parts are better supported than others — especially when you consider assistive technologies and not just the most popular browsers. In addition to the popular [Can I Use... ?](https://caniuse.com) also consult websites such as [Accessibility Support](https://a11ysupport.io) to compare support for assistive technologies.
