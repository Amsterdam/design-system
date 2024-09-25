import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as V,t as k,P as p,A as C,I as b}from"./index.esm-Dsp8WWD2.js";import{c as _}from"./clsx-B-dksMZM.js";import{r as B}from"./index-Cs7sjTYM.js";import{a as u,p as T}from"./paddingClasses-C5gheHLv.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const R=(a,l,t,o)=>[...u("ams-breakout__cell--col-span-",a),...u("ams-breakout__cell--col-start-",l),...u("ams-breakout__cell--row-span-",t),...u("ams-breakout__cell--row-start-",o)],x=B.forwardRef(({as:a="div",children:l,className:t,colSpan:o,colStart:d,has:i,rowSpan:m,rowStart:c,...j},N)=>e.jsx(a,{...j,ref:N,className:_("ams-breakout__cell",R(o,d,m,c),i&&`ams-breakout__cell--has-${i}`,t),children:l}));x.displayName="Breakout.Cell";try{Breakout.Cell.displayName="Breakout.Cell",Breakout.Cell.__docgenInfo={description:"",displayName:"Breakout.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},colSpan:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"colSpan",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},colStart:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"colStart",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}},has:{defaultValue:null,description:`The content of this cell.
The Cell containing the Spotlight expands horizontally and vertically to cover the adjacent gaps and margins.
The Cell containing the Image aligns itself to the bottom of the row, in case it is less tall than the text.`,name:"has",required:!1,type:{name:"enum",value:[{value:'"figure"'},{value:'"spotlight"'}]}},rowSpan:{defaultValue:null,description:"The amount of grid rows the cell spans.",name:"rowSpan",required:!1,type:{name:"BreakoutRowNumber | BreakoutRowNumbers"}},rowStart:{defaultValue:null,description:"The index of the grid row the cell starts at.",name:"rowStart",required:!1,type:{name:"BreakoutRowNumber | BreakoutRowNumbers"}}}}}catch{}const y=B.forwardRef(({children:a,className:l,gapVertical:t,paddingBottom:o,paddingTop:d,paddingVertical:i,...m},c)=>e.jsx("div",{...m,ref:c,className:_("ams-breakout",t&&`ams-breakout--gap-vertical--${t}`,T("breakout",o,d,i),l),children:a}));y.displayName="Breakout";const r=Object.assign(y,{Cell:x});try{r.displayName="Breakout",r.__docgenInfo={description:"",displayName:"Breakout",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const q={title:"Components/Layout/Breakout",component:r,decorators:[a=>e.jsx(V,{children:e.jsx(a,{})})]},n={args:{children:[e.jsx(r.Cell,{colSpan:"all",has:"spotlight",rowSpan:{medium:2,narrow:2,wide:1},rowStart:2,children:e.jsx(k,{})}),e.jsx(r.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:1,rowStart:{medium:3,narrow:3,wide:2},children:e.jsx(p,{inverseColor:!0,children:"Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt."})}),e.jsx(r.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:{medium:1,narrow:1,wide:7},has:"figure",rowSpan:2,rowStart:1,children:e.jsx(C,{ratio:"square",children:e.jsx(b,{alt:"",src:"https://picsum.photos/960/960"})})})]}},s={args:{children:[e.jsx(r.Cell,{colSpan:"all",has:"figure",rowSpan:2,rowStart:1,children:e.jsx(C,{ratio:"x-wide",children:e.jsx(b,{alt:"",src:"https://picsum.photos/1600/900"})})}),e.jsx(r.Cell,{colSpan:"all",has:"spotlight",rowSpan:2,rowStart:2,children:e.jsx(k,{})}),e.jsxs(r.Cell,{colSpan:{medium:6,narrow:4,wide:8},colStart:{medium:2,narrow:1,wide:3},rowStart:3,children:[e.jsx(p,{className:"ams-mb--sm",inverseColor:!0,children:"Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt."}),e.jsx(p,{inverseColor:!0,children:"Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging."})]})]}};var h,g,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: [<Breakout.Cell colSpan="all" has="spotlight" rowSpan={{
      medium: 2,
      narrow: 2,
      wide: 1
    }} rowStart={2}>
        <Spotlight />
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
    }} has="figure" rowSpan={2} rowStart={1}>
        <AspectRatio ratio="square">
          <Image alt="" src="https://picsum.photos/960/960" />
        </AspectRatio>
      </Breakout.Cell>]
  }
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var f,S,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: [<Breakout.Cell colSpan="all" has="figure" rowSpan={2} rowStart={1}>
        <AspectRatio ratio="x-wide">
          <Image alt="" src="https://picsum.photos/1600/900" />
        </AspectRatio>
      </Breakout.Cell>, <Breakout.Cell colSpan="all" has="spotlight" rowSpan={2} rowStart={2}>
        <Spotlight />
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
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const z=["Default","VerticalLayout"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:n,VerticalLayout:s,__namedExportsOrder:z,default:q},Symbol.toStringTag,{value:"Module"}));export{L as B,s as V};
