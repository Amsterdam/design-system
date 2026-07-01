import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,g as i}from"./iframe-OD1zSWhB.js";import{t as a}from"./mdx-react-shim-C8qwAs_s.js";function o(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Docs/Developer Guide/Localisation`}),`
`,(0,c.jsx)(t.h1,{id:`localisation`,children:`Localisation`}),`
`,(0,c.jsx)(t.p,{children:`Localisation covers two related tasks.
Declare the language of your content so browsers and assistive technologies interpret it correctly, and tell components which language and region to format their output in.`}),`
`,(0,c.jsx)(t.h2,{id:`language`,children:`Language`}),`
`,(0,c.jsxs)(t.p,{children:[`Declare the human language of your content with the HTML `,(0,c.jsx)(t.code,{children:`lang`}),` attribute.
This helps browsers, screen readers, and search engines interpret it correctly.`]}),`
`,(0,c.jsx)(t.h3,{id:`specify-the-language-for-the-entire-document`,children:`Specify the language for the entire document`}),`
`,(0,c.jsx)(t.p,{children:`It is mandatory to explicitly indicate in which language the content of your page is.
With the correct language set, your website will work better.
Screen readers will know what language to use for speech.
It is also helpful for search engine optimization (SEO).`}),`
`,(0,c.jsxs)(t.p,{children:[`Specify the language on your website’s `,(0,c.jsx)(t.code,{children:`<html>`}),` element.
After all, the contents of elements in the `,(0,c.jsx)(t.code,{children:`<head>`}),`, such as `,(0,c.jsx)(t.code,{children:`title`}),` and `,(0,c.jsx)(t.code,{children:`meta`}),`, also contain content in the same language.
That is outside the scope of the components of the design system.
That is why you have to remember to do this properly yourself.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<html lang="nl">
  …
</html>
`})}),`
`,(0,c.jsx)(t.h3,{id:`highlight-elements-in-another-language`,children:`Highlight elements in another language`}),`
`,(0,c.jsx)(t.p,{children:`If a specific element is in another language, indicate this there.`}),`
`,(0,c.jsx)(t.p,{children:`For example, for a link to an English site or page in a menu:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<nav>
  <ul>
    <li><a href="https://mijn.amsterdam.nl/">My Amsterdam</a></li>
    <li><a href="https://www.amsterdam.nl/en/" lang="en">English site</a></li>
  </ul>
</nav>
`})}),`
`,(0,c.jsx)(t.h3,{id:`do-not-specify-the-region`,children:`Do not specify the region`}),`
`,(0,c.jsxs)(t.p,{children:[`The language tag `,(0,c.jsx)(t.code,{children:`nl`}),` is sufficient.
Expanding it with the region subtag `,(0,c.jsx)(t.code,{children:`nl-NL`}),` is not necessary:`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`The golden rule when creating language tags is to keep the tag as short as possible.
Avoid region, script or other subtags except where they add useful distinguishing information.
– `,(0,c.jsx)(t.a,{href:`https://www.w3.org/International/articles/language-tags/`,rel:`nofollow`,children:`W3C Internationalization Activity`})]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`locale`,children:`Locale`}),`
`,(0,c.jsxs)(t.p,{children:[`Some components render their own text, such as weekday and month names.
Set the language and region they format it in with the `,(0,c.jsx)(t.code,{children:`locale`}),` prop.`]}),`
`,(0,c.jsx)(t.h3,{id:`localise-components`,children:`Localise components`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` and `,(0,c.jsx)(t.a,{href:`/docs/components-forms-date-picker--docs`,children:`Date Picker`}),` render weekday names, month names, and accessible date labels in the language of their `,(0,c.jsx)(t.code,{children:`locale`}),` prop.
When you omit it, both default to `,(0,c.jsx)(t.code,{children:`nl-NL`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The prop accepts a `,(0,c.jsx)(t.a,{href:`https://www.w3.org/International/articles/language-tags/`,rel:`nofollow`,children:`BCP 47 language tag`}),`.
Unlike the HTML `,(0,c.jsx)(t.code,{children:`lang`}),` attribute, including a region subtag is appropriate here — the JavaScript `,(0,c.jsx)(t.code,{children:`Intl`}),` API can produce different output for different regional variants of the same language.`]}),`
`,(0,c.jsx)(t.p,{children:`These locales have been tested:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nl-NL`}),` — Nederlands (Dutch), the default`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`en-GB`}),` — English`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`de-DE`}),` — Deutsch (German)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fr-FR`}),` — Français (French)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`tr-TR`}),` — Türkçe (Turkish)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ar-MA`}),` — العربية (Arabic)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`locale`}),` only drives the text that `,(0,c.jsx)(t.code,{children:`Intl`}),` generates.
Both components also have accessible names and navigation button labels that stay in their default language until you translate them, so set those in the same language to avoid a mix.
For right-to-left languages like Arabic, also add `,(0,c.jsx)(t.code,{children:`dir="rtl"`}),` to the component or to a containing element.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Calendar
  accessibleName="التقويم"
  dir="rtl"
  locale="ar-MA"
  nextMonthButtonLabel="الشهر التالي"
  nextYearButtonLabel="السنة التالية"
  previousMonthButtonLabel="الشهر السابق"
  previousYearButtonLabel="السنة السابقة"
/>
`})}),`
`,(0,c.jsx)(t.h2,{id:`relevant-wcag-requirements`,children:`Relevant WCAG requirements`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#language-of-parts`,rel:`nofollow`,children:`WCAG 3.1.2`}),`: indicate the language of any passage or phrase that differs from the page’s default language`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};