import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as D}from"./index-G8LIXM5I.js";import{I as k,f as P,g as F,h as H,i as W}from"./index.esm-jhuYF6FN.js";import{backgroundColourOptions as M,backgroundColourOptionsLight as N,backgroundColourOptionsDark as R,getForegroundColor as q}from"./preview-Bnr4lDAn.js";import{a as G}from"./exampleContent-r-zRGsZY.js";import{L as e}from"./LinkList-CY5A71mH.js";const E=G(),J={title:"Components/Navigation/Link List",component:e};e.Link;const p={args:{children:E.map((r,o)=>n.jsx(e.Link,{href:"#",children:r},o))}},d={args:{children:E[0],href:"#",icon:P},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:k,options:[void 0,...Object.keys(k)]},size:{control:{labels:{undefined:"medium"},type:"radio"},options:["small",void 0,"large"]}},decorators:[(r,o)=>(console.log(o),n.jsx(e,{children:n.jsx(r,{})}))],render:({children:r,...o})=>n.jsx(e.Link,{...o,children:r})},s={...p,parameters:{backgrounds:{options:M}},render:(r,{globals:{backgrounds:o}})=>n.jsx(e,{...r,children:Array.isArray(r.children)&&r.children.map((u,_)=>{const B=q(o.value);return D.createElement(e.Link,{...u.props,color:B,key:_},u.props.children)})})},a={...p,args:{children:[n.jsx(e.Link,{href:"#",icon:F,children:"Contactformulier"},"form"),n.jsx(e.Link,{href:"#",icon:H,children:"Adressen en openingstijden"},"address"),n.jsx(e.Link,{href:"#",icon:W,children:"Bel 14 020"},"phone")]}},i={...p,args:{children:[n.jsx(e.Link,{href:"#",size:"small",children:"Over deze website"},"about"),n.jsx(e.Link,{href:"#",size:"small",children:"Abonneer u op de nieuwsbrief"},"newsletter"),n.jsx(e.Link,{href:"#",size:"small",children:"Werken bij de gemeente Amsterdam"},"jobs")]}},t={...d},l={...d,args:{...d.args,color:"contrast"},globals:{backgrounds:{value:"yellow"}},parameters:{backgrounds:{options:{yellow:N.yellow}}}},c={...d,args:{...d.args,color:"inverse"},globals:{backgrounds:{value:"blue"}},parameters:{backgrounds:{options:{blue:R.blue}}}};var m,L,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    backgrounds: {
      options: backgroundColourOptions
    }
  },
  render: (args, {
    globals: {
      backgrounds
    }
  }) => {
    return <LinkList {...args}>
        {Array.isArray(args.children) && args.children.map((link, index) => {
        const color = getForegroundColor(backgrounds.value) as LinkListLinkProps['color'];
        return <LinkList.Link {...link.props} color={color} key={index}>
                {link.props.children}
              </LinkList.Link>;
      })}
      </LinkList>;
  }
}`,...(g=(L=s.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var b,h,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<LinkList.Link href="#" icon={Icons.SpeechBalloonEllipsisIcon} key="form">
        Contactformulier
      </LinkList.Link>, <LinkList.Link href="#" icon={Icons.HouseIcon} key="address">
        Adressen en openingstijden
      </LinkList.Link>, <LinkList.Link href="#" icon={Icons.PhoneIcon} key="phone">
        Bel 14 020
      </LinkList.Link>]
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,S,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<LinkList.Link href="#" key="about" size="small">
        Over deze website
      </LinkList.Link>, <LinkList.Link href="#" key="newsletter" size="small">
        Abonneer u op de nieuwsbrief
      </LinkList.Link>, <LinkList.Link href="#" key="jobs" size="small">
        Werken bij de gemeente Amsterdam
      </LinkList.Link>]
  }
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var j,x,C;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...LinkStoryTemplate
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var T,w,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'contrast'
  },
  globals: {
    backgrounds: {
      value: 'yellow'
    }
  },
  parameters: {
    backgrounds: {
      options: {
        yellow: backgroundColourOptionsLight.yellow
      }
    }
  }
}`,...(I=(w=l.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var O,z,A;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'inverse'
  },
  globals: {
    backgrounds: {
      value: 'blue'
    }
  },
  parameters: {
    backgrounds: {
      options: {
        blue: backgroundColourOptionsDark.blue
      }
    }
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const K=["Default","CustomIcons","SmallText","Link","ContrastColour","InverseColour"],$=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:l,CustomIcons:a,Default:s,InverseColour:c,Link:t,SmallText:i,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{a as C,c as I,$ as L,i as S,t as a,l as b};
