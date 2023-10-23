import{D as u,j as r,s as g}from"./index.esm-d2c8d5bf.js";const m={title:"Feedback/Dialog",component:u,args:{children:"U kunt de ingevulde antwoorden opslaan in onze beveiligde database, deze kunt u later openen om verder te gaan met invullen. Nadat u op opslaan heeft geklikt ontvangt u een mail. Met de link in deze mail kunt verder gaan met het formulier."}},e={args:{open:!0},render:a=>r.jsx(u,{...a})},o={decorators:[a=>r.jsxs("article",{children:[r.jsx(g,{onClick:()=>{var t;return(t=document.querySelector("dialog"))==null?void 0:t.showModal()},children:"Open Dialog"}),r.jsx(a,{})]})]};var n,s,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: args => <Dialog {...args} />
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,d,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  decorators: [Story => <article>
        <Button onClick={() => document.querySelector('dialog')?.showModal()}>Open Dialog</Button>
        <Story />
      </article>]
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const p=["Default","ShowDialog"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:e,ShowDialog:o,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{S as D};
//# sourceMappingURL=Dialog.stories-a8a9e4bb.js.map
