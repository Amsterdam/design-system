import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{H as E,P as F,v as o}from"./index.esm-Cmo-tIJj.js";import{b as g,j as v}from"./exampleContent-PGFPgakh.js";import{c as _}from"./clsx-B-dksMZM.js";import{r as n}from"./index-G8LIXM5I.js";import{u as K}from"./useKeyboardFocus-nadMEUdd.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const z={activeTabId:void 0,tabsId:"",updateTab:()=>{}},I=n.createContext(z),W=n.forwardRef(({children:e,className:s,onClick:t,tab:r,...i},m)=>{const{activeTabId:d,tabsId:c,updateTab:h}=n.useContext(I),b=p=>{t==null||t(p),n.startTransition(()=>{h(r)})};return a.jsxs("button",{...i,"aria-controls":`${c}-panel-${r}`,"aria-selected":d===r,className:_("ams-tabs__button",s),id:`${c}-tab-${r}`,onClick:b,ref:m,role:"tab",tabIndex:d===r?0:-1,children:[a.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:e}),a.jsx("span",{className:"ams-tabs__button-label",children:e})]})});W.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:null,description:"An identifier.",name:"tab",required:!0,type:{name:"string"}}}}}catch{}const S=n.forwardRef(({children:e,className:s,...t},r)=>a.jsx("div",{...t,className:_("ams-tabs__list",s),ref:r,role:"tablist",children:e}));S.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const k=n.forwardRef(({children:e,className:s,tab:t,...r},i)=>{const{activeTabId:m,tabsId:d}=n.useContext(I);return t!==m?null:a.jsx("div",{...r,"aria-labelledby":`${d}-tab-${t}`,className:_("ams-tabs__panel",s),id:`${d}-panel-${t}`,ref:i,role:"tabpanel",tabIndex:0,children:e})});k.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"string"}}}}}catch{}const V=n.forwardRef(({activeTab:e,children:s,className:t,onTabChange:r,...i},m)=>{const d=n.useId(),c=n.useRef(null),[h,b]=n.useState(),p=n.useMemo(()=>{if(!Array.isArray(s))return[];const f=s[0].props.children;return f.props?[f.props.tab]:Array.isArray(f)?f.map(q=>q.props.tab):[]},[s]);n.useEffect(()=>{e?p.includes(e)?b(e):(console.warn(`The active tab "${e}" does not exist. Falling back to the first tab.`),b(p[0])):b(p[0])},[e,p]);const D=x=>{b(x),r==null||r(x)};n.useImperativeHandle(m,()=>c.current);const{keyDown:O}=K(c,{horizontally:!0,rotating:!0});return a.jsx(I.Provider,{value:{activeTabId:h,tabsId:d,updateTab:D},children:a.jsx("div",{...i,className:_("ams-tabs",t),onKeyDown:O,ref:c,children:s})})});V.displayName="Tabs";const l=Object.assign(V,{Button:W,List:S,Panel:k});try{l.displayName="Tabs",l.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The identifier of the initially active tab. Corresponds to its `tab` value.",name:"activeTab",required:!1,type:{name:"string"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((tabId: string) => void)"}}}}}catch{}const j=1e3,M=({children:e})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${j}ms delay…`);let s=performance.now();for(;performance.now()-s<j;);return e},C=[{body:g(),label:"Gegevens"},{body:g(),label:"Aanslagen"},{body:a.jsxs(a.Fragment,{children:["(This tab panel simulates a load time of ",j," milliseconds.)",a.jsx(M,{})]}),label:"Documenten"},{body:g(),label:"Acties"}],G=[a.jsx(l.List,{children:C.map(({label:e})=>a.jsx(l.Button,{tab:e,children:e},e))},"tabsList"),C.map(({body:e,label:s})=>a.jsxs(l.Panel,{tab:s,children:[a.jsx(E,{className:"ams-mb-xs",level:3,children:s}),a.jsx(F,{children:e})]},s))],Y={title:"Components/Containers/Tabs",component:l,args:{children:G},argTypes:{onTabChange:{action:"clicked",description:"Provides the id of the activated tab."}}},u={},T={args:{activeTab:"Acties"}},y={args:{children:[a.jsx(l.List,{children:v.map(e=>a.jsx(l.Button,{tab:e,children:e},e))},"tabsList"),v.map(e=>a.jsx(l.Panel,{tab:e,children:a.jsxs(o,{children:[a.jsxs(o.Caption,{children:["Voorbeeld van een tabel voor ",e==="Weesp"?"stadsgebied":"stadsdeel"," ",e]}),a.jsx(o.Header,{children:a.jsxs(o.Row,{children:[a.jsx(o.HeaderCell,{}),Array.from({length:12},(s,t)=>a.jsx(o.HeaderCell,{children:"Kolom"},t))]})}),a.jsx(o.Body,{children:Array.from({length:3},(s,t)=>a.jsxs(o.Row,{children:[a.jsx(o.HeaderCell,{scope:"row",children:"Rij"}),Array.from({length:12},(r,i)=>a.jsxs(o.Cell,{style:{textAlign:"end"},children:[(t+1)*(i+1),".000"]},i))]},t))})]})},e))]}};var w,P,A;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(A=(P=u.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var L,N,R;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    activeTab: 'Acties'
  }
}`,...(R=(N=T.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var H,B,$;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...($=(B=y.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const J=["Default","WithInitialTab","WithWideContent"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:u,WithInitialTab:T,WithWideContent:y,__namedExportsOrder:J,default:Y},Symbol.toStringTag,{value:"Module"}));export{se as T,T as W,y as a};
