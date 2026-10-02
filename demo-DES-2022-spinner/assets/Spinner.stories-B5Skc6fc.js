import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./iframe-DhcZvsyP.js";import{r as o,t as s}from"./Button-BZLE58ah.js";var c,l,u,d;function f(){return(f=e((()=>{a(),c=n(),l=r(),u=[`small`,`medium`,`large`],d=(0,c.forwardRef)(({className:e,size:t=`medium`,...n},r)=>(0,l.jsx)(`span`,{...n,"aria-hidden":!0,className:i(`ams-spinner`,`ams-spinner--${t}`,e),ref:r})),d.displayName=`Spinner`;try{d.displayName=`Spinner`,d.__docgenInfo={description:`A spinning circle that is used for a short or unknown amount of time when something on the page is loading.`,displayName:`Spinner`,filePath:`/home/runner/work/design-system/design-system/packages/react/src/Spinner/Spinner.tsx`,methods:[],props:{size:{defaultValue:{value:`medium`},declarations:[{fileName:`design-system/packages/react/src/Spinner/Spinner.tsx`,name:`TypeLiteral`}],description:`The size of the spinner.`,name:`size`,required:!1,tags:{default:`'medium'`},type:{name:`enum`,raw:`"small" | "large" | "medium"`,value:[{value:`"small"`},{value:`"large"`},{value:`"medium"`}]}}},tags:{see:`{@link https://designsystem.amsterdam/?path=/docs/components-feedback-spinner--docs Spinner docs at Amsterdam Design System}`}}}catch{}})))()}var p=t({Default:()=>g,InButton:()=>v,LoadingResults:()=>_,__namedExportsOrder:()=>y,default:()=>h}),m,h,g,_,v,y;function b(){return(b=e((()=>{o(),f(),m=r(),h={title:`Components/Feedback/Spinner`,component:d,argTypes:{size:{control:`select`,options:u}}},g={},_={render:e=>(0,m.jsxs)(`section`,{"aria-busy":`true`,children:[(0,m.jsx)(`p`,{className:`ams-visually-hidden`,role:`status`,children:`Zoekresultaten worden geladen`}),(0,m.jsx)(d,{...e})]})},v={parameters:{controls:{exclude:[`size`]}},render:()=>(0,m.jsxs)(s,{children:[(0,m.jsx)(d,{size:`small`}),` Versturen`]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <section aria-busy="true">
      <p className="ams-visually-hidden" role="status">
        Zoekresultaten worden geladen
      </p>
      <Spinner {...args} />
    </section>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ['size']
    }
  },
  render: () => <Button>
      <Spinner size="small" /> Versturen
    </Button>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`LoadingResults`,`InButton`]})))()}export{f as a,d as i,b as n,h as r,p as t};