import{a as e,n as t,r as n}from"./chunk-DnJy8xQt.js";import{En as r,Ut as i}from"./iframe-D3edup6J.js";import{t as a,ut as o}from"./src-DOxSZ8gh.js";var s=n({Default:()=>d,Range:()=>f,WithLinks:()=>p,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m,h=t((()=>{a(),c=e(r()),l=i(),u={title:`Components/Forms/Calendar`,component:o,args:{}},d={args:{mode:`single`,onChange:()=>{},value:null},render:function(){let[e,t]=(0,c.useState)(null);return(0,l.jsx)(o,{mode:`single`,onChange:t,value:e})}},f={args:{mode:`range`,onChange:()=>{},value:{start:null,end:null}},render:function(){let[e,t]=(0,c.useState)({start:null,end:null});return(0,l.jsx)(o,{mode:`range`,onChange:t,value:e})}},p={args:{linkTemplate:e=>`?date=${e.toISOString().slice(0,10)}`,mode:`link`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    onChange: () => {},
    value: null
  },
  render: function SingleCalendar() {
    const [value, setValue] = useState<Date | null>(null);
    return <Calendar mode="single" onChange={setValue} value={value} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'range',
    onChange: () => {},
    value: {
      start: null,
      end: null
    }
  },
  render: function RangeCalendar() {
    const [value, setValue] = useState<DateRange>({
      start: null,
      end: null
    });
    return <Calendar mode="range" onChange={setValue} value={value} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    linkTemplate: date => \`?date=\${date.toISOString().slice(0, 10)}\`,
    mode: 'link'
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Range`,`WithLinks`]}));h();export{d as Default,f as Range,p as WithLinks,m as __namedExportsOrder,u as default,h as n,s as t};