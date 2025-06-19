import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{o as T,p as k,P as p,I as y}from"./index.esm-DA0FaD8X.js";import{g as V}from"./common-DYX7ZGrz.js";import{c as C}from"./clsx-B-dksMZM.js";import{r as b}from"./index-G8LIXM5I.js";import{a as i,p as N}from"./paddingClasses-BhwbQ8nP.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const q=(a,t,l,o)=>[...i("ams-breakout__cell--col-span-",a),...i("ams-breakout__cell--col-start-",t),...i("ams-breakout__cell--row-span-",l),...i("ams-breakout__cell--row-start-",o)],x=b.forwardRef(({as:a="div",children:t,className:l,colSpan:o,colStart:d,has:u,rowSpan:c,rowStart:m,...B},j)=>e.jsx(a,{...B,className:C("ams-breakout__cell",q(o,d,c,m),u&&`ams-breakout__cell--has-${u}`,l),ref:j,children:t}));x.displayName="Breakout.Cell";try{Breakout.Cell.displayName="Breakout.Cell",Breakout.Cell.__docgenInfo={description:"",displayName:"Breakout.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},colSpan:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"colSpan",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},colStart:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"colStart",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}},has:{defaultValue:null,description:`The content of this cell.
The Cell containing the Spotlight expands horizontally and vertically to cover the adjacent gaps and margins.
The Cell containing the Image aligns itself to the bottom of the row, in case it is less tall than the text.`,name:"has",required:!1,type:{name:"enum",value:[{value:'"figure"'},{value:'"spotlight"'}]}},rowSpan:{defaultValue:null,description:"The amount of grid rows the cell spans.",name:"rowSpan",required:!1,type:{name:"BreakoutRowNumber | BreakoutRowNumbers"}},rowStart:{defaultValue:null,description:"The index of the grid row the cell starts at.",name:"rowStart",required:!1,type:{name:"BreakoutRowNumber | BreakoutRowNumbers"}}}}}catch{}const _=b.forwardRef(({children:a,className:t,gapVertical:l,paddingBottom:o,paddingTop:d,paddingVertical:u,...c},m)=>e.jsx("div",{...c,className:C("ams-breakout",l&&`ams-breakout--gap-vertical--${l}`,N("breakout",o,d,u),t),ref:m,children:a}));_.displayName="Breakout";const r=Object.assign(_,{Cell:x});try{r.displayName="Breakout",r.__docgenInfo={description:"",displayName:"Breakout",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"div"'},{value:'"section"'},{value:'"aside"'},{value:'"footer"'},{value:'"header"'},{value:'"nav"'}]}},gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"large"'},{value:'"2x-large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"x-large"'},{value:'"2x-large"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"x-large"'},{value:'"2x-large"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"x-large"'},{value:'"2x-large"'}]}}}}}catch{}const P={title:"Components/Layout/Breakout",component:r,argTypes:V,decorators:[a=>e.jsx(T,{children:e.jsx(a,{})})]},n={args:{children:[e.jsx(r.Cell,{colSpan:"all",has:"spotlight",rowSpan:{narrow:2,medium:2,wide:1},rowStart:2,children:e.jsx(k,{color:"green"})},1),e.jsx(r.Cell,{colSpan:{narrow:4,medium:8,wide:6},colStart:1,rowStart:{narrow:3,medium:3,wide:2},children:e.jsx(p,{color:"inverse",children:"Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt."})},2),e.jsx(r.Cell,{colSpan:{narrow:4,medium:8,wide:6},colStart:{narrow:1,medium:1,wide:7},has:"figure",rowSpan:2,rowStart:1,children:e.jsx(y,{alt:"",aspectRatio:"1:1",src:"https://picsum.photos/960/960"})},3)]}},s={args:{children:[e.jsx(r.Cell,{colSpan:"all",has:"spotlight",rowSpan:2,rowStart:2,children:e.jsx(k,{color:"orange"})},1),e.jsx(r.Cell,{colSpan:"all",has:"figure",rowSpan:2,rowStart:1,children:e.jsx(y,{alt:"",src:"https://picsum.photos/1600/900"})},2),e.jsxs(r.Cell,{colSpan:{narrow:4,medium:5,wide:7},colStart:{narrow:1,medium:2,wide:3},rowStart:3,children:[e.jsx(p,{className:"ams-mb-s",children:"Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt."}),e.jsx(p,{children:"Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging."})]},3)]}};var g,h,w;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      medium: 5,
      wide: 7
    }} colStart={{
      narrow: 1,
      medium: 2,
      wide: 3
    }} key={3} rowStart={3}>
        <Paragraph className="ams-mb-s">
          Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt.
        </Paragraph>
        <Paragraph>
          Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.
        </Paragraph>
      </Breakout.Cell>]
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const z=["Default","VerticalLayout"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:n,VerticalLayout:s,__namedExportsOrder:z,default:P},Symbol.toStringTag,{value:"Module"}));export{H as B,s as V};
