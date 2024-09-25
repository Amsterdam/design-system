import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as T,t as k,P as p,A as C,I as b}from"./index.esm-DFuBI4B0.js";import{c as _}from"./clsx-B-dksMZM.js";import{r as B}from"./index-Cs7sjTYM.js";import{a as i,p as V}from"./paddingClasses-C5gheHLv.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const R=(a,t,o,l)=>[...i("ams-breakout__cell--col-span-",a),...i("ams-breakout__cell--col-start-",t),...i("ams-breakout__cell--row-span-",o),...i("ams-breakout__cell--row-start-",l)],y=B.forwardRef(({as:a="div",children:t,className:o,colSpan:l,colStart:u,coverGap:d,rowSpan:m,rowStart:c,...j},N)=>e.jsx(a,{...j,ref:N,className:_("ams-breakout__cell",d&&"ams-breakout__cell--cover-gap",R(l,u,m,c),o),children:t}));y.displayName="Breakout.Cell";try{Breakout.Cell.displayName="Breakout.Cell",Breakout.Cell.__docgenInfo={description:"",displayName:"Breakout.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},coverGap:{defaultValue:null,description:"Expand the cell horizontally and vertically to cover its adjacent gaps and margins.",name:"coverGap",required:!1,type:{name:"boolean"}},colSpan:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"colSpan",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},colStart:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"colStart",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}},rowSpan:{defaultValue:null,description:"The amount of grid rows the cell spans.",name:"rowSpan",required:!1,type:{name:"BreakoutRowNumber | BreakoutRowNumbers"}},rowStart:{defaultValue:null,description:"The index of the grid row the cell starts at.",name:"rowStart",required:!1,type:{name:"BreakoutRowNumber | BreakoutRowNumbers"}}}}}catch{}const x=B.forwardRef(({children:a,className:t,gapVertical:o,paddingBottom:l,paddingTop:u,paddingVertical:d,...m},c)=>e.jsx("div",{...m,ref:c,className:_("ams-breakout",o&&`ams-breakout--gap-vertical--${o}`,V("breakout",l,u,d),t),children:a}));x.displayName="Breakout";const r=Object.assign(x,{Cell:y});try{r.displayName="Breakout",r.__docgenInfo={description:"",displayName:"Breakout",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const q={title:"Components/Layout/Breakout",component:r,decorators:[a=>e.jsx(T,{children:e.jsx(a,{})})]},n={args:{children:[e.jsx(r.Cell,{colSpan:"all",coverGap:!0,rowSpan:{medium:2,narrow:2,wide:1},rowStart:2,children:e.jsx(k,{style:{height:"100%"}})}),e.jsx(r.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:1,rowStart:{medium:3,narrow:3,wide:2},children:e.jsx(p,{inverseColor:!0,children:"Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt."})}),e.jsx(r.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:{medium:1,narrow:1,wide:7},rowSpan:2,rowStart:1,style:{alignSelf:"end"},children:e.jsx(C,{ratio:"square",children:e.jsx(b,{alt:"",src:"https://picsum.photos/960/960"})})})]}},s={args:{children:[e.jsx(r.Cell,{colSpan:"all",rowSpan:2,rowStart:1,children:e.jsx(C,{ratio:"x-wide",children:e.jsx(b,{alt:"",src:"https://picsum.photos/1600/900"})})}),e.jsx(r.Cell,{colSpan:"all",coverGap:!0,rowSpan:2,rowStart:2,children:e.jsx(k,{style:{height:"100%"}})}),e.jsxs(r.Cell,{colSpan:{medium:6,narrow:4,wide:8},colStart:{medium:2,narrow:1,wide:3},rowStart:3,children:[e.jsx(p,{className:"ams-mb--sm",inverseColor:!0,children:"Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt."}),e.jsx(p,{inverseColor:!0,children:"Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging."})]})]}};var g,w,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(w=n.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var f,S,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const G=["Default","MediaOnTop"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:n,MediaOnTop:s,__namedExportsOrder:G,default:q},Symbol.toStringTag,{value:"Module"}));export{M as B,s as M};
