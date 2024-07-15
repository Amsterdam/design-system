import{j as a}from"./jsx-runtime-BlAj40OV.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const n=({children:s})=>a.jsx("span",{className:"ams-visually-hidden",children:s}),p={title:"Utilities/CSS/Visually Hidden",component:n,args:{children:"This text can be read out by a screen reader."},argTypes:{children:{description:"The content to hide visually.",table:{disable:!1}}}},e={decorators:[s=>a.jsxs("div",{children:[a.jsx("p",{className:"ams-paragraph",children:"This text is available to all users. The text below this sentence is only available for non-visual user agents."}),a.jsx("p",{className:"ams-paragraph",children:a.jsx(s,{})})]})]};var r,t,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  decorators: [Story => <div>
        <p className="ams-paragraph">
          This text is available to all users. The text below this sentence is only available for non-visual user
          agents.
        </p>
        <p className="ams-paragraph">
          <Story />
        </p>
      </div>]
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,p as default};
