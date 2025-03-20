import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{H as E,P as F,v as o}from"./index.esm-BR0Ih5oQ.js";import{b as j,j as C}from"./exampleContent-PGFPgakh.js";import{c as h}from"./clsx-B-dksMZM.js";import{r as n}from"./index-C0MU9AHG.js";import{u as K}from"./useKeyboardFocus-nadMEUdd.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const z={activeTabId:void 0,tabsId:"",updateTab:()=>{}},v=n.createContext(z),S=n.forwardRef(({children:e,className:t,onClick:s,tab:r,type:i,...m},d)=>{const{activeTabId:c,tabsId:f,updateTab:b}=n.useContext(v),p=x=>{s==null||s(x),n.startTransition(()=>{b(r)})};return a.jsxs("button",{...m,"aria-controls":`${f}-panel-${r}`,"aria-selected":c===r,className:h("ams-tabs__button",t),id:`${f}-tab-${r}`,onClick:p,ref:d,role:"tab",tabIndex:c===r?0:-1,type:i||"button",children:[a.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:e}),a.jsx("span",{className:"ams-tabs__button-label",children:e})]})});S.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:null,description:"An identifier.",name:"tab",required:!0,type:{name:"string"}}}}}catch{}const k=n.forwardRef(({children:e,className:t,...s},r)=>a.jsx("div",{...s,className:h("ams-tabs__list",t),ref:r,role:"tablist",children:e}));k.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const V=n.forwardRef(({children:e,className:t,tab:s,...r},i)=>{const{activeTabId:m,tabsId:d}=n.useContext(v);return s!==m?null:a.jsx("div",{...r,"aria-labelledby":`${d}-tab-${s}`,className:h("ams-tabs__panel",t),id:`${d}-panel-${s}`,ref:i,role:"tabpanel",tabIndex:0,children:e})});V.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"string"}}}}}catch{}const D=n.forwardRef(({activeTab:e,children:t,className:s,onTabChange:r,...i},m)=>{const d=n.useId(),c=n.useRef(null),[f,b]=n.useState(),p=n.useMemo(()=>{if(!Array.isArray(t))return[];const _=t[0].props.children;return _.props?[_.props.tab]:Array.isArray(_)?_.map(q=>q.props.tab):[]},[t]);n.useEffect(()=>{e?p.includes(e)?b(e):(console.warn(`The active tab "${e}" does not exist. Falling back to the first tab.`),b(p[0])):b(p[0])},[e,p]);const x=g=>{b(g),r==null||r(g)};n.useImperativeHandle(m,()=>c.current);const{keyDown:O}=K(c,{horizontally:!0,rotating:!0});return a.jsx(v.Provider,{value:{activeTabId:f,tabsId:d,updateTab:x},children:a.jsx("div",{...i,className:h("ams-tabs",s),onKeyDown:O,ref:c,children:t})})});D.displayName="Tabs";const l=Object.assign(D,{Button:S,List:k,Panel:V});try{l.displayName="Tabs",l.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The identifier of the initially active tab. Corresponds to its `tab` value.",name:"activeTab",required:!1,type:{name:"string"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((tabId: string) => void)"}}}}}catch{}const I=1e3,M=({children:e})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${I}ms delay…`);let t=performance.now();for(;performance.now()-t<I;);return e},w=[{body:j(),label:"Gegevens"},{body:j(),label:"Aanslagen"},{body:a.jsxs(a.Fragment,{children:["(This tab panel simulates a load time of ",I," milliseconds.)",a.jsx(M,{})]}),label:"Documenten"},{body:j(),label:"Acties"}],G=[a.jsx(l.List,{children:w.map(({label:e})=>a.jsx(l.Button,{tab:e,children:e},e))},"tabsList"),w.map(({body:e,label:t})=>a.jsxs(l.Panel,{tab:t,children:[a.jsx(E,{className:"ams-mb--xs",level:3,children:t}),a.jsx(F,{children:e})]},t))],Y={title:"Components/Containers/Tabs",component:l,args:{children:G},argTypes:{onTabChange:{action:"clicked",description:"Provides the id of the activated tab."}}},u={},T={args:{activeTab:"Acties"}},y={args:{children:[a.jsx(l.List,{children:C.map(e=>a.jsx(l.Button,{tab:e,children:e},e))},"tabsList"),C.map(e=>a.jsx(l.Panel,{tab:e,children:a.jsxs(o,{children:[a.jsxs(o.Caption,{children:["Voorbeeld van een tabel voor ",e==="Weesp"?"stadsgebied":"stadsdeel"," ",e]}),a.jsx(o.Header,{children:a.jsxs(o.Row,{children:[a.jsx(o.HeaderCell,{}),Array.from({length:12},(t,s)=>a.jsx(o.HeaderCell,{children:"Kolom"},s))]})}),a.jsx(o.Body,{children:Array.from({length:3},(t,s)=>a.jsxs(o.Row,{children:[a.jsx(o.HeaderCell,{scope:"row",children:"Rij"}),Array.from({length:12},(r,i)=>a.jsxs(o.Cell,{style:{textAlign:"end"},children:[(s+1)*(i+1),".000"]},i))]},s))})]})},e))]}};var P,A,L;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(L=(A=u.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var N,R,H;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    activeTab: 'Acties'
  }
}`,...(H=(R=T.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var B,$,W;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=($=y.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};const J=["Default","WithInitialTab","WithWideContent"],te=Object.freeze(Object.defineProperty({__proto__:null,Default:u,WithInitialTab:T,WithWideContent:y,__namedExportsOrder:J,default:Y},Symbol.toStringTag,{value:"Module"}));export{te as T,T as W,y as a};
