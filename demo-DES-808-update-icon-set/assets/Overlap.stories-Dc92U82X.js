import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{c as d}from"./clsx-B-dksMZM.js";import{r as u}from"./index-uCp2LrAq.js";import{S as o}from"./SearchField-B2VUKHyc.js";import{A as h}from"./AspectRatio-CfnkH-uR.js";import{I as x}from"./Image-Bf5zYcta.js";import{G as a}from"./Grid-BRQJwiXa.js";const s=u.forwardRef(({children:t,className:l,...c},m)=>e.jsx("div",{...c,ref:m,className:d("ams-overlap",l),children:t}));s.displayName="Overlap";try{s.displayName="Overlap",s.__docgenInfo={description:"",displayName:"Overlap",props:{}}}catch{}const w={title:"Components/Layout/Overlap",component:s},r={args:{children:[e.jsx(h,{ratio:"2x-wide",children:e.jsx(x,{alt:"",cover:!0,sizes:"(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px",src:"https://picsum.photos/1600/500",srcSet:"https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w"})},1),e.jsx(a,{style:{alignSelf:"center"},children:e.jsx(a.Cell,{span:{narrow:4,medium:6,wide:8},start:{narrow:1,medium:2,wide:3},children:e.jsxs(o,{onSubmit:t=>t.preventDefault(),children:[e.jsx(o.Input,{label:"Zoeken",placeholder:"Wat kunnen we voor u vinden?"}),e.jsx(o.Button,{})]})})},2)]}};var n,p,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: [<AspectRatio key={1} ratio="2x-wide">
        <Image alt="" cover sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px" src="https://picsum.photos/1600/500" srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w" />
      </AspectRatio>, <Grid key={2} style={{
      alignSelf: 'center'
    }}>
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 8
      }} start={{
        narrow: 1,
        medium: 2,
        wide: 3
      }}>
          <SearchField onSubmit={e => e.preventDefault()}>
            <SearchField.Input label="Zoeken" placeholder="Wat kunnen we voor u vinden?" />
            <SearchField.Button />
          </SearchField>
        </Grid.Cell>
      </Grid>]
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const f=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:f,default:w},Symbol.toStringTag,{value:"Module"}));export{r as D,b as O};
