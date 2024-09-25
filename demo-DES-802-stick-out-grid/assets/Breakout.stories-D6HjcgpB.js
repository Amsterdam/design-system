import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as b,t as B,P as w,A as _,I as j}from"./index.esm-DFuBI4B0.js";import{c as N}from"./clsx-B-dksMZM.js";import{r as V}from"./index-Cs7sjTYM.js";import{a as d,p as z}from"./paddingClasses-C5gheHLv.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const P=(r,o,l,t)=>[...d("ams-breakout__cell--col-span-",r),...d("ams-breakout__cell--col-start-",o),...d("ams-breakout__cell--row-span-",l),...d("ams-breakout__cell--row-start-",t)],G=V.forwardRef(({as:r="div",children:o,className:l,colSpan:t,colStart:m,coverGap:u,rowSpan:c,rowStart:p,...R},q)=>e.jsx(r,{...R,ref:q,className:N("ams-breakout__cell",u&&"ams-breakout__cell--cover-gap",P(t,m,c,p),l),children:o}));G.displayName="Breakout.Cell";try{Breakout.Cell.displayName="Breakout.Cell",Breakout.Cell.__docgenInfo={description:"",displayName:"Breakout.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},coverGap:{defaultValue:null,description:"Expand the cell horizontally and vertically to cover its adjacent gaps and margins.",name:"coverGap",required:!1,type:{name:"boolean"}},colSpan:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"colSpan",required:!1,type:{name:'"all" | ResponsiveGridValues<GridColumnNumber>'}},colStart:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"colStart",required:!1,type:{name:"ResponsiveGridValues<GridColumnNumber>"}},rowSpan:{defaultValue:null,description:"The amount of grid rows the cell spans.",name:"rowSpan",required:!1,type:{name:"ResponsiveGridValues<BreakoutRowNumber>"}},rowStart:{defaultValue:null,description:"The index of the grid row the cell starts at.",name:"rowStart",required:!1,type:{name:"ResponsiveGridValues<BreakoutRowNumber>"}}}}}catch{}const T=V.forwardRef(({children:r,className:o,gapVertical:l,paddingBottom:t,paddingTop:m,paddingVertical:u,...c},p)=>e.jsx("div",{...c,ref:p,className:N("ams-breakout",l&&`ams-breakout--gap-vertical--${l}`,z("breakout",t,m,u),o),children:r}));T.displayName="Breakout";const a=Object.assign(T,{Cell:G});try{a.displayName="Breakout",a.__docgenInfo={description:"",displayName:"Breakout",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const O={title:"Components/Layout/Breakout",component:a,decorators:[r=>e.jsx(b,{children:e.jsx(r,{})})]};a.Cell;const A={render:({children:r,...o})=>e.jsx(a.Cell,{...o,children:r})},s={args:{children:[e.jsx(a.Cell,{colSpan:"all",coverGap:!0,rowSpan:{medium:2,narrow:2,wide:1},rowStart:2,children:e.jsx(B,{style:{height:"100%"}})}),e.jsx(a.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:1,rowStart:{medium:3,narrow:3,wide:2},children:e.jsx(w,{inverseColor:!0,children:"Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt."})}),e.jsx(a.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:{medium:1,narrow:1,wide:7},rowSpan:2,rowStart:1,style:{alignSelf:"end"},children:e.jsx(_,{ratio:"square",children:e.jsx(j,{alt:"",src:"https://picsum.photos/960/960"})})})]}},n={args:{children:[e.jsx(a.Cell,{colSpan:"all",rowSpan:2,rowStart:1,children:e.jsx(_,{ratio:"x-wide",children:e.jsx(j,{alt:"",src:"https://picsum.photos/1600/900"})})}),e.jsx(a.Cell,{colSpan:"all",coverGap:!0,rowSpan:2,rowStart:2,children:e.jsx(B,{style:{height:"100%"}})}),e.jsxs(a.Cell,{colSpan:{medium:6,narrow:4,wide:8},colStart:{medium:2,narrow:1,wide:3},rowStart:3,children:[e.jsx(w,{className:"ams-mb--sm",inverseColor:!0,children:"Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt."}),e.jsx(w,{inverseColor:!0,children:"Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging."})]})]}},i={...A,args:{className:"ams-docs-item ams-docs-item--highlight",coverGap:!0,colSpan:"all"},decorators:[r=>e.jsx(b,{children:e.jsxs(a,{children:[e.jsx(a.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}}),e.jsx(a.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}}),e.jsx(r,{}),e.jsx(a.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}}),e.jsx(a.Cell,{className:"ams-docs-item",colSpan:{narrow:2,medium:4,wide:6}})]})})]};var g,h,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
        <Paragraph inverseColor>
          Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt.
        </Paragraph>
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
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var v,f,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        <Paragraph className="ams-mb--sm" inverseColor>
          Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt.
        </Paragraph>
        <Paragraph inverseColor>
          Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.
        </Paragraph>
      </Breakout.Cell>]
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var k,x,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const I=["Default","MediaOnTop","CoverGap"],U=Object.freeze(Object.defineProperty({__proto__:null,CoverGap:i,Default:s,MediaOnTop:n,__namedExportsOrder:I,default:O},Symbol.toStringTag,{value:"Module"}));export{U as B,i as C,n as M};
