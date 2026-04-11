import{n as e}from"./chunk-zsgVPwQN.js";import{jt as t}from"./iframe-CDmr3HUg.js";import{r as n}from"./react-BzfWbCB_.js";import{c as r,f as i}from"./blocks-D1S2BFOi.js";import{t as a}from"./mdx-react-shim-BK_zeBSn.js";function o(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Docs/Developer Guide/Language`}),`
`,(0,c.jsx)(t.h1,{id:`language`,children:`Language`}),`
`,(0,c.jsx)(t.h2,{id:`specify-the-language-for-the-entire-document`,children:`Specify the language for the entire document`}),`
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
`,(0,c.jsx)(t.h2,{id:`highlight-elements-in-another-language`,children:`Highlight elements in another language`}),`
`,(0,c.jsx)(t.p,{children:`If a specific element is in another language, indicate this there.`}),`
`,(0,c.jsx)(t.p,{children:`For example, for a link to an English site or page in a menu:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<nav>
  <ul>
    <li><a href="https://mijn.amsterdam.nl/">My Amsterdam</a></li>
    <li><a href="https://www.amsterdam.nl/en/" lang="en">English site</a></li>
  </ul>
</nav>
`})}),`
`,(0,c.jsx)(t.h2,{id:`do-not-specify-the-region`,children:`Do not specify the region`}),`
`,(0,c.jsxs)(t.p,{children:[`The language tag `,(0,c.jsx)(t.code,{children:`nl`}),` is sufficient.
Expanding it with the region subtag `,(0,c.jsx)(t.code,{children:`nl-NL`}),` is not necessary:`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`The golden rule when creating language tags is to keep the tag as short as possible.
Avoid region, script or other subtags except where they add useful distinguishing information.
– `,(0,c.jsx)(t.a,{href:`https://www.w3.org/International/articles/language-tags/`,rel:`nofollow`,children:`W3C Internationalization Activity`})]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`relevant-wcag-requirements`,children:`Relevant WCAG requirements`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#language-of-parts`,rel:`nofollow`,children:`WCAG 3.1.2`}),`: indicate in which language non-language text is`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};