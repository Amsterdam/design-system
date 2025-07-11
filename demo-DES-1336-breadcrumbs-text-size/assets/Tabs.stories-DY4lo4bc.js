import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{H as L,P as I,x as l}from"./index.esm-BdWpuRjq.js";import{b as _,k as C}from"./exampleContent-r-zRGsZY.js";import{c as g}from"./clsx-B-dksMZM.js";import{r}from"./index-G8LIXM5I.js";import{u as R}from"./useKeyboardFocus-BsBpr6qG.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const S={activeTabId:void 0,updateTab:()=>{}},P=r.createContext(S),N=r.forwardRef(({"aria-controls":e,children:s,className:t,onClick:i,...n},d)=>{const{activeTabId:h,updateTab:c}=r.useContext(P),b=f=>{i?.(f),!f.defaultPrevented&&r.startTransition(()=>{c(e)})};return a.jsxs("button",{...n,"aria-controls":e,"aria-selected":h===e,className:g("ams-tabs__button",t),id:`button-${e}`,onClick:b,ref:d,role:"tab",tabIndex:h===e?0:-1,type:"button",children:[a.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:s}),a.jsx("span",{className:"ams-tabs__button-label",children:s})]})});N.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{"aria-controls":{defaultValue:null,description:`The identifier of the corresponding tab panel.
Identifies the element (or elements) whose contents or presence are controlled by the current element.
@see aria-owns.`,name:"aria-controls",required:!1,type:{name:"string"}}}}}catch{}const A=r.forwardRef(({children:e,className:s,...t},i)=>{const n=r.useRef(null);r.useImperativeHandle(i,()=>n.current);const{keyDown:d}=R(n,{focusableElements:[".ams-tabs__button:not([disabled])"],horizontally:!0,rotating:!0});return a.jsx("div",{...t,className:g("ams-tabs__list",s),onKeyDown:d,ref:n,role:"tablist",children:e})});A.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const k=r.forwardRef(({children:e,className:s,id:t,...i},n)=>{const{activeTabId:d}=r.useContext(P);return t!==d?null:a.jsx("div",{...i,"aria-labelledby":`button-${t}`,className:g("ams-tabs__panel",s),id:t,ref:n,role:"tabpanel",tabIndex:0,children:e})});k.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{id:{defaultValue:null,description:"The identifier of the Tab Panel.",name:"id",required:!1,type:{name:"string"}}}}}catch{}const B=r.forwardRef(({activeTab:e,children:s,className:t,onTabChange:i,...n},d)=>{const[h,c]=r.useState(),b=r.useMemo(()=>{if(!Array.isArray(s))return[];const y=s[0].props.children;return y.props?[y.props["aria-controls"]]:Array.isArray(y)?y.map(H=>H.props["aria-controls"]):[]},[]);r.useEffect(()=>{e?b.includes(e)?c(e):(console.warn(`The active tab "${e}" does not exist. Falling back to the first tab.`),c(b[0])):c(b[0])},[e,b]);const f=x=>{c(x),i?.(x)};return a.jsx(P.Provider,{value:{activeTabId:h,updateTab:f},children:a.jsx("div",{...n,className:g("ams-tabs",t),ref:d,children:s})})});B.displayName="Tabs";const o=Object.assign(B,{Button:N,List:A,Panel:k});try{o.displayName="Tabs",o.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The identifier of the initially active Tab. Corresponds to its Panel `id` value.",name:"activeTab",required:!1,type:{name:"string"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((panelId: string) => void)"}}}}}catch{}const v=1e3,W=({children:e})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${v}ms delay…`);let s=performance.now();for(;performance.now()-s<v;);return e},j=[{body:_(),label:"Gegevens"},{body:_(),label:"Aanslagen"},{body:a.jsxs(a.Fragment,{children:["(This tab panel simulates a load time of ",v," milliseconds.)",a.jsx(W,{})]}),label:"Documenten"},{body:_(),label:"Acties"}],D=[a.jsx(o.List,{children:j.map(({label:e})=>a.jsx(o.Button,{"aria-controls":e,children:e},e))},"tabsList"),j.map(({body:e,label:s})=>a.jsxs(o.Panel,{id:s,children:[a.jsx(L,{className:"ams-mb-xs",level:3,children:s}),a.jsx(I,{children:e})]},s))],V={title:"Components/Containers/Tabs",component:o,args:{children:D},argTypes:{onTabChange:{action:"clicked",description:"Provides the id of the activated tab."}}},m={},p={args:{activeTab:"Acties"}},u={args:{children:[a.jsx(o.List,{children:C.map(e=>a.jsx(o.Button,{"aria-controls":e,children:e},e))},"tabsList"),C.map(e=>a.jsx(o.Panel,{id:e,children:a.jsxs(l,{children:[a.jsxs(l.Caption,{children:["Voorbeeld van een tabel voor ",e==="Weesp"?"stadsgebied":"stadsdeel"," ",e]}),a.jsx(l.Header,{children:a.jsxs(l.Row,{children:[a.jsx(l.HeaderCell,{}),Array.from({length:12},(s,t)=>a.jsx(l.HeaderCell,{children:"Kolom"},t))]})}),a.jsx(l.Body,{children:Array.from({length:3},(s,t)=>a.jsxs(l.Row,{children:[a.jsx(l.HeaderCell,{scope:"row",children:"Rij"}),Array.from({length:12},(i,n)=>a.jsxs(l.Cell,{style:{textAlign:"end"},children:[(t+1)*(n+1),".000"]},n))]},t))})]})},e))]}},w=j.filter(({label:e})=>e!=="Documenten"),T={args:{children:[a.jsx(o.List,{children:w.map(({label:e})=>a.jsx(o.Button,{"aria-controls":e,onClick:s=>{window.confirm("You have unsaved changes. Do you want to leave?")||s.preventDefault()},children:e},e))},"tabsList"),w.map(({body:e,label:s})=>a.jsxs(o.Panel,{id:s,children:[a.jsx(L,{className:"ams-mb-xs",level:3,children:s}),a.jsx(I,{children:e})]},s))]}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    activeTab: 'Acties'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Tabs.List key="tabsList">
        {cityParts.map(name => <Tabs.Button aria-controls={name} key={name}>
            {name}
          </Tabs.Button>)}
      </Tabs.List>, cityParts.map(name => <Tabs.Panel id={name} key={name}>
          <Table>
            <Table.Caption>
              Voorbeeld van een tabel voor {name === 'Weesp' ? 'stadsgebied' : 'stadsdeel'} {name}
            </Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                {Array.from({
              length: 12
            }, (_, index) => <Table.HeaderCell key={index}>Kolom</Table.HeaderCell>)}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Array.from({
            length: 3
          }, (_, rowIndex) => <Table.Row key={rowIndex}>
                  <Table.HeaderCell scope="row">Rij</Table.HeaderCell>
                  {Array.from({
              length: 12
            }, (_, columnIndex) => <Table.Cell key={columnIndex} style={{
              textAlign: 'end'
            }}>
                      {(rowIndex + 1) * (columnIndex + 1)}.000
                    </Table.Cell>)}
                </Table.Row>)}
            </Table.Body>
          </Table>
        </Tabs.Panel>)]
  }
}`,...u.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Tabs.List key="tabsList">
        {tabsContentWithoutSlowPanel.map(({
        label
      }) => <Tabs.Button aria-controls={label} key={label} onClick={e => {
        // eslint-disable-next-line no-alert
        const confirmLeave = window.confirm('You have unsaved changes. Do you want to leave?');
        if (!confirmLeave) {
          e.preventDefault();
        }
      }}>
            {label}
          </Tabs.Button>)}
      </Tabs.List>, tabsContentWithoutSlowPanel.map(({
      body,
      label
    }) => <Tabs.Panel id={label} key={label}>
          <Heading className="ams-mb-xs" level={3}>
            {label}
          </Heading>
          <Paragraph>{body}</Paragraph>
        </Tabs.Panel>)]
  }
}`,...T.parameters?.docs?.source}}};const F=["Default","WithInitialTab","WithWideContent","PreventTabsFromChanging"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:m,PreventTabsFromChanging:T,WithInitialTab:p,WithWideContent:u,__namedExportsOrder:F,default:V},Symbol.toStringTag,{value:"Module"}));export{T as P,z as T,p as W,u as a};
