import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./Row-WZXn6pgj.js";import{n as a,t as o}from"./Image-hjmothHb.js";import{i as s,t as c}from"./Column-BvDhA9A_.js";import{n as l,t as u}from"./decorators-BDxIRnQq.js";import{i as d,t as f}from"./types-C0F630hP.js";var p=t({ContainedImage:()=>v,ContainedImageComparison:()=>y,Default:()=>g,LazyLoading:()=>b,ResponsiveImages:()=>_,__namedExportsOrder:()=>x,default:()=>h}),m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{s(),a(),r(),d(),u(),m=n(),h={title:`Components/Media/Image`,component:o,argTypes:{aspectRatio:{control:{labels:{undefined:`none (default)`},type:`select`},options:[void 0,...f]},fit:{control:{labels:{undefined:`default (cover)`},type:`radio`},options:[void 0,`contain`]},src:{description:`The url for the image.`},srcSet:{description:`A set of candidate images.`}},decorators:[l(`vi-medium`)]},g={args:{alt:``,src:`https://picsum.photos/640/360`}},_={args:{alt:``,sizes:`(max-width: 37.5rem) 640px, 50vw`,src:`https://picsum.photos/1280/720`,srcSet:`https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w`}},v={args:{alt:``,fit:`contain`,src:`https://picsum.photos/640/800`}},y={args:{alt:``,src:`https://picsum.photos/640/800`},parameters:{controls:{include:[`aspectRatio`,`src`]}},render:({aspectRatio:e,src:t})=>(0,m.jsxs)(i,{gap:`x-large`,children:[(0,m.jsx)(c,{children:(0,m.jsx)(o,{alt:``,aspectRatio:e,src:t})}),(0,m.jsx)(c,{children:(0,m.jsx)(o,{alt:``,aspectRatio:e,fit:`contain`,src:t})})]})},b={args:{alt:``,loading:`lazy`,src:`https://picsum.photos/2560/1440`}},x=[`Default`,`ResponsiveImages`,`ContainedImage`,`ContainedImageComparison`,`LazyLoading`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    src: 'https://picsum.photos/640/360'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    sizes: '(max-width: 37.5rem) 640px, 50vw',
    src: 'https://picsum.photos/1280/720',
    srcSet: 'https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    fit: 'contain',
    src: 'https://picsum.photos/640/800'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    src: 'https://picsum.photos/640/800'
  },
  parameters: {
    controls: {
      include: ['aspectRatio', 'src']
    }
  },
  render: ({
    aspectRatio,
    src
  }) => <Row gap="x-large">
      <Column>
        <Image alt="" aspectRatio={aspectRatio} src={src} />
      </Column>
      <Column>
        <Image alt="" aspectRatio={aspectRatio} fit="contain" src={src} />
      </Column>
    </Row>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    loading: 'lazy',
    src: 'https://picsum.photos/2560/1440'
  }
}`,...b.parameters?.docs?.source}}}})))()}export{_ as a,b as i,y as n,S as o,p as r,h as s,v as t};