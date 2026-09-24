import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./Image-DoxeWq09.js";import{i as a,t as o}from"./Grid-C9pjP0QL.js";import{n as s,t as c}from"./decorators-CiTevVKT.js";import{i as l,t as u}from"./types-C0F630hP.js";var d=t({Default:()=>m,FittedImages:()=>g,LazyLoading:()=>_,ResponsiveImages:()=>h,__namedExportsOrder:()=>v,default:()=>p}),f,p,m,h,g,_,v;function y(){return(y=e((()=>{a(),r(),l(),c(),f=n(),p={title:`Components/Media/Image`,component:i,argTypes:{aspectRatio:{control:{labels:{undefined:`none (default)`},type:`select`},options:[void 0,...u]},fit:{control:{labels:{undefined:`default (cover)`},type:`select`},options:[void 0,`contain`]},src:{description:`The url for the image.`},srcSet:{description:`A set of candidate images.`}},decorators:[s(`vi-medium`)]},m={args:{alt:``,src:`https://picsum.photos/640/360`}},h={args:{alt:``,sizes:`(max-width: 37.5rem) 640px, 50vw`,src:`https://picsum.photos/1280/720`,srcSet:`https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w`}},g={parameters:{docs:{source:{code:`<Grid paddingVertical="x-large">
  <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
    <Image alt="" src="https://picsum.photos/640/800" />
  </Grid.Cell>
  <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
    <Image alt="" fit="contain" src="https://picsum.photos/640/800" />
  </Grid.Cell>
</Grid>`}},layout:`fullscreen`},render:()=>(0,f.jsxs)(o,{paddingVertical:`x-large`,children:[(0,f.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:6},children:(0,f.jsx)(i,{alt:``,src:`https://picsum.photos/640/800`})}),(0,f.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:6},children:(0,f.jsx)(i,{alt:``,fit:`contain`,src:`https://picsum.photos/640/800`})})]})},_={args:{alt:``,loading:`lazy`,src:`https://picsum.photos/2560/1440`}},v=[`Default`,`ResponsiveImages`,`FittedImages`,`LazyLoading`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    src: 'https://picsum.photos/640/360'
  }
}`,...m.parameters?.docs?.source},description:{story:`A source that already matches the shape of its box uses the default cover fit as intended.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    sizes: '(max-width: 37.5rem) 640px, 50vw',
    src: 'https://picsum.photos/1280/720',
    srcSet: 'https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<Grid paddingVertical="x-large">
  <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
    <Image alt="" src="https://picsum.photos/640/800" />
  </Grid.Cell>
  <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
    <Image alt="" fit="contain" src="https://picsum.photos/640/800" />
  </Grid.Cell>
</Grid>\`
      }
    },
    layout: 'fullscreen'
  },
  render: () => <Grid paddingVertical="x-large">
      <Grid.Cell span={{
      narrow: 4,
      medium: 4,
      wide: 6
    }}>
        <Image alt="" src="https://picsum.photos/640/800" />
      </Grid.Cell>
      <Grid.Cell span={{
      narrow: 4,
      medium: 4,
      wide: 6
    }}>
        <Image alt="" fit="contain" src="https://picsum.photos/640/800" />
      </Grid.Cell>
    </Grid>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    loading: 'lazy',
    src: 'https://picsum.photos/2560/1440'
  }
}`,..._.parameters?.docs?.source}}}})))()}export{y as a,h as i,d as n,p as o,_ as r,g as t};