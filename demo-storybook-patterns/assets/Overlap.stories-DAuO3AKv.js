import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{c as d}from"./clsx-B-dksMZM.js";import{r as u}from"./index-uCp2LrAq.js";import{S as a}from"./SearchField-rJ0k-O2A.js";import{A as h}from"./AspectRatio-DxP_kpbd.js";import{I as x}from"./Image-Bf5zYcta.js";import{G as s}from"./Grid-BRQJwiXa.js";const o=u.forwardRef(({children:t,className:l,...m},c)=>e.jsx("div",{...m,ref:c,className:d("ams-overlap",l),children:t}));o.displayName="Overlap";try{o.displayName="Overlap",o.__docgenInfo={description:"",displayName:"Overlap",props:{}}}catch{}const w={title:"Components/Layout/Overlap",component:o},r={args:{children:[e.jsx(h,{ratio:"2x-wide",children:e.jsx(x,{alt:"",cover:!0,sizes:"(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px",srcSet:"https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w"})},1),e.jsx(s,{style:{alignSelf:"center"},children:e.jsx(s.Cell,{span:{narrow:4,medium:6,wide:8},start:{narrow:1,medium:2,wide:3},children:e.jsxs(a,{onSubmit:t=>t.preventDefault(),children:[e.jsx(a.Input,{label:"Zoeken",placeholder:"Wat kunnen we voor u vinden?"}),e.jsx(a.Button,{})]})})},2)]}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: [<AspectRatio key={1} ratio="2x-wide">
        <Image alt="" cover sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px" srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w" />
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const f=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:f,default:w},Symbol.toStringTag,{value:"Module"}));export{r as D,b as O};
