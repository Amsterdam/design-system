import{s as p,j as e,b as c,I as l,G as n,q as s}from"./index.esm-RB7TyrnC.js";const d={title:"Layout/Stack",component:p},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(c,{ratio:"2x-wide",children:e.jsx(l,{cover:!0,sizes:"(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px",src:"https://picsum.photos/640/180",srcSet:"https://picsum.photos/640/180 640w, https://picsum.photos/1280/360 1280w, https://picsum.photos/1600/450 1600w"})}),e.jsx(n,{style:{alignSelf:"center"},children:e.jsx(n.Cell,{span:{narrow:4,medium:6,wide:8},start:{narrow:1,medium:2,wide:3},children:e.jsxs(s,{onSubmit:i=>i.preventDefault(),children:[e.jsx(s.Input,{label:"Zoeken",placeholder:"Wat kunnen we voor u vinden?"}),e.jsx(s.Button,{})]})})})]})}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: <>
        <AspectRatio ratio="2x-wide">
          <Image cover sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px" src="https://picsum.photos/640/180" srcSet="https://picsum.photos/640/180 640w, https://picsum.photos/1280/360 1280w, https://picsum.photos/1600/450 1600w" />
        </AspectRatio>
        <Grid style={{
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
        </Grid>
      </>
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const m=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{h as S};
