import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-BQKRe05W.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-DPqgLeSx.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./FileCard.stories-B-xFxRTW.js";var y,b;function x(){return(x=e((()=>{y={"file-card":{"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},actions:{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},details:{color:{$value:`{ams.color.text.secondary}`,$extensions:{"nl.amsterdam.type":`color`}}},preview:{width:{$value:`clamp(2.5rem, 10vw, 5rem)`,$extensions:{"nl.amsterdam.type":`dimension`}}}}},b={ams:y}})))()}function S(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...l(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(s,{of:v}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(t,{of:v}),`
`,(0,w.jsx)(n,{}),`
`,(0,w.jsx)(i,{}),`
`,(0,w.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsxs)(r.p,{children:[`Use a File Card wherever one file has to be recognised and acted on: among the files someone has just selected with a File Input, or as an attachment on a page that shows a case, a request or a decision.
NL Design System calls this component `,(0,w.jsx)(r.a,{href:`https://www.nldesignsystem.nl/file/`,rel:`nofollow`,children:`File`}),`.
We name it File Card because `,(0,w.jsx)(r.code,{children:`File`}),` is a global name in the browser and in TypeScript, and a component of that name would shadow the `,(0,w.jsx)(r.code,{children:`File`}),` constructor in every module that imports it.`]}),`
`,(0,w.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,w.jsxs)(r.p,{children:[`Do not use a File Card for a link to a page or a document that is not a file the user owns.
Use a `,(0,w.jsx)(r.a,{href:`/docs/components-navigation-link--docs`,children:`Link`}),` or a `,(0,w.jsx)(r.a,{href:`/docs/components-navigation-standalone-link--docs`,children:`Standalone Link`}),` for that.`]}),`
`,(0,w.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,w.jsxs)(r.p,{children:[`Pass the name, and the size and type when they are known.
A File Card takes these as separate values rather than a `,(0,w.jsx)(r.code,{children:`File`}),` object, so it works just as well for a file that already sits on a server and has no `,(0,w.jsx)(r.code,{children:`File`}),` object at all.`]}),`
`,(0,w.jsx)(r.pre,{children:(0,w.jsx)(r.code,{className:`language-jsx`,children:`<FileCard name="besluit.pdf" onDelete={remove} size={1536000} type="application/pdf" />
`})}),`
`,(0,w.jsxs)(r.p,{children:[`Add a `,(0,w.jsx)(r.code,{children:`previewUrl`}),` to display a thumbnail instead of the generic document icon.
A File Card never creates that address itself, so whoever creates an object URL is also the one who can release it.
The example below shows the pattern.`]}),`
`,(0,w.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(r.h3,{id:`within-a-file-list`,children:`Within a File List`}),`
`,(0,w.jsxs)(r.p,{children:[`A File Card sits inside a File List Item, which renders the `,(0,w.jsx)(r.code,{children:`li`}),` element around it.`]}),`
`,(0,w.jsx)(a,{of:h}),`
`,(0,w.jsx)(r.h3,{id:`with-a-preview`,children:`With a preview`}),`
`,(0,w.jsx)(a,{of:m}),`
`,(0,w.jsx)(r.h3,{id:`without-actions`,children:`Without actions`}),`
`,(0,w.jsxs)(r.p,{children:[`Leave out `,(0,w.jsx)(r.code,{children:`onDelete`}),` to display a file without offering anything to do with it.`]}),`
`,(0,w.jsx)(a,{of:p}),`
`,(0,w.jsx)(r.h3,{id:`translated-text`,children:`Translated text`}),`
`,(0,w.jsxs)(r.p,{children:[`The component displays its text in Dutch by default.
Pass `,(0,w.jsx)(r.code,{children:`formatFileDetailsTextEn`}),` – or a function of your own – to `,(0,w.jsx)(r.code,{children:`formatDetailsText`}),`, and the matching label to `,(0,w.jsx)(r.code,{children:`deleteButtonLabel`}),`.
See the `,(0,w.jsx)(r.a,{href:`/docs/docs-guidelines-localisation--docs`,children:`Localisation guide`}),` for the tested locales.`]}),`
`,(0,w.jsx)(a,{of:_}),`
`,(0,w.jsxs)(r.p,{children:[(0,w.jsx)(r.code,{children:`formatDetailsText`}),` returns the whole line below the name, brackets and separator included, so the order of the parts and the punctuation are yours to change.
It receives the size and the type, and the default assumes the type is a media type such as `,(0,w.jsx)(r.code,{children:`application/pdf`}),`.
When all you have is an extension, pass a function that formats it:`]}),`
`,(0,w.jsx)(r.pre,{children:(0,w.jsx)(r.code,{className:`language-jsx`,children:`<FileCard
  formatDetailsText={({ size, type }) => \`(\${type}, \${Math.round(size / 1000)} kB)\`}
  name="besluit.pdf"
  size={1536000}
  type="pdf"
/>
`})}),`
`,(0,w.jsxs)(r.p,{children:[`The default leaves out the part it has no value for, so a file of unknown size shows its type alone rather than the word `,(0,w.jsx)(r.code,{children:`undefined`}),`.`]}),`
`,(0,w.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,w.jsx)(r.p,{children:`A File Card is one row: a preview of fixed width, then the name with its details below it, then the actions.
The preview column is the same width whether it holds a thumbnail or the generic document icon, so the names line up down a list.`}),`
`,(0,w.jsxs)(r.p,{children:[`A name too long for its row wraps onto the next line rather than being cut off with an ellipsis.
The name is what someone recognises the file by, and names that end in a date or a reference – `,(0,w.jsx)(r.code,{children:`aanvraag-2026-03-11-definitief.pdf`}),` – lose exactly the part that tells them apart when the end is dropped.
Rows are no longer all the same height as a result, which is the price of a name that stays readable.
Automatic hyphenation is switched off for the name, because a file name has no word boundaries to break on.`]}),`
`,(0,w.jsx)(r.p,{children:`The actions are laid out as a row from the start.
Only deleting is implemented: viewing and downloading are not built, because we have no use for them yet.
Adding one later takes a prop and a button, and changes neither this anatomy nor the CSS.`}),`
`,(0,w.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,w.jsxs)(r.p,{children:[`The thumbnail is decorative and carries an empty `,(0,w.jsx)(r.code,{children:`alt`}),`.
The component cannot know what the image shows, and the name is already beside it, so giving the image that name would only have it announced twice.`]}),`
`,(0,w.jsxs)(r.p,{children:[`The delete button reads ‘Verwijder’ on screen and ‘Verwijder’ followed by the name of the file to a screen reader.
Repeating the name on screen would put it twice in every row and make the buttons wide and untidy; leaving it out of the accessible name would leave someone reviewing the buttons of a page out of context with the same word for each of them.
Change `,(0,w.jsx)(r.code,{children:`deleteButtonLabel`}),` to change both, as the visible label stays the first part of the accessible name.`]}),`
`,(0,w.jsx)(r.p,{children:`After a delete, focus moves to the delete button of the next file, or of the previous one when the last file in the list is removed.
Without that, focus would fall back to the start of the page as the button disappears from under it.
A File Card outside a list cannot know where focus should go instead, and neither can it when the last file leaves and the list disappears with it: that case belongs to the page around it, as the File Input example shows.`}),`
`,(0,w.jsx)(r.p,{children:`There is no live region.
Moving focus to a neighbouring button already makes the change noticeable, and announcing it on top of that reads as noise rather than as help.`}),`
`,(0,w.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(r.ul,{children:[`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/components-forms-file-list--docs`,children:`File List`}),` – arranges several File Cards as a list, so their number is announced.`]}),`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/components-forms-file-input--docs`,children:`File Input`}),` – lets the user select the files to display.`]}),`
`]}),`
`,(0,w.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(f,{tokens:b})]})}function C(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;function T(){return(T=e((()=>{w=c(),u(),r(),d(),x(),g()})))()}T();export{C as default};