import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as R}from"./exampleContent-Gq_MSqYX.js";import{c as k}from"./clsx-B-dksMZM.js";import{r as C}from"./index-Cs7sjTYM.js";import{p as q}from"./paddingClasses-Dsuv6c-E.js";import{S as x}from"./Screen-Bi3gjHLv.js";import{S as y}from"./Spotlight-i1uKJTzV.js";import{P as B}from"./Paragraph-BWS5kDPY.js";import{I as j}from"./Image-CVzrCme5.js";import{H as P}from"./Heading-DUu-96hO.js";import{A as N}from"./AspectRatio-Cd0KgYDn.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const H=(a,l,m,n)=>{if(!a&&!l&&!m&&!n)return[];const o=[];if(a==="all"||typeof a=="number")o.push(`ams-breakout__cell--col-span-${a}`);else if(a){const{narrow:t,medium:s,wide:i}=a;o.push(`ams-breakout__cell--col-span-${t}`,`ams-breakout__cell--col-span-${s}-medium`,`ams-breakout__cell--col-span-${i}-wide`)}if(typeof l=="number")o.push(`ams-breakout__cell--col-start-${l}`);else if(l){const{narrow:t,medium:s,wide:i}=l;o.push(`ams-breakout__cell--col-start-${t}`,`ams-breakout__cell--col-start-${s}-medium`,`ams-breakout__cell--col-start-${i}-wide`)}if(typeof m=="number")o.push(`ams-breakout__cell--row-span-${m}`);else if(m){const{narrow:t,medium:s,wide:i}=m;o.push(`ams-breakout__cell--row-span-${t}`,`ams-breakout__cell--row-span-${s}-medium`,`ams-breakout__cell--row-span-${i}-wide`)}if(typeof n=="number")o.push(`ams-breakout__cell--row-start-${n}`);else if(n){const{narrow:t,medium:s,wide:i}=n;o.push(`ams-breakout__cell--row-start-${t}`,`ams-breakout__cell--row-start-${s}-medium`,`ams-breakout__cell--row-start-${i}-wide`)}return o},T=C.forwardRef(({as:a="div",children:l,className:m,colSpan:n,colStart:o,coverGap:t,rowSpan:s,rowStart:i,...G},V)=>e.jsx(a,{...G,ref:V,className:k("ams-breakout__cell",t&&"ams-breakout__cell--cover-gap",H(n,o,s,i),m),children:l}));T.displayName="Breakout.Cell";try{Breakout.Cell.displayName="Breakout.Cell",Breakout.Cell.__docgenInfo={description:"",displayName:"Breakout.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},coverGap:{defaultValue:null,description:"Expand the cell horizontally and vertically to cover its adjacent gaps and margins.",name:"coverGap",required:!1,type:{name:"boolean"}},colSpan:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"colSpan",required:!1,type:{name:'"all" | ResponsiveGridValues<GridColumnNumber>'}},colStart:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"colStart",required:!1,type:{name:"ResponsiveGridValues<GridColumnNumber>"}},rowSpan:{defaultValue:null,description:"The amount of grid rows the cell spans.",name:"rowSpan",required:!1,type:{name:"ResponsiveGridValues<BreakoutRowNumber>"}},rowStart:{defaultValue:null,description:"The index of the grid row the cell starts at.",name:"rowStart",required:!1,type:{name:"ResponsiveGridValues<BreakoutRowNumber>"}}}}}catch{}const $=C.forwardRef(({children:a,className:l,gapVertical:m,paddingBottom:n,paddingTop:o,paddingVertical:t,...s},i)=>e.jsx("div",{...s,ref:i,className:k("ams-breakout",m&&`ams-breakout--gap-vertical--${m}`,q("breakout",n,o,t),l),children:a}));$.displayName="Breakout";const r=Object.assign($,{Cell:T});try{r.displayName="Breakout",r.__docgenInfo={description:"",displayName:"Breakout",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const A={title:"Components/Layout/Breakout",component:r,decorators:[a=>e.jsx(x,{children:e.jsx(a,{})})]};r.Cell;const I={render:({children:a,...l})=>e.jsx(r.Cell,{...l,children:a})},u={args:{children:[e.jsx(r.Cell,{colSpan:"all",coverGap:!0,rowSpan:{medium:2,narrow:2,wide:1},rowStart:2,children:e.jsx(y,{style:{height:"100%"}})}),e.jsx(r.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:1,rowStart:{medium:3,narrow:3,wide:2},children:e.jsx(B,{inverseColor:!0,children:R()})}),e.jsx(r.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:{medium:1,narrow:1,wide:7},rowSpan:2,rowStart:1,style:{alignSelf:"end"},children:e.jsx(N,{ratio:"square",children:e.jsx(j,{alt:"",src:"https://picsum.photos/960/960"})})})]}},c={args:{children:[e.jsx(r.Cell,{colSpan:"all",rowSpan:2,rowStart:1,children:e.jsx(N,{ratio:"x-wide",children:e.jsx(j,{alt:"",src:"https://picsum.photos/1600/900"})})}),e.jsx(r.Cell,{colSpan:"all",coverGap:!0,rowSpan:2,rowStart:2,children:e.jsx(y,{style:{height:"100%"}})}),e.jsxs(r.Cell,{colSpan:{medium:6,narrow:4,wide:8},colStart:{medium:2,narrow:1,wide:3},rowStart:3,children:[e.jsx(P,{className:"ams-mb--xs",inverseColor:!0,level:2,children:"Heading"}),e.jsx(B,{inverseColor:!0,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, amet consequatur! Necessitatibus veniam libero nobis dignissimos dolorum repellat alias dolores minima labore a maxime nihil error aut, omnis ullam sint autem non?"})]})]}},d={...I,args:{className:"ams-docs-item ams-docs-item--highlight",coverGap:!0,colSpan:"all"},decorators:[a=>e.jsx(x,{children:e.jsxs(r,{children:[e.jsx(r.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}}),e.jsx(r.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}}),e.jsx(a,{}),e.jsx(r.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}}),e.jsx(r.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}})]})})]};var p,w,h;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
        <Paragraph inverseColor>{exampleParagraph()}</Paragraph>
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
}`,...(h=(w=u.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var g,f,S;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
        <Heading className="ams-mb--xs" inverseColor level={2}>
          Heading
        </Heading>
        <Paragraph inverseColor>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, amet consequatur! Necessitatibus veniam
          libero nobis dignissimos dolorum repellat alias dolores minima labore a maxime nihil error aut, omnis ullam
          sint autem non?
        </Paragraph>
      </Breakout.Cell>]
  }
}`,...(S=(f=c.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var _,b,v;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const O=["Default","MediaOnTop","CoverGap"],X=Object.freeze(Object.defineProperty({__proto__:null,CoverGap:d,Default:u,MediaOnTop:c,__namedExportsOrder:O,default:A},Symbol.toStringTag,{value:"Module"}));export{X as B,d as C,c as M};
