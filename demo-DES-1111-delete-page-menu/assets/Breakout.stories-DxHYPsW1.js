import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{o as V,p as k,P as p,I as C}from"./index.esm-BxNgk_Uq.js";import{c as b}from"./clsx-B-dksMZM.js";import{r as y}from"./index-G8LIXM5I.js";import{a as i,p as N}from"./paddingClasses-C5gheHLv.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const T=(a,o,l,t)=>[...i("ams-breakout__cell--col-span-",a),...i("ams-breakout__cell--col-start-",o),...i("ams-breakout__cell--row-span-",l),...i("ams-breakout__cell--row-start-",t)],_=y.forwardRef(({as:a="div",children:o,className:l,colSpan:t,colStart:d,has:u,rowSpan:m,rowStart:c,...x},j)=>e.jsx(a,{...x,className:b("ams-breakout__cell",T(t,d,m,c),u&&`ams-breakout__cell--has-${u}`,l),ref:j,children:o}));_.displayName="Breakout.Cell";try{Breakout.Cell.displayName="Breakout.Cell",Breakout.Cell.__docgenInfo={description:"",displayName:"Breakout.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},colSpan:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"colSpan",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},colStart:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"colStart",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}},has:{defaultValue:null,description:`The content of this cell.
The Cell containing the Spotlight expands horizontally and vertically to cover the adjacent gaps and margins.
The Cell containing the Image aligns itself to the bottom of the row, in case it is less tall than the text.`,name:"has",required:!1,type:{name:"enum",value:[{value:'"figure"'},{value:'"spotlight"'}]}},rowSpan:{defaultValue:null,description:"The amount of grid rows the cell spans.",name:"rowSpan",required:!1,type:{name:"BreakoutRowNumber | BreakoutRowNumbers"}},rowStart:{defaultValue:null,description:"The index of the grid row the cell starts at.",name:"rowStart",required:!1,type:{name:"BreakoutRowNumber | BreakoutRowNumbers"}}}}}catch{}const B=y.forwardRef(({children:a,className:o,gapVertical:l,paddingBottom:t,paddingTop:d,paddingVertical:u,...m},c)=>e.jsx("div",{...m,className:b("ams-breakout",l&&`ams-breakout--gap-vertical--${l}`,N("breakout",t,d,u),o),ref:c,children:a}));B.displayName="Breakout";const r=Object.assign(B,{Cell:_});try{r.displayName="Breakout",r.__docgenInfo={description:"",displayName:"Breakout",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"div"'},{value:'"section"'},{value:'"aside"'},{value:'"footer"'},{value:'"header"'},{value:'"nav"'}]}},gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const q={title:"Components/Layout/Breakout",component:r,decorators:[a=>e.jsx(V,{children:e.jsx(a,{})})]},n={args:{children:[e.jsx(r.Cell,{colSpan:"all",has:"spotlight",rowSpan:{narrow:2,medium:2,wide:1},rowStart:2,children:e.jsx(k,{color:"green"})},1),e.jsx(r.Cell,{colSpan:{narrow:4,medium:8,wide:6},colStart:1,rowStart:{narrow:3,medium:3,wide:2},children:e.jsx(p,{color:"inverse",children:"Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt."})},2),e.jsx(r.Cell,{colSpan:{narrow:4,medium:8,wide:6},colStart:{narrow:1,medium:1,wide:7},has:"figure",rowSpan:2,rowStart:1,children:e.jsx(C,{alt:"",aspectRatio:"1:1",src:"https://picsum.photos/960/960"})},3)]}},s={args:{children:[e.jsx(r.Cell,{colSpan:"all",has:"spotlight",rowSpan:2,rowStart:2,children:e.jsx(k,{color:"orange"})},1),e.jsx(r.Cell,{colSpan:"all",has:"figure",rowSpan:2,rowStart:1,children:e.jsx(C,{alt:"",src:"https://picsum.photos/1600/900"})},2),e.jsxs(r.Cell,{colSpan:{narrow:4,medium:6,wide:8},colStart:{narrow:1,medium:2,wide:3},rowStart:3,children:[e.jsx(p,{className:"ams-mb-s",color:"inverse",children:"Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt."}),e.jsx(p,{color:"inverse",children:"Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging."})]},3)]}};var g,h,w;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<Breakout.Cell colSpan="all" has="spotlight" key={1} rowSpan={{
      narrow: 2,
      medium: 2,
      wide: 1
    }} rowStart={2}>
        <Spotlight color="green" />
      </Breakout.Cell>, <Breakout.Cell colSpan={{
      narrow: 4,
      medium: 8,
      wide: 6
    }} colStart={1} key={2} rowStart={{
      narrow: 3,
      medium: 3,
      wide: 2
    }}>
        <Paragraph color="inverse">
          Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt.
        </Paragraph>
      </Breakout.Cell>, <Breakout.Cell colSpan={{
      narrow: 4,
      medium: 8,
      wide: 6
    }} colStart={{
      narrow: 1,
      medium: 1,
      wide: 7
    }} has="figure" key={3} rowSpan={2} rowStart={1}>
        <Image alt="" aspectRatio="1:1" src="https://picsum.photos/960/960" />
      </Breakout.Cell>]
  }
}`,...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,v,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: [<Breakout.Cell colSpan="all" has="spotlight" key={1} rowSpan={2} rowStart={2}>
        <Spotlight color="orange" />
      </Breakout.Cell>, <Breakout.Cell colSpan="all" has="figure" key={2} rowSpan={2} rowStart={1}>
        <Image alt="" src="https://picsum.photos/1600/900" />
      </Breakout.Cell>, <Breakout.Cell colSpan={{
      narrow: 4,
      medium: 6,
      wide: 8
    }} colStart={{
      narrow: 1,
      medium: 2,
      wide: 3
    }} key={3} rowStart={3}>
        <Paragraph className="ams-mb-s" color="inverse">
          Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt.
        </Paragraph>
        <Paragraph color="inverse">
          Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.
        </Paragraph>
      </Breakout.Cell>]
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const z=["Default","VerticalLayout"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:n,VerticalLayout:s,__namedExportsOrder:z,default:q},Symbol.toStringTag,{value:"Module"}));export{G as B,s as V};
