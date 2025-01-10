import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as a}from"./index-BAvqEBP-.js";import{ae as o}from"./index-Ck-peV38.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Doadv7ph.js";import"../sb-preview/runtime.js";import"./index-D-OUEn-9.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";/*@license CC0-1.0*/function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{title:"Docs/Developer Guide/Language"}),`
`,e.jsx(n.h1,{id:"language",children:"Language"}),`
`,e.jsx(n.h2,{id:"specify-the-language-for-the-entire-document",children:"Specify the language for the entire document"}),`
`,e.jsx(n.p,{children:`It is mandatory to explicitly indicate in which language the content of your page is.
With the correct language set, your application will work better.
Screen readers will know what language to use for speech.
It is also helpful for search engine optimization (SEO).`}),`
`,e.jsxs(n.p,{children:["Specify the language on your application’s ",e.jsx(n.code,{children:"<html>"}),` element.
After all, the contents of elements in the `,e.jsx(n.code,{children:"<head>"}),", such as ",e.jsx(n.code,{children:"title"})," and ",e.jsx(n.code,{children:"meta"}),`, also contain content in the same language.
That is outside the scope of the components of the design system.
That is why you have to remember to do this properly yourself.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html lang="nl">
  …
</html>
`})}),`
`,e.jsx(n.h2,{id:"highlight-elements-in-another-language",children:"Highlight elements in another language"}),`
`,e.jsx(n.p,{children:"If a specific element is in another language, indicate this there."}),`
`,e.jsx(n.p,{children:"For example, for a link to an English site or page in a menu:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<nav>
  <ul>
    <li><a href="https://mijn.amsterdam.nl/">My Amsterdam</a></li>
    <li><a href="https://www.amsterdam.nl/en/" lang="en">English site</a></li>
  </ul>
</nav>
`})}),`
`,e.jsx(n.h2,{id:"do-not-specify-the-region",children:"Do not specify the region"}),`
`,e.jsxs(n.p,{children:["The language tag ",e.jsx(n.code,{children:"nl"}),` is sufficient.
Expanding it with the region subtag `,e.jsx(n.code,{children:"nl-NL"})," is not necessary:"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`The golden rule when creating language tags is to keep the tag as short as possible.
Avoid region, script or other subtags except where they add useful distinguishing information.
– `,e.jsx(n.a,{href:"https://www.w3.org/International/articles/language-tags/",rel:"nofollow",children:"W3C Internationalization Activity"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"relevant-wcag-requirements",children:"Relevant WCAG requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG22/#language-of-parts",rel:"nofollow",children:"WCAG 3.1.2"}),": indicate in which language non-language text is"]}),`
`]})]})}function j(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{j as default};
