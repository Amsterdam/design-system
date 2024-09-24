import{j as e}from"./jsx-runtime-BlAj40OV.js";import{b as A}from"./exampleContent-hIIPvEhU.js";import{c as y}from"./clsx-B-dksMZM.js";import{r as B}from"./index-Cs7sjTYM.js";import{a as m,p as I}from"./paddingClasses-C5gheHLv.js";import{S as _}from"./Screen-Bi3gjHLv.js";import{S as b}from"./Spotlight-i1uKJTzV.js";import{P as j}from"./Paragraph-BWS5kDPY.js";import{I as N}from"./Image-CVzrCme5.js";import{A as G}from"./AspectRatio-Cd0KgYDn.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const O=(r,o,l,t)=>[...m("ams-breakout__cell--col-span-",r),...m("ams-breakout__cell--col-start-",o),...m("ams-breakout__cell--row-span-",l),...m("ams-breakout__cell--row-start-",t)],T=B.forwardRef(({as:r="div",children:o,className:l,colSpan:t,colStart:c,coverGap:d,rowSpan:p,rowStart:u,...q},P)=>e.jsx(r,{...q,ref:P,className:y("ams-breakout__cell",d&&"ams-breakout__cell--cover-gap",O(t,c,p,u),l),children:o}));T.displayName="Breakout.Cell";try{Breakout.Cell.displayName="Breakout.Cell",Breakout.Cell.__docgenInfo={description:"",displayName:"Breakout.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},coverGap:{defaultValue:null,description:"Expand the cell horizontally and vertically to cover its adjacent gaps and margins.",name:"coverGap",required:!1,type:{name:"boolean"}},colSpan:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"colSpan",required:!1,type:{name:'"all" | ResponsiveGridValues<GridColumnNumber>'}},colStart:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"colStart",required:!1,type:{name:"ResponsiveGridValues<GridColumnNumber>"}},rowSpan:{defaultValue:null,description:"The amount of grid rows the cell spans.",name:"rowSpan",required:!1,type:{name:"ResponsiveGridValues<BreakoutRowNumber>"}},rowStart:{defaultValue:null,description:"The index of the grid row the cell starts at.",name:"rowStart",required:!1,type:{name:"ResponsiveGridValues<BreakoutRowNumber>"}}}}}catch{}const V=B.forwardRef(({children:r,className:o,gapVertical:l,paddingBottom:t,paddingTop:c,paddingVertical:d,...p},u)=>e.jsx("div",{...p,ref:u,className:y("ams-breakout",l&&`ams-breakout--gap-vertical--${l}`,I("breakout",t,c,d),o),children:r}));V.displayName="Breakout";const a=Object.assign(V,{Cell:T});try{a.displayName="Breakout",a.__docgenInfo={description:"",displayName:"Breakout",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const R=A(),M={title:"Components/Layout/Breakout",component:a,decorators:[r=>e.jsx(_,{children:e.jsx(r,{})})]};a.Cell;const E={render:({children:r,...o})=>e.jsx(a.Cell,{...o,children:r})},s={args:{children:[e.jsx(a.Cell,{colSpan:"all",coverGap:!0,rowSpan:{medium:2,narrow:2,wide:1},rowStart:2,children:e.jsx(b,{style:{height:"100%"}})}),e.jsx(a.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:1,rowStart:{medium:3,narrow:3,wide:2},children:e.jsx(j,{inverseColor:!0,children:R})}),e.jsx(a.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:{medium:1,narrow:1,wide:7},rowSpan:2,rowStart:1,style:{alignSelf:"end"},children:e.jsx(G,{ratio:"square",children:e.jsx(N,{alt:"",src:"https://picsum.photos/960/960"})})})]}},n={args:{children:[e.jsx(a.Cell,{colSpan:"all",rowSpan:2,rowStart:1,children:e.jsx(G,{ratio:"x-wide",children:e.jsx(N,{alt:"",src:"https://picsum.photos/1600/900"})})}),e.jsx(a.Cell,{colSpan:"all",coverGap:!0,rowSpan:2,rowStart:2,children:e.jsx(b,{style:{height:"100%"}})}),e.jsx(a.Cell,{colSpan:{medium:6,narrow:4,wide:8},colStart:{medium:2,narrow:1,wide:3},rowStart:3,children:e.jsx(j,{inverseColor:!0,children:R})})]}},i={...E,args:{className:"ams-docs-item ams-docs-item--highlight",coverGap:!0,colSpan:"all"},decorators:[r=>e.jsx(_,{children:e.jsxs(a,{children:[e.jsx(a.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}}),e.jsx(a.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}}),e.jsx(r,{}),e.jsx(a.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}}),e.jsx(a.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}})]})})]};var w,S,h;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var g,f,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var C,k,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const L=["Default","MediaOnTop","CoverGap"],X=Object.freeze(Object.defineProperty({__proto__:null,CoverGap:i,Default:s,MediaOnTop:n,__namedExportsOrder:L,default:M},Symbol.toStringTag,{value:"Module"}));export{X as B,i as C,n as M};
