import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{H as E,P as O,v as l}from"./index.esm-C27aQrbk.js";import{b as g,j as v}from"./exampleContent-PGFPgakh.js";import{c as _}from"./clsx-B-dksMZM.js";import{r as n}from"./index-G8LIXM5I.js";import{u as q}from"./useKeyboardFocus-BsBpr6qG.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const F={activeTabId:void 0,tabsId:"",updateTab:()=>{}},I=n.createContext(F),W=n.forwardRef(({children:e,className:t,onClick:s,tab:r,...o},d)=>{const{activeTabId:c,tabsId:y,updateTab:b}=n.useContext(I),p=h=>{s==null||s(h),n.startTransition(()=>{b(r)})};return a.jsxs("button",{...o,"aria-controls":`${y}-panel-${r}`,"aria-selected":c===r,className:_("ams-tabs__button",t),id:`${y}-tab-${r}`,onClick:p,ref:d,role:"tab",tabIndex:c===r?0:-1,type:"button",children:[a.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:e}),a.jsx("span",{className:"ams-tabs__button-label",children:e})]})});W.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:null,description:"An identifier.",name:"tab",required:!0,type:{name:"string"}}}}}catch{}const S=n.forwardRef(({children:e,className:t,...s},r)=>{const o=n.useRef(null);n.useImperativeHandle(r,()=>o.current);const{keyDown:d}=q(o,{focusableElements:['button[role="tab"]'],horizontally:!0,rotating:!0});return a.jsx("div",{...s,className:_("ams-tabs__list",t),onKeyDown:d,ref:o,role:"tablist",children:e})});S.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const k=n.forwardRef(({children:e,className:t,tab:s,...r},o)=>{const{activeTabId:d,tabsId:c}=n.useContext(I);return s!==d?null:a.jsx("div",{...r,"aria-labelledby":`${c}-tab-${s}`,className:_("ams-tabs__panel",t),id:`${c}-panel-${s}`,ref:o,role:"tabpanel",tabIndex:0,children:e})});k.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"string"}}}}}catch{}const V=n.forwardRef(({activeTab:e,children:t,className:s,onTabChange:r,...o},d)=>{const c=n.useId(),[y,b]=n.useState(),p=n.useMemo(()=>{if(!Array.isArray(t))return[];const f=t[0].props.children;return f.props?[f.props.tab]:Array.isArray(f)?f.map(D=>D.props.tab):[]},[t]);n.useEffect(()=>{e?p.includes(e)?b(e):(console.warn(`The active tab "${e}" does not exist. Falling back to the first tab.`),b(p[0])):b(p[0])},[e,p]);const h=x=>{b(x),r==null||r(x)};return a.jsx(I.Provider,{value:{activeTabId:y,tabsId:c,updateTab:h},children:a.jsx("div",{...o,className:_("ams-tabs",s),ref:d,children:t})})});V.displayName="Tabs";const i=Object.assign(V,{Button:W,List:S,Panel:k});try{i.displayName="Tabs",i.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The identifier of the initially active tab. Corresponds to its `tab` value.",name:"activeTab",required:!1,type:{name:"string"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((tabId: string) => void)"}}}}}catch{}const j=1e3,K=({children:e})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${j}ms delay…`);let t=performance.now();for(;performance.now()-t<j;);return e},C=[{body:g(),label:"Gegevens"},{body:g(),label:"Aanslagen"},{body:a.jsxs(a.Fragment,{children:["(This tab panel simulates a load time of ",j," milliseconds.)",a.jsx(K,{})]}),label:"Documenten"},{body:g(),label:"Acties"}],z=[a.jsx(i.List,{children:C.map(({label:e})=>a.jsx(i.Button,{tab:e,children:e},e))},"tabsList"),C.map(({body:e,label:t})=>a.jsxs(i.Panel,{tab:t,children:[a.jsx(E,{className:"ams-mb-xs",level:3,children:t}),a.jsx(O,{children:e})]},t))],M={title:"Components/Containers/Tabs",component:i,args:{children:z},argTypes:{onTabChange:{action:"clicked",description:"Provides the id of the activated tab."}}},m={},u={args:{activeTab:"Acties"}},T={args:{children:[a.jsx(i.List,{children:v.map(e=>a.jsx(i.Button,{tab:e,children:e},e))},"tabsList"),v.map(e=>a.jsx(i.Panel,{tab:e,children:a.jsxs(l,{children:[a.jsxs(l.Caption,{children:["Voorbeeld van een tabel voor ",e==="Weesp"?"stadsgebied":"stadsdeel"," ",e]}),a.jsx(l.Header,{children:a.jsxs(l.Row,{children:[a.jsx(l.HeaderCell,{}),Array.from({length:12},(t,s)=>a.jsx(l.HeaderCell,{children:"Kolom"},s))]})}),a.jsx(l.Body,{children:Array.from({length:3},(t,s)=>a.jsxs(l.Row,{children:[a.jsx(l.HeaderCell,{scope:"row",children:"Rij"}),Array.from({length:12},(r,o)=>a.jsxs(l.Cell,{style:{textAlign:"end"},children:[(s+1)*(o+1),".000"]},o))]},s))})]})},e))]}};var w,P,A;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(A=(P=m.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var L,N,R;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    activeTab: 'Acties'
  }
}`,...(R=(N=u.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var H,B,$;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: [<Tabs.List key="tabsList">
        {cityParts.map(name => <Tabs.Button key={name} tab={name}>
            {name}
          </Tabs.Button>)}
      </Tabs.List>, cityParts.map(name => <Tabs.Panel key={name} tab={name}>
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
}`,...($=(B=T.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const G=["Default","WithInitialTab","WithWideContent"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:m,WithInitialTab:u,WithWideContent:T,__namedExportsOrder:G,default:M},Symbol.toStringTag,{value:"Module"}));export{ee as T,u as W,T as a};
