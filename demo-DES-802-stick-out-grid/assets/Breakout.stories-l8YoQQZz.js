import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as $}from"./exampleContent-Gq_MSqYX.js";import{c as _}from"./clsx-B-dksMZM.js";import{r as b}from"./index-Cs7sjTYM.js";import{S as k}from"./Spotlight-IssvtslZ.js";import{P as v}from"./Paragraph-BWS5kDPY.js";import{I as S}from"./Image-CVzrCme5.js";import{H as N}from"./Heading-DUu-96hO.js";import{A as C}from"./AspectRatio-Cd0KgYDn.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const V=(a,t,r,l)=>{if(!a&&!t&&!r&&!l)return[];const o=[];if(a==="all"||typeof a=="number")o.push(`ams-breakout__cell--col-span-${a}`);else if(a){const{narrow:s,medium:i,wide:n}=a;o.push(`ams-breakout__cell--col-span-${s}`,`ams-breakout__cell--col-span-${i}-medium`,`ams-breakout__cell--col-span-${n}-wide`)}if(typeof t=="number")o.push(`ams-breakout__cell--col-start-${t}`);else if(t){const{narrow:s,medium:i,wide:n}=t;o.push(`ams-breakout__cell--col-start-${s}`,`ams-breakout__cell--col-start-${i}-medium`,`ams-breakout__cell--col-start-${n}-wide`)}if(typeof r=="number")o.push(`ams-breakout__cell--row-span-${r}`);else if(r){const{narrow:s,medium:i,wide:n}=r;o.push(`ams-breakout__cell--row-span-${s}`,`ams-breakout__cell--row-span-${i}-medium`,`ams-breakout__cell--row-span-${n}-wide`)}if(typeof l=="number")o.push(`ams-breakout__cell--row-start-${l}`);else if(l){const{narrow:s,medium:i,wide:n}=l;o.push(`ams-breakout__cell--row-start-${s}`,`ams-breakout__cell--row-start-${i}-medium`,`ams-breakout__cell--row-start-${n}-wide`)}return o},x=b.forwardRef(({as:a="div",children:t,className:r,colSpan:l,colStart:o,coverGap:s,rowSpan:i,rowStart:n,...B},j)=>e.jsx(a,{...B,ref:j,className:_("ams-breakout__cell",s&&"ams-breakout__cell--cover-gap",V(l,o,i,n),r),children:t}));x.displayName="Breakout.Cell";try{Breakout.Cell.displayName="Breakout.Cell",Breakout.Cell.__docgenInfo={description:"",displayName:"Breakout.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},coverGap:{defaultValue:null,description:"Expand the cell horizontally and vertically to cover its adjacent gaps and margins.",name:"coverGap",required:!1,type:{name:"boolean"}},colSpan:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"colSpan",required:!1,type:{name:'"all" | ResponsiveGridValues<BreakoutColumnNumber>'}},colStart:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"colStart",required:!1,type:{name:"ResponsiveGridValues<BreakoutColumnNumber>"}},rowSpan:{defaultValue:null,description:"The amount of grid rows the cell spans.",name:"rowSpan",required:!1,type:{name:"ResponsiveGridValues<BreakoutRowNumber>"}},rowStart:{defaultValue:null,description:"The index of the grid row the cell starts at.",name:"rowStart",required:!1,type:{name:"ResponsiveGridValues<BreakoutRowNumber>"}}}}}catch{}const R=(a,t,r)=>{const l=[];return r?[`ams-breakout--padding-vertical--${r}`]:(a&&l.push(`ams-breakout--padding-bottom--${a}`),t&&l.push(`ams-breakout--padding-top--${t}`),l)},y=b.forwardRef(({children:a,className:t,gapVertical:r,paddingBottom:l,paddingTop:o,paddingVertical:s,...i},n)=>e.jsx("div",{...i,ref:n,className:_("ams-breakout",r&&`ams-breakout--gap-vertical--${r}`,R(l,o,s),t),children:a}));y.displayName="Breakout";const u=Object.assign(y,{Cell:x});try{u.displayName="Breakout",u.__docgenInfo={description:"",displayName:"Breakout",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const q={title:"Components/Containers/Breakout",component:u},m={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(u.Cell,{colSpan:"all",coverGap:!0,rowSpan:{medium:2,narrow:2,wide:1},rowStart:2,children:e.jsx(k,{style:{height:"100%"}})}),e.jsx(u.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:1,rowStart:{medium:3,narrow:3,wide:2},children:e.jsx(v,{inverseColor:!0,children:$()})}),e.jsx(u.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:{medium:1,narrow:1,wide:7},rowSpan:2,rowStart:1,style:{alignSelf:"end"},children:e.jsx(C,{ratio:"square",children:e.jsx(S,{alt:"",src:"https://picsum.photos/960/960"})})})]})}},c={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(u.Cell,{colSpan:"all",rowSpan:2,rowStart:1,children:e.jsx(C,{ratio:"x-wide",children:e.jsx(S,{alt:"",src:"https://picsum.photos/1600/900"})})}),e.jsx(u.Cell,{colSpan:"all",coverGap:!0,rowSpan:2,rowStart:2,children:e.jsx(k,{style:{height:"100%"}})}),e.jsxs(u.Cell,{colSpan:{medium:6,narrow:4,wide:8},colStart:{medium:2,narrow:1,wide:3},rowStart:3,children:[e.jsx(N,{className:"ams-mb--xs",inverseColor:!0,level:2,children:"Heading"}),e.jsx(v,{inverseColor:!0,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, amet consequatur! Necessitatibus veniam libero nobis dignissimos dolorum repellat alias dolores minima labore a maxime nihil error aut, omnis ullam sint autem non?"})]})]})}};var d,p,h;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <>
        <Breakout.Cell colSpan="all" coverGap rowSpan={{
        medium: 2,
        narrow: 2,
        wide: 1
      }} rowStart={2}>
          <Spotlight style={{
          height: '100%'
        }} />
        </Breakout.Cell>
        <Breakout.Cell colSpan={{
        medium: 8,
        narrow: 4,
        wide: 6
      }} colStart={1} rowStart={{
        medium: 3,
        narrow: 3,
        wide: 2
      }}>
          <Paragraph inverseColor>{exampleParagraph()}</Paragraph>
        </Breakout.Cell>
        <Breakout.Cell colSpan={{
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
        </Breakout.Cell>
      </>
  }
}`,...(h=(p=m.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var w,f,g;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: <>
        <Breakout.Cell colSpan="all" rowSpan={2} rowStart={1}>
          <AspectRatio ratio="x-wide">
            <Image alt="" src="https://picsum.photos/1600/900" />
          </AspectRatio>
        </Breakout.Cell>
        <Breakout.Cell colSpan="all" coverGap rowSpan={2} rowStart={2}>
          <Spotlight style={{
          height: '100%'
        }} />
        </Breakout.Cell>
        <Breakout.Cell colSpan={{
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
        </Breakout.Cell>
      </>
  }
}`,...(g=(f=c.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const T=["Default","MapOnTop"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:m,MapOnTop:c,__namedExportsOrder:T,default:q},Symbol.toStringTag,{value:"Module"}));export{L as B,c as M};
