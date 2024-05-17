import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{c as d}from"./clsx-B-dksMZM.js";import{r as u}from"./index-BwDkhjyp.js";import{S as o}from"./SearchField-UrX6RHMf.js";import{A as h}from"./AspectRatio-BSLcRZBt.js";import{I as x}from"./Image-dXyGEKw_.js";import{G as s}from"./Grid-qe23dp1l.js";const a=u.forwardRef(({children:t,className:l,...c},m)=>e.jsx("div",{...c,ref:m,className:d("ams-overlap",l),children:t}));a.displayName="Overlap";try{a.displayName="Overlap",a.__docgenInfo={description:"",displayName:"Overlap",props:{}}}catch{}const w={title:"Components/Layout/Overlap",component:a},r={args:{children:[e.jsx(h,{ratio:"2x-wide",children:e.jsx(x,{alt:"",cover:!0,sizes:"(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px",srcSet:"https://picsum.photos/640/180 640w, https://picsum.photos/1280/360 1280w, https://picsum.photos/1600/450 1600w"})},"background-image"),e.jsx(s,{style:{alignSelf:"center"},children:e.jsx(s.Cell,{span:{narrow:4,medium:6,wide:8},start:{narrow:1,medium:2,wide:3},children:e.jsxs(o,{onSubmit:t=>t.preventDefault(),children:[e.jsx(o.Input,{label:"Zoeken",placeholder:"Wat kunnen we voor u vinden?"}),e.jsx(o.Button,{})]})})},"search-field")]}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: [<AspectRatio key="background-image" ratio="2x-wide">
        <Image alt="" cover sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px" srcSet="https://picsum.photos/640/180 640w, https://picsum.photos/1280/360 1280w, https://picsum.photos/1600/450 1600w" />
      </AspectRatio>, <Grid key="search-field" style={{
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const f=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:f,default:w},Symbol.toStringTag,{value:"Module"}));export{b as O};
