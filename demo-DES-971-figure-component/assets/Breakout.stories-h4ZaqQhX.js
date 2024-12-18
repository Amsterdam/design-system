import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{s as P,t as w,P as m,I as g,u as S}from"./index.esm-CRlu2SWP.js";import{c as j}from"./clsx-B-dksMZM.js";import{r as V}from"./index-RigO-4kf.js";import{a as d,p as R}from"./paddingClasses-C5gheHLv.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const I=(r,o,t,n)=>[...d("ams-breakout__cell--col-span-",r),...d("ams-breakout__cell--col-start-",o),...d("ams-breakout__cell--row-span-",t),...d("ams-breakout__cell--row-start-",n)],N=V.forwardRef(({as:r="div",children:o,className:t,colSpan:n,colStart:c,has:u,rowSpan:p,rowStart:h,...z},q)=>e.jsx(r,{...z,ref:q,className:j("ams-breakout__cell",I(n,c,p,h),u&&`ams-breakout__cell--has-${u}`,t),children:o}));N.displayName="Breakout.Cell";try{Breakout.Cell.displayName="Breakout.Cell",Breakout.Cell.__docgenInfo={description:"",displayName:"Breakout.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},colSpan:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"colSpan",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},colStart:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"colStart",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}},has:{defaultValue:null,description:`The content of this cell.
The Cell containing the Spotlight expands horizontally and vertically to cover the adjacent gaps and margins.
The Cell containing the Image aligns itself to the bottom of the row, in case it is less tall than the text.`,name:"has",required:!1,type:{name:"enum",value:[{value:'"figure"'},{value:'"spotlight"'}]}},rowSpan:{defaultValue:null,description:"The amount of grid rows the cell spans.",name:"rowSpan",required:!1,type:{name:"BreakoutRowNumber | BreakoutRowNumbers"}},rowStart:{defaultValue:null,description:"The index of the grid row the cell starts at.",name:"rowStart",required:!1,type:{name:"BreakoutRowNumber | BreakoutRowNumbers"}}}}}catch{}const T=V.forwardRef(({children:r,className:o,gapVertical:t,paddingBottom:n,paddingTop:c,paddingVertical:u,...p},h)=>e.jsx("div",{...p,ref:h,className:j("ams-breakout",t&&`ams-breakout--gap-vertical--${t}`,R("breakout",n,c,u),o),children:r}));T.displayName="Breakout";const a=Object.assign(T,{Cell:N});try{a.displayName="Breakout",a.__docgenInfo={description:"",displayName:"Breakout",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"div"'},{value:'"section"'},{value:'"aside"'},{value:'"footer"'},{value:'"header"'},{value:'"nav"'}]}},gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const F={title:"Components/Layout/Breakout",component:a,decorators:[r=>e.jsx(P,{children:e.jsx(r,{})})]},l={args:{children:[e.jsx(a.Cell,{colSpan:"all",has:"spotlight",rowSpan:{medium:2,narrow:2,wide:1},rowStart:2,children:e.jsx(w,{})},1),e.jsx(a.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:1,rowStart:{medium:3,narrow:3,wide:2},children:e.jsx(m,{inverseColor:!0,children:"Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt."})},2),e.jsx(a.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:{medium:1,narrow:1,wide:7},has:"figure",rowSpan:2,rowStart:1,children:e.jsx(g,{alt:"",aspectRatio:"square",src:"https://picsum.photos/960/960"})},3)]}},s={args:{children:[e.jsx(a.Cell,{colSpan:"all",has:"spotlight",rowSpan:{medium:2,narrow:2,wide:1},rowStart:2,children:e.jsx(w,{})}),e.jsx(a.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:1,rowStart:{medium:3,narrow:3,wide:2},children:e.jsx(m,{inverseColor:!0,children:"Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt."})}),e.jsx(a.Cell,{colSpan:{medium:8,narrow:4,wide:6},colStart:{medium:1,narrow:1,wide:7},has:"figure",rowSpan:2,rowStart:1,children:e.jsxs(S,{children:[e.jsx(g,{alt:"",src:"https://picsum.photos/960/540"}),e.jsx(S.Caption,{inverseColor:!0,children:"Metrostation Zuid in 2022. Foto: Gemeente Amsterdam."})]})})]}},i={args:{children:[e.jsx(a.Cell,{colSpan:"all",has:"spotlight",rowSpan:2,rowStart:2,children:e.jsx(w,{})},1),e.jsx(a.Cell,{colSpan:"all",has:"figure",rowSpan:2,rowStart:1,children:e.jsx(g,{alt:"",src:"https://picsum.photos/1600/900"})},2),e.jsxs(a.Cell,{colSpan:{medium:6,narrow:4,wide:8},colStart:{medium:2,narrow:1,wide:3},rowStart:3,children:[e.jsx(m,{className:"ams-mb--sm",inverseColor:!0,children:"Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt."}),e.jsx(m,{inverseColor:!0,children:"Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging."})]},3)]}};var v,f,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: [<Breakout.Cell colSpan="all" has="spotlight" key={1} rowSpan={{
      medium: 2,
      narrow: 2,
      wide: 1
    }} rowStart={2}>
        <Spotlight />
      </Breakout.Cell>, <Breakout.Cell colSpan={{
      medium: 8,
      narrow: 4,
      wide: 6
    }} colStart={1} key={2} rowStart={{
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
    }} has="figure" key={3} rowSpan={2} rowStart={1}>
        <Image alt="" aspectRatio="square" src="https://picsum.photos/960/960" />
      </Breakout.Cell>]
  }
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var k,B,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
        <Figure>
          <Image alt="" src="https://picsum.photos/960/540" />
          <Figure.Caption inverseColor>Metrostation Zuid in 2022. Foto: Gemeente Amsterdam.</Figure.Caption>
        </Figure>
      </Breakout.Cell>]
  }
}`,...(b=(B=s.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var x,y,_;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: [<Breakout.Cell colSpan="all" has="spotlight" key={1} rowSpan={2} rowStart={2}>
        <Spotlight />
      </Breakout.Cell>, <Breakout.Cell colSpan="all" has="figure" key={2} rowSpan={2} rowStart={1}>
        <Image alt="" src="https://picsum.photos/1600/900" />
      </Breakout.Cell>, <Breakout.Cell colSpan={{
      medium: 6,
      narrow: 4,
      wide: 8
    }} colStart={{
      medium: 2,
      narrow: 1,
      wide: 3
    }} key={3} rowStart={3}>
        <Paragraph className="ams-mb--sm" inverseColor>
          Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt.
        </Paragraph>
        <Paragraph inverseColor>
          Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.
        </Paragraph>
      </Breakout.Cell>]
  }
}`,...(_=(y=i.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const G=["Default","WithCaption","VerticalLayout"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:l,VerticalLayout:i,WithCaption:s,__namedExportsOrder:G,default:F},Symbol.toStringTag,{value:"Module"}));export{D as B,i as V,s as W};
