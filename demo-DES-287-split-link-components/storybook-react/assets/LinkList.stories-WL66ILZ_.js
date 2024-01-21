import{n as e,j as n,o as y,p as _,q as O}from"./index.esm-uEY-W2Hk.js";import{c as v}from"./exampleContent-GJvLNqvD.js";const{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,z=v(),A={title:"Navigation/Link List",component:e,args:{children:"Default children"},argTypes:{children:{table:{disable:!0}}}},r={render:function(){const[s]=b();return n.jsx(e,{...s,children:z.map((o,c)=>n.jsx(e.Link,{href:"#",size:s.size,children:o},c))})}},i={args:{children:[n.jsx(e.Link,{href:"#",size:"small",children:"Over deze website"},"about"),n.jsx(e.Link,{href:"#",size:"small",children:"Abonneer u op de nieuwsbrief"},"newsletter"),n.jsx(e.Link,{href:"#",size:"small",children:"Werken bij de gemeente Amsterdam"},"jobs")]}},t={args:{children:[n.jsx(e.Link,{href:"#",icon:y,children:"Contactformulier"},"form"),n.jsx(e.Link,{href:"#",icon:_,children:"Adressen en openingstijden"},"address"),n.jsx(e.Link,{href:"#",icon:O,children:"Bel 14 020"},"phone")]}},a={render:function(){const[s]=b();return n.jsx("div",{style:{background:"#004699",padding:"1rem"},children:n.jsx(e,{...s,children:z.map((o,c)=>n.jsx(e.Link,{href:"#",onBackground:"dark",size:s.size,children:o},c))})})}};var d,L,k;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render() {
    const [args] = useArgs();
    return <LinkList {...args}>
        {links.map((text, index) => <LinkList.Link key={index} href="#" size={args['size']}>
            {text}
          </LinkList.Link>)}
      </LinkList>;
  }
}`,...(k=(L=r.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var l,m,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: [<LinkList.Link key="about" href="#" size="small">
        Over deze website
      </LinkList.Link>, <LinkList.Link key="newsletter" href="#" size="small">
        Abonneer u op de nieuwsbrief
      </LinkList.Link>, <LinkList.Link key="jobs" href="#" size="small">
        Werken bij de gemeente Amsterdam
      </LinkList.Link>]
  }
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,p;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<LinkList.Link key="form" href="#" icon={ChattingIcon}>
        Contactformulier
      </LinkList.Link>, <LinkList.Link key="address" href="#" icon={HousingIcon}>
        Adressen en openingstijden
      </LinkList.Link>, <LinkList.Link key="phone" href="#" icon={PhoneIcon}>
        Bel 14 020
      </LinkList.Link>]
  }
}`,...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var f,x,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: function Render() {
    const [args] = useArgs();
    return <div style={{
      background: '#004699',
      padding: '1rem'
    }}>
        <LinkList {...args}>
          {links.map((text, index) => <LinkList.Link key={index} href="#" onBackground="dark" size={args['size']}>
              {text}
            </LinkList.Link>)}
        </LinkList>
      </div>;
  }
}`,...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const B=["Default","SmallText","CustomIcons","OnDarkBackground"],R=Object.freeze(Object.defineProperty({__proto__:null,CustomIcons:t,Default:r,OnDarkBackground:a,SmallText:i,__namedExportsOrder:B,default:A},Symbol.toStringTag,{value:"Module"}));export{t as C,R as L,a as O,i as S};
