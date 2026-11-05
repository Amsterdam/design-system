import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./iframe-DX0QEzKm.js";import{r as o,t as s}from"./Button-B7TGwY6C.js";import{n as c,t as l}from"./Paragraph-B2ZqqK_4.js";var u,d,f,p;function m(){return(m=e((()=>{a(),u=n(),d=r(),f=[`large`],p=(0,u.forwardRef)(({className:e,size:t,...n},r)=>(0,d.jsx)(`span`,{...n,"aria-hidden":!0,className:i(`ams-spinner`,t&&`ams-spinner--${t}`,e),ref:r})),p.displayName=`Spinner`;try{p.displayName=`Spinner`,p.__docgenInfo={description:`A spinning circle that is used for a short or unknown amount of time when something on the page is loading.
Its size follows the surrounding text.`,displayName:`Spinner`,filePath:`/home/runner/work/design-system/design-system/packages/react/src/Spinner/Spinner.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/Spinner/Spinner.tsx`,name:`TypeLiteral`}],description:`The size of the spinner. Without a size, it matches the body text next to it.`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"large"`,value:[{value:`"large"`}]}}},tags:{see:`{@link https://designsystem.amsterdam/?path=/docs/components-feedback-spinner--docs Spinner docs at Amsterdam Design System}`}}}catch{}})))()}var h=t({Default:()=>v,InButton:()=>x,LoadingResults:()=>y,NextToText:()=>b,__namedExportsOrder:()=>S,default:()=>_}),g,_,v,y,b,x,S;function C(){return(C=e((()=>{o(),c(),m(),g=r(),_={title:`Components/Feedback/Spinner`,component:p,argTypes:{size:{control:`select`,options:f}}},v={},y={render:e=>(0,g.jsxs)(`section`,{"aria-busy":`true`,children:[(0,g.jsx)(`p`,{className:`ams-visually-hidden`,role:`status`,children:`Zoekresultaten worden geladen`}),(0,g.jsx)(p,{...e})]})},b={parameters:{controls:{exclude:[`size`]}},render:()=>(0,g.jsxs)(l,{children:[(0,g.jsx)(p,{}),` Uw aanvraag wordt verwerkt`]})},x={parameters:{controls:{exclude:[`size`]}},render:()=>(0,g.jsxs)(s,{children:[(0,g.jsx)(p,{}),` Versturen`]})},S=[`Default`,`LoadingResults`,`NextToText`,`InButton`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <section aria-busy="true">
      <p className="ams-visually-hidden" role="status">
        Zoekresultaten worden geladen
      </p>
      <Spinner {...args} />
    </section>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ['size']
    }
  },
  render: () => <Paragraph>
      <Spinner /> Uw aanvraag wordt verwerkt
    </Paragraph>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ['size']
    }
  },
  render: () => <Button>
      <Spinner /> Versturen
    </Button>
}`,...x.parameters?.docs?.source}}}})))()}export{m as a,p as i,C as n,_ as r,h as t};