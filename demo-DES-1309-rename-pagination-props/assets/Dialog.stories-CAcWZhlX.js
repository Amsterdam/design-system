import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{B as m,P as b,p as S}from"./index.esm-DqLFPo7r.js";import{v as A}from"./v4-CtRu48qb.js";import{c as B}from"./clsx-B-dksMZM.js";import{r as C}from"./index-G8LIXM5I.js";import{H as P}from"./Heading-7IbEntpa.js";import{I as w}from"./IconButton-CL-x2DkD.js";const x=e=>e.currentTarget.closest("dialog")?.close(),I=e=>document.querySelector(e)?.showModal(),j=C.forwardRef(({children:e,className:t,closeButtonLabel:o="Sluiten",footer:r,heading:i,...a},s)=>n.jsxs("dialog",{...a,className:B("ams-dialog",t),ref:s,children:[n.jsxs("header",{className:"ams-dialog__header",children:[n.jsx(P,{level:1,size:"level-4",children:i}),n.jsx(w,{label:o,onClick:x,size:"heading-4",type:"button"})]}),n.jsx("div",{className:"ams-dialog__body",children:e}),r&&n.jsx("footer",{className:"ams-dialog__footer",children:r})]}));j.displayName="Dialog";const c=Object.assign(j,{close:x,open:I});try{c.displayName="Dialog",c.__docgenInfo={description:"",displayName:"Dialog",props:{closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Dialog.",name:"closeButtonLabel",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"Content for the footer, often one Button or an Action Group containing more of them.",name:"footer",required:!1,type:{name:"ReactNode"}},heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!0,type:{name:"string"}}}}}catch{}const{addons:k}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:L}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:v}=__STORYBOOK_MODULE_GLOBAL__;var N=Object.defineProperty,z=(e,t)=>{for(var o in t)N(e,o,{get:t[o],enumerable:!0})},M="storybook/actions",K=`${M}/action-event`,V={depth:10,clearOnStoryChange:!0,limit:50},R=(e,t)=>{let o=Object.getPrototypeOf(e);return!o||t(o)?o:R(o,t)},W=e=>!!(typeof e=="object"&&e&&R(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),Y=e=>{if(W(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let o=Object.getOwnPropertyDescriptor(t,"view"),r=o?.value;return typeof r=="object"&&r?.constructor.name==="Window"&&Object.defineProperty(t,"view",{...o,value:Object.create(r.constructor.prototype)}),t}return e},G=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?A():Date.now().toString(36)+Math.random().toString(36).substring(2);function l(e,t={}){let o={...V,...t},r=function(...i){if(t.implicit){let h=("__STORYBOOK_PREVIEW__"in v?v.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(g=>g.phase==="playing"||g.phase==="rendering");if(h){let g=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,O=new L({phase:h.phase,name:e,deprecated:g});if(g)console.warn(O);else throw O}}let a=k.getChannel(),s=G(),d=5,_=i.map(Y),E=i.length>1?_:_[0],T={id:s,count:0,data:{name:e,args:E},options:{...o,maxDepth:d+(o.depth||3),allowFunction:o.allowFunction||!1}};a.emit(K,T)};return r.isAction=!0,r.implicit=t.implicit,r}const{definePreview:ie}=__STORYBOOK_MODULE_PREVIEW_API__,{global:f}=__STORYBOOK_MODULE_GLOBAL__;var U={};z(U,{argsEnhancers:()=>$,loaders:()=>J});var D=(e,t)=>typeof t[e]>"u"&&!(e in t),F=e=>{let{initialArgs:t,argTypes:o,id:r,parameters:{actions:i}}=e;if(!i||i.disable||!i.argTypesRegex||!o)return{};let a=new RegExp(i.argTypesRegex);return Object.entries(o).filter(([s])=>!!a.test(s)).reduce((s,[d,_])=>(D(d,t)&&(s[d]=l(d,{implicit:!0,id:r})),s),{})},q=e=>{let{initialArgs:t,argTypes:o,parameters:{actions:r}}=e;return r?.disable||!o?{}:Object.entries(o).filter(([i,a])=>!!a.action).reduce((i,[a,s])=>(D(a,t)&&(i[a]=l(typeof s.action=="string"?s.action:a)),i),{})},$=[q,F],y=!1,H=e=>{let{parameters:{actions:t}}=e;if(!t?.disable&&!y&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in f&&typeof f.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let o=f.__STORYBOOK_TEST_ON_MOCK_CALL__;o((r,i)=>{let a=r.getMockName();a!=="spy"&&(!/^next\/.*::/.test(a)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(s=>a.startsWith(s)))&&l(a)(i)}),y=!0}},J=[H];const Q={title:"Components/Containers/Dialog",component:c,argTypes:{footer:{table:{disable:!0}},heading:{description:"The text for the heading."},open:{description:"Whether the dialog box is active and available for interaction."}},decorators:[(e,{args:t})=>n.jsxs(n.Fragment,{children:[n.jsx(m,{onClick:()=>{l("open")(),c.open(`#${t.id}`)},children:"Open"}),n.jsx(e,{})]})]},p={args:{children:n.jsx(b,{children:"U ontvangt een bevestiging per e-mail."}),footer:n.jsx(m,{onClick:e=>(l("close")(),c.close(e)),children:"Sluiten"}),heading:"De gegevens zijn opgeslagen",id:"ams-dialog-default"}},u={args:{children:n.jsx("form",{id:"ams-dialog-form",method:"dialog",children:n.jsx(b,{children:"Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan dan verloren."})}),footer:n.jsxs(S,{children:[n.jsx(m,{form:"ams-dialog-form",onClick:l("continue"),type:"submit",value:"submit",children:"Doorgaan"}),n.jsx(m,{onClick:e=>(l("cancel")(),c.close(e)),variant:"secondary",children:"Stoppen"})]}),heading:"Niet alle gegevens zijn opgeslagen",id:"ams-dialog-asking-to-confirm"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>,
    footer: <Button onClick={event => {
      action('close')();
      return Dialog.close(event);
    }}>
        Sluiten
      </Button>,
    heading: 'De gegevens zijn opgeslagen',
    id: 'ams-dialog-default'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: <form id="ams-dialog-form" method="dialog">
        <Paragraph>
          Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan
          dan verloren.
        </Paragraph>
      </form>,
    footer: <ActionGroup>
        <Button form="ams-dialog-form" onClick={action('continue')} type="submit" value="submit">
          Doorgaan
        </Button>
        <Button onClick={event => {
        action('cancel')();
        return Dialog.close(event);
      }} variant="secondary">
          Stoppen
        </Button>
      </ActionGroup>,
    heading: 'Niet alle gegevens zijn opgeslagen',
    id: 'ams-dialog-asking-to-confirm'
  }
}`,...u.parameters?.docs?.source}}};const X=["Default","Confirmation"],se=Object.freeze(Object.defineProperty({__proto__:null,Confirmation:u,Default:p,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{u as C,se as D};
