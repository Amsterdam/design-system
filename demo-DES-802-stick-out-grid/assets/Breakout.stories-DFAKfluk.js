import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as y,t as B,P as _,A as b,I as j}from"./index.esm-DFuBI4B0.js";import{b as A}from"./exampleContent-hIIPvEhU.js";import{c as N}from"./clsx-B-dksMZM.js";import{r as G}from"./index-Cs7sjTYM.js";import{a as c,p as I}from"./paddingClasses-C5gheHLv.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const O=(r,l,o,t)=>[...c("ams-breakout__cell--col-span-",r),...c("ams-breakout__cell--col-start-",l),...c("ams-breakout__cell--row-span-",o),...c("ams-breakout__cell--row-start-",t)],T=G.forwardRef(({as:r="div",children:l,className:o,colSpan:t,colStart:m,coverGap:d,rowSpan:u,rowStart:p,...q},P)=>e.jsx(r,{...q,ref:P,className:N("ams-breakout__cell",d&&"ams-breakout__cell--cover-gap",O(t,m,u,p),o),children:l}));T.displayName="Breakout.Cell";try{Breakout.Cell.displayName="Breakout.Cell",Breakout.Cell.__docgenInfo={description:"",displayName:"Breakout.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},coverGap:{defaultValue:null,description:"Expand the cell horizontally and vertically to cover its adjacent gaps and margins.",name:"coverGap",required:!1,type:{name:"boolean"}},colSpan:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"colSpan",required:!1,type:{name:'"all" | ResponsiveGridValues<GridColumnNumber>'}},colStart:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"colStart",required:!1,type:{name:"ResponsiveGridValues<GridColumnNumber>"}},rowSpan:{defaultValue:null,description:"The amount of grid rows the cell spans.",name:"rowSpan",required:!1,type:{name:"ResponsiveGridValues<BreakoutRowNumber>"}},rowStart:{defaultValue:null,description:"The index of the grid row the cell starts at.",name:"rowStart",required:!1,type:{name:"ResponsiveGridValues<BreakoutRowNumber>"}}}}}catch{}const V=G.forwardRef(({children:r,className:l,gapVertical:o,paddingBottom:t,paddingTop:m,paddingVertical:d,...u},p)=>e.jsx("div",{...u,ref:p,className:N("ams-breakout",o&&`ams-breakout--gap-vertical--${o}`,I("breakout",t,m,d),l),children:r}));V.displayName="Breakout";const a=Object.assign(V,{Cell:T});try{a.displayName="Breakout",a.__docgenInfo={description:"",displayName:"Breakout",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const R=A(),M={title:"Components/Layout/Breakout",component:a,decorators:[r=>e.jsx(y,{children:e.jsx(r,{})})]};a.Cell;const E={render:({children:r,...l})=>e.jsx(a.Cell,{...l,children:r})},s={args:{children:[e.jsx(a.Cell,{colSpan:"all",coverGap:!0,rowSpan:{medium:2,narrow:2,wide:1},rowStart:2,children:e.jsx(B,{style:{height:"100%"}})}),e.jsx(a.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:1,rowStart:{medium:3,narrow:3,wide:2},children:e.jsx(_,{inverseColor:!0,children:R})}),e.jsx(a.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:{medium:1,narrow:1,wide:7},rowSpan:2,rowStart:1,style:{alignSelf:"end"},children:e.jsx(b,{ratio:"square",children:e.jsx(j,{alt:"",src:"https://picsum.photos/960/960"})})})]}},n={args:{children:[e.jsx(a.Cell,{colSpan:"all",rowSpan:2,rowStart:1,children:e.jsx(b,{ratio:"x-wide",children:e.jsx(j,{alt:"",src:"https://picsum.photos/1600/900"})})}),e.jsx(a.Cell,{colSpan:"all",coverGap:!0,rowSpan:2,rowStart:2,children:e.jsx(B,{style:{height:"100%"}})}),e.jsx(a.Cell,{colSpan:{medium:6,narrow:4,wide:8},colStart:{medium:2,narrow:1,wide:3},rowStart:3,children:e.jsx(_,{inverseColor:!0,children:R})})]}},i={...E,args:{className:"ams-docs-item ams-docs-item--highlight",coverGap:!0,colSpan:"all"},decorators:[r=>e.jsx(y,{children:e.jsxs(a,{children:[e.jsx(a.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}}),e.jsx(a.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}}),e.jsx(r,{}),e.jsx(a.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}}),e.jsx(a.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}})]})})]};var w,S,h;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: [<Breakout.Cell colSpan="all" coverGap rowSpan={{
      medium: 2,
      narrow: 2,
      wide: 1
    }} rowStart={2}>
        <Spotlight style={{
        height: '100%'
      }} />
      </Breakout.Cell>, <Breakout.Cell colSpan={{
      medium: 8,
      narrow: 4,
      wide: 6
    }} colStart={1} rowStart={{
      medium: 3,
      narrow: 3,
      wide: 2
    }}>
        <Paragraph inverseColor>{paragraph}</Paragraph>
      </Breakout.Cell>, <Breakout.Cell colSpan={{
      medium: 8,
      narrow: 4,
      wide: 6
    }} colStart={{
      medium: 1,
      narrow: 1,
      wide: 7
    }} rowSpan={2} rowStart={1} style={{
      alignSelf: 'end'
    }}>
        <AspectRatio ratio="square">
          <Image alt="" src="https://picsum.photos/960/960" />
        </AspectRatio>
      </Breakout.Cell>]
  }
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var g,v,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<Breakout.Cell colSpan="all" rowSpan={2} rowStart={1}>
        <AspectRatio ratio="x-wide">
          <Image alt="" src="https://picsum.photos/1600/900" />
        </AspectRatio>
      </Breakout.Cell>, <Breakout.Cell colSpan="all" coverGap rowSpan={2} rowStart={2}>
        <Spotlight style={{
        height: '100%'
      }} />
      </Breakout.Cell>, <Breakout.Cell colSpan={{
      medium: 6,
      narrow: 4,
      wide: 8
    }} colStart={{
      medium: 2,
      narrow: 1,
      wide: 3
    }} rowStart={3}>
        <Paragraph inverseColor>{paragraph}</Paragraph>
      </Breakout.Cell>]
  }
}`,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var f,k,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item ams-docs-item--highlight',
    coverGap: true,
    colSpan: 'all'
  },
  decorators: [Story => <Screen>
        <Breakout>
          <Breakout.Cell className="ams-docs-item" colSpan={{
        narrow: 2,
        medium: 4,
        wide: 6
      }} />
          <Breakout.Cell className="ams-docs-item" colSpan={{
        narrow: 2,
        medium: 4,
        wide: 6
      }} />
          <Story />
          <Breakout.Cell className="ams-docs-item" colSpan={{
        narrow: 2,
        medium: 4,
        wide: 6
      }} />
          <Breakout.Cell className="ams-docs-item" colSpan={{
        narrow: 2,
        medium: 4,
        wide: 6
      }} />
        </Breakout>
      </Screen>]
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const L=["Default","MediaOnTop","CoverGap"],K=Object.freeze(Object.defineProperty({__proto__:null,CoverGap:i,Default:s,MediaOnTop:n,__namedExportsOrder:L,default:M},Symbol.toStringTag,{value:"Module"}));export{K as B,i as C,n as M};
