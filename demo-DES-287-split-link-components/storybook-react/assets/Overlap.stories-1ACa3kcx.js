import{v as p,j as e,b as l,I as c,G as s,w as r}from"./index.esm-XseHZeHf.js";const d={title:"Layout/Overlap",component:p,argTypes:{children:{table:{disable:!0}}}},t={args:{children:[e.jsx(l,{ratio:"2x-wide",children:e.jsx(c,{alt:"",cover:!0,sizes:"(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px",src:"https://picsum.photos/640/180",srcSet:"https://picsum.photos/640/180 640w, https://picsum.photos/1280/360 1280w, https://picsum.photos/1600/450 1600w"})},"background-image"),e.jsx(s,{style:{alignSelf:"center"},children:e.jsx(s.Cell,{span:{narrow:4,medium:6,wide:8},start:{narrow:1,medium:2,wide:3},children:e.jsxs(r,{onSubmit:i=>i.preventDefault(),children:[e.jsx(r.Input,{label:"Zoeken",placeholder:"Wat kunnen we voor u vinden?"}),e.jsx(r.Button,{})]})})},"search-field")]}};var a,n,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: [<AspectRatio key="background-image" ratio="2x-wide">
        <Image alt="" cover sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px" src="https://picsum.photos/640/180" srcSet="https://picsum.photos/640/180 640w, https://picsum.photos/1280/360 1280w, https://picsum.photos/1600/450 1600w" />
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const m=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{h as O};
