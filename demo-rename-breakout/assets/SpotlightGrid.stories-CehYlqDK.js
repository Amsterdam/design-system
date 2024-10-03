import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as T,u as C,P as c,i as G,I as _}from"./index.esm-CdfKI2Ga.js";import{c as x}from"./clsx-B-dksMZM.js";import{r as y}from"./index-Cs7sjTYM.js";import{a as d,p as R}from"./paddingClasses-C5gheHLv.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const q=(a,l,r,o)=>[...d("ams-spotlight-grid__cell--col-span-",a),...d("ams-spotlight-grid__cell--col-start-",l),...d("ams-spotlight-grid__cell--row-span-",r),...d("ams-spotlight-grid__cell--row-start-",o)],j=y.forwardRef(({as:a="div",children:l,className:r,colSpan:o,colStart:p,has:s,rowSpan:u,rowStart:m,...N},V)=>e.jsx(a,{...N,ref:V,className:x("ams-spotlight-grid__cell",q(o,p,u,m),s&&`ams-spotlight-grid__cell--has-${s}`,r),children:l}));j.displayName="SpotlightGrid.Cell";try{SpotlightGrid.Cell.displayName="SpotlightGrid.Cell",SpotlightGrid.Cell.__docgenInfo={description:"",displayName:"SpotlightGrid.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},colSpan:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"colSpan",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},colStart:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"colStart",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}},has:{defaultValue:null,description:`The content of this cell.
The Cell containing the Spotlight expands horizontally and vertically to cover the adjacent gaps and margins.
The Cell containing the Image aligns itself to the bottom of the row, in case it is less tall than the text.`,name:"has",required:!1,type:{name:"enum",value:[{value:'"figure"'},{value:'"spotlight"'}]}},rowSpan:{defaultValue:null,description:"The amount of grid rows the cell spans.",name:"rowSpan",required:!1,type:{name:"SpotlightGridRowNumber | SpotlightGridRowNumbers"}},rowStart:{defaultValue:null,description:"The index of the grid row the cell starts at.",name:"rowStart",required:!1,type:{name:"SpotlightGridRowNumber | SpotlightGridRowNumbers"}}}}}catch{}const b=y.forwardRef(({children:a,className:l,gapVertical:r,paddingBottom:o,paddingTop:p,paddingVertical:s,...u},m)=>e.jsx("div",{...u,ref:m,className:x("ams-spotlight-grid",r&&`ams-spotlight-grid--gap-vertical--${r}`,R("spotlight-grid",o,p,s),l),children:a}));b.displayName="SpotlightGrid";const t=Object.assign(b,{Cell:j});try{t.displayName="SpotlightGrid",t.__docgenInfo={description:"",displayName:"SpotlightGrid",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const z={title:"Components/Layout/Spotlight Grid",component:t,decorators:[a=>e.jsx(T,{children:e.jsx(a,{})})]},n={args:{children:[e.jsx(t.Cell,{colSpan:"all",has:"spotlight",rowSpan:{medium:2,narrow:2,wide:1},rowStart:2,children:e.jsx(C,{})}),e.jsx(t.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:1,rowStart:{medium:3,narrow:3,wide:2},children:e.jsx(c,{inverseColor:!0,children:"Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt."})}),e.jsx(t.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:{medium:1,narrow:1,wide:7},has:"figure",rowSpan:2,rowStart:1,children:e.jsx(G,{ratio:"square",children:e.jsx(_,{alt:"",src:"https://picsum.photos/960/960"})})})]}},i={args:{children:[e.jsx(t.Cell,{colSpan:"all",has:"figure",rowSpan:2,rowStart:1,children:e.jsx(G,{ratio:"x-wide",children:e.jsx(_,{alt:"",src:"https://picsum.photos/1600/900"})})}),e.jsx(t.Cell,{colSpan:"all",has:"spotlight",rowSpan:2,rowStart:2,children:e.jsx(C,{})}),e.jsxs(t.Cell,{colSpan:{medium:6,narrow:4,wide:8},colStart:{medium:2,narrow:1,wide:3},rowStart:3,children:[e.jsx(c,{className:"ams-mb--sm",inverseColor:!0,children:"Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt."}),e.jsx(c,{inverseColor:!0,children:"Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging."})]})]}};var g,h,S;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<SpotlightGrid.Cell colSpan="all" has="spotlight" rowSpan={{
      medium: 2,
      narrow: 2,
      wide: 1
    }} rowStart={2}>
        <Spotlight />
      </SpotlightGrid.Cell>, <SpotlightGrid.Cell colSpan={{
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
      </SpotlightGrid.Cell>, <SpotlightGrid.Cell colSpan={{
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
      </SpotlightGrid.Cell>]
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var w,f,v;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: [<SpotlightGrid.Cell colSpan="all" has="figure" rowSpan={2} rowStart={1}>
        <AspectRatio ratio="x-wide">
          <Image alt="" src="https://picsum.photos/1600/900" />
        </AspectRatio>
      </SpotlightGrid.Cell>, <SpotlightGrid.Cell colSpan="all" has="spotlight" rowSpan={2} rowStart={2}>
        <Spotlight />
      </SpotlightGrid.Cell>, <SpotlightGrid.Cell colSpan={{
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
      </SpotlightGrid.Cell>]
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const P=["Default","VerticalLayout"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:n,VerticalLayout:i,__namedExportsOrder:P,default:z},Symbol.toStringTag,{value:"Module"}));export{D as S,i as V};
