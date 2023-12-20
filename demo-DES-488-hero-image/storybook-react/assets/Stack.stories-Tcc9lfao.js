import{s as p,j as e,I as c,G as r,q as n}from"./index.esm-RB7TyrnC.js";const l={title:"Layout/Stack",component:p},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(c,{cover:!0,sizes:"(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px",src:"https://picsum.photos/640/180",srcSet:"https://picsum.photos/640/180 640w, https://picsum.photos/1280/360 1280w, https://picsum.photos/1600/450 1600w"}),e.jsx(r,{style:{alignSelf:"center"},children:e.jsx(r.Cell,{span:{narrow:4,medium:6,wide:8},start:{narrow:1,medium:2,wide:3},children:e.jsxs(n,{onSubmit:i=>i.preventDefault(),children:[e.jsx(n.Input,{label:"Zoeken",placeholder:"Wat kunnen we voor u vinden?"}),e.jsx(n.Button,{})]})})})]})}};var s,o,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: <>
        <Image cover sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px" src="https://picsum.photos/640/180" srcSet="https://picsum.photos/640/180 640w, https://picsum.photos/1280/360 1280w, https://picsum.photos/1600/450 1600w" />
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const d=["Default"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:d,default:l},Symbol.toStringTag,{value:"Module"}));export{u as S};
