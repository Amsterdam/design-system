import{j as e}from"./jsx-runtime-94f6e698.js";import{M as a,d as r,P as d,e as u,f as o}from"./index-b17c501f.js";import{B as m,P as l,S as c,T as b}from"./Button.stories-d08a827a.js";import{u as s}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-9cf3499d.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./clsx.m-1229b3e0.js";const g=`# Button

De button gebruik je zodat de gebruiker acties kan uit te voeren en de user interface kan bedienen.

## Richtlijnen

- Een label tekst die beschrijft wat de functie van de button is.
- Een duidelijke constrasterende kleurstelling zodat deze goed te herkennen is en snel te lokaliseren valt.
- Gebruik het juiste type button voor de daarbijhorende toepassing. Bijvoorbeeld een button binnen een formulier moet altijd het het type \`submit\` zijn.
- Zorg dat een button ook met een keyboard te bedienen is.

## Relevante WCAG eisen

- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): je kan de button activeren met \`Enter\` of \`Space\`, en het is mogelijk met \`Tab\` de button te focussen. \`Space\` gebruiken heeft dan niet het effect dat de pagina scrollt.
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de button moet duidelijk zijn
- [WCAG eis 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation):
  - gebruik niet de \`mousedown\` event om de button te activeren, gebruik liever de \`click\` event
  - \`mousedown\` mag alleen gebruikt worden als \`mouseup\` het effect weer ongedaan maakt, bijvoorbeeld een "_fast foward_" button om audio of video door te spoelen.
- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de button moet groot genoeg zijn om aan te klikken, en kleine buttons moeten niet te dicht op een andere button staan.

## Referenties

- [W3C - Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)
- [W3C - Headings & labels](https://www.w3.org/TR/WCAG21/#headings-and-labels)
`,h=`# CSS Button

Het button component maakt gebruik van de CSS library van de gemeente Utrecht. Daarop is het Amsterdam Design toegepast. Concreet betekent dit dat de Utrecht class names worden gebruikt met de Amsterdamse css attribuut waarden.
Een voorbeeld van een HTML button met de Amsterdamse styling is:

\`\`\`html
<button class="utrecht-button">Amsterdam Button</button>
\`\`\`

Deze button wordt getoond met de Amsterdamse button styling.

Vedere documentatie van de Utrecht button is terug te vinden in hun [github](https://github.com/nl-design-system/utrecht/tree/main/components/button) repository.
`;function i(t){const n=Object.assign({h2:"h2",p:"p",h3:"h3"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
`,e.jsx(r,{children:g}),`
`,e.jsx(r,{children:h}),`
`,e.jsx(d,{}),`
`,e.jsx(u,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.p,{children:"De primary, secondary en tertiary buttons kunnen naast elkaar gebruikt worden. Niveaus mogen worden overgeslagen."}),`
`,e.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,e.jsx(n.p,{children:"Dit is de belangrijkste call-to-action knop. Er mag 1 primary button per scherm gebruikt worden."}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.h3,{id:"secondary",children:"Secondary"}),`
`,e.jsx(n.p,{children:"De secondary button wordt voor minder prominente calls-to-action gebruikt. Het is mogelijk om meer dan 1 secondary button te gebruiken."}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h3,{id:"tertiary",children:"Tertiary"}),`
`,e.jsx(n.p,{children:"De tertiary button wordt ingezet voor de minst belangrijke calls-to-action. Er kunnen er zoveel als nodig zijn ingezet worden."}),`
`,e.jsx(o,{of:b})]})}function G(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{G as default};
//# sourceMappingURL=Button.docs-fd7c58e0.js.map
