import{h,j as e,G as o,S as r}from"./index.esm-V-_vAf44.js";const u={title:"Media/Hero Image",component:h},t={args:{sizes:"(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px",src:"https://picsum.photos/640/180?random=1",srcSet:"https://picsum.photos/640/180?random=1 640w, https://picsum.photos/1280/360?random=1 1280w, https://picsum.photos/1600/450?random=1 1600w"}},s={args:{sizes:"(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px",src:"https://picsum.photos/640/180?random=2",srcSet:"https://picsum.photos/640/180?random=2 640w, https://picsum.photos/1280/360?random=2 1280w, https://picsum.photos/1600/450?random=2 1600w",children:e.jsx(o,{children:e.jsx(o.Cell,{span:{narrow:4,medium:6,wide:6},start:{narrow:1,medium:2,wide:4},children:e.jsxs(r,{onSubmit:c=>{c.preventDefault()},children:[e.jsx(r.Input,{label:"Zoeken",placeholder:"Wat kunnen we voor u vinden?"}),e.jsx(r.Button,{})]})})})}};var n,a,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    sizes: '(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px',
    src: 'https://picsum.photos/640/180?random=1',
    srcSet: 'https://picsum.photos/640/180?random=1 640w, https://picsum.photos/1280/360?random=1 1280w, https://picsum.photos/1600/450?random=1 1600w'
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var m,i,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    sizes: '(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px',
    src: 'https://picsum.photos/640/180?random=2',
    srcSet: 'https://picsum.photos/640/180?random=2 640w, https://picsum.photos/1280/360?random=2 1280w, https://picsum.photos/1600/450?random=2 1600w',
    children: <Grid>
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 6
      }} start={{
        narrow: 1,
        medium: 2,
        wide: 4
      }}>
          <SearchField onSubmit={e => {
          e.preventDefault();
        }}>
            <SearchField.Input label="Zoeken" placeholder="Wat kunnen we voor u vinden?" />
            <SearchField.Button />
          </SearchField>
        </Grid.Cell>
      </Grid>
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const l=["Default","WithSearchField"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithSearchField:s,__namedExportsOrder:l,default:u},Symbol.toStringTag,{value:"Module"}));export{x as H,s as W};
