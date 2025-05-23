import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{H as F,P as E,x as i}from"./index.esm-CVTrIGU_.js";import{b as _,k as w}from"./exampleContent-r-zRGsZY.js";import{c as x}from"./clsx-B-dksMZM.js";import{r}from"./index-G8LIXM5I.js";import{u as z}from"./useKeyboardFocus-BsBpr6qG.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const M={activeTabId:void 0,updateTab:()=>{}},P=r.createContext(M),O=r.forwardRef(({"aria-controls":e,children:s,className:t,onClick:n,...o},d)=>{const{activeTabId:f,updateTab:c}=r.useContext(P),b=h=>{n==null||n(h),!h.defaultPrevented&&r.startTransition(()=>{c(e)})};return a.jsxs("button",{...o,"aria-controls":e,"aria-selected":f===e,className:x("ams-tabs__button",t),id:`button-${e}`,onClick:b,ref:d,role:"tab",tabIndex:f===e?0:-1,type:"button",children:[a.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:s}),a.jsx("span",{className:"ams-tabs__button-label",children:s})]})});O.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{"aria-controls":{defaultValue:null,description:`The identifier of the corresponding tab panel.
Identifies the element (or elements) whose contents or presence are controlled by the current element.
@see aria-owns.`,name:"aria-controls",required:!1,type:{name:"string"}}}}}catch{}const $=r.forwardRef(({children:e,className:s,...t},n)=>{const o=r.useRef(null);r.useImperativeHandle(n,()=>o.current);const{keyDown:d}=z(o,{focusableElements:[".ams-tabs__button:not([disabled])"],horizontally:!0,rotating:!0});return a.jsx("div",{...t,className:x("ams-tabs__list",s),onKeyDown:d,ref:o,role:"tablist",children:e})});$.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const q=r.forwardRef(({children:e,className:s,id:t,...n},o)=>{const{activeTabId:d}=r.useContext(P);return t!==d?null:a.jsx("div",{...n,"aria-labelledby":`button-${t}`,className:x("ams-tabs__panel",s),id:t,ref:o,role:"tabpanel",tabIndex:0,children:e})});q.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{id:{defaultValue:null,description:"The identifier of the Tab Panel.",name:"id",required:!1,type:{name:"string"}}}}}catch{}const K=r.forwardRef(({activeTab:e,children:s,className:t,onTabChange:n,...o},d)=>{const[f,c]=r.useState(),b=r.useMemo(()=>{if(!Array.isArray(s))return[];const y=s[0].props.children;return y.props?[y.props["aria-controls"]]:Array.isArray(y)?y.map(Y=>Y.props["aria-controls"]):[]},[]);r.useEffect(()=>{e?b.includes(e)?c(e):(console.warn(`The active tab "${e}" does not exist. Falling back to the first tab.`),c(b[0])):c(b[0])},[e,b]);const h=g=>{c(g),n==null||n(g)};return a.jsx(P.Provider,{value:{activeTabId:f,updateTab:h},children:a.jsx("div",{...o,className:x("ams-tabs",t),ref:d,children:s})})});K.displayName="Tabs";const l=Object.assign(K,{Button:O,List:$,Panel:q});try{l.displayName="Tabs",l.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The identifier of the initially active Tab. Corresponds to its Panel `id` value.",name:"activeTab",required:!1,type:{name:"string"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((panelId: string) => void)"}}}}}catch{}const v=1e3,G=({children:e})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${v}ms delay…`);let s=performance.now();for(;performance.now()-s<v;);return e},j=[{body:_(),label:"Gegevens"},{body:_(),label:"Aanslagen"},{body:a.jsxs(a.Fragment,{children:["(This tab panel simulates a load time of ",v," milliseconds.)",a.jsx(G,{})]}),label:"Documenten"},{body:_(),label:"Acties"}],J=[a.jsx(l.List,{children:j.map(({label:e})=>a.jsx(l.Button,{"aria-controls":e,children:e},e))},"tabsList"),j.map(({body:e,label:s})=>a.jsxs(l.Panel,{id:s,children:[a.jsx(F,{className:"ams-mb-xs",level:3,children:s}),a.jsx(E,{children:e})]},s))],Q={title:"Components/Containers/Tabs",component:l,args:{children:J},argTypes:{onTabChange:{action:"clicked",description:"Provides the id of the activated tab."}}},m={},p={args:{activeTab:"Acties"}},u={args:{children:[a.jsx(l.List,{children:w.map(e=>a.jsx(l.Button,{"aria-controls":e,children:e},e))},"tabsList"),w.map(e=>a.jsx(l.Panel,{id:e,children:a.jsxs(i,{children:[a.jsxs(i.Caption,{children:["Voorbeeld van een tabel voor ",e==="Weesp"?"stadsgebied":"stadsdeel"," ",e]}),a.jsx(i.Header,{children:a.jsxs(i.Row,{children:[a.jsx(i.HeaderCell,{}),Array.from({length:12},(s,t)=>a.jsx(i.HeaderCell,{children:"Kolom"},t))]})}),a.jsx(i.Body,{children:Array.from({length:3},(s,t)=>a.jsxs(i.Row,{children:[a.jsx(i.HeaderCell,{scope:"row",children:"Rij"}),Array.from({length:12},(n,o)=>a.jsxs(i.Cell,{style:{textAlign:"end"},children:[(t+1)*(o+1),".000"]},o))]},t))})]})},e))]}},L=j.filter(({label:e})=>e!=="Documenten"),T={args:{children:[a.jsx(l.List,{children:L.map(({label:e})=>a.jsx(l.Button,{"aria-controls":e,onClick:s=>{window.confirm("You have unsaved changes. Do you want to leave?")||s.preventDefault()},children:e},e))},"tabsList"),L.map(({body:e,label:s})=>a.jsxs(l.Panel,{id:s,children:[a.jsx(F,{className:"ams-mb-xs",level:3,children:s}),a.jsx(E,{children:e})]},s))]}};var C,I,N;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(N=(I=m.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var A,B,H;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    activeTab: 'Acties'
  }
}`,...(H=(B=p.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var R,k,S;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(S=(k=u.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var W,D,V;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(D=T.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const U=["Default","WithInitialTab","WithWideContent","PreventTabsFromChanging"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:m,PreventTabsFromChanging:T,WithInitialTab:p,WithWideContent:u,__namedExportsOrder:U,default:Q},Symbol.toStringTag,{value:"Module"}));export{T as P,re as T,p as W,u as a};
