import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{H as E,P as O,x as l}from"./index.esm-B3JAGQAw.js";import{b as x,k as v}from"./exampleContent-r-zRGsZY.js";import{c as f}from"./clsx-B-dksMZM.js";import{r}from"./index-G8LIXM5I.js";import{u as $}from"./useKeyboardFocus-BsBpr6qG.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const q={activeTabId:void 0,updateTab:()=>{}},j=r.createContext(q),W=r.forwardRef(({"aria-controls":e,children:s,className:t,onClick:n,...o},d)=>{const{activeTabId:T,updateTab:c}=r.useContext(j),b=_=>{n==null||n(_),r.startTransition(()=>{c(e)})};return a.jsxs("button",{...o,"aria-controls":e,"aria-selected":T===e,className:f("ams-tabs__button",t),id:`button-${e}`,onClick:b,ref:d,role:"tab",tabIndex:T===e?0:-1,type:"button",children:[a.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:s}),a.jsx("span",{className:"ams-tabs__button-label",children:s})]})});W.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{"aria-controls":{defaultValue:null,description:`The identifier of the corresponding tab panel.
Identifies the element (or elements) whose contents or presence are controlled by the current element.
@see aria-owns.`,name:"aria-controls",required:!1,type:{name:"string"}}}}}catch{}const S=r.forwardRef(({children:e,className:s,...t},n)=>{const o=r.useRef(null);r.useImperativeHandle(n,()=>o.current);const{keyDown:d}=$(o,{focusableElements:[".ams-tabs__button:not([disabled])"],horizontally:!0,rotating:!0});return a.jsx("div",{...t,className:f("ams-tabs__list",s),onKeyDown:d,ref:o,role:"tablist",children:e})});S.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const k=r.forwardRef(({children:e,className:s,id:t,...n},o)=>{const{activeTabId:d}=r.useContext(j);return t!==d?null:a.jsx("div",{...n,"aria-labelledby":`button-${t}`,className:f("ams-tabs__panel",s),id:t,ref:o,role:"tabpanel",tabIndex:0,children:e})});k.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{id:{defaultValue:null,description:"The identifier of the Tab Panel.",name:"id",required:!1,type:{name:"string"}}}}}catch{}const V=r.forwardRef(({activeTab:e,children:s,className:t,onTabChange:n,...o},d)=>{const[T,c]=r.useState(),b=r.useMemo(()=>{if(!Array.isArray(s))return[];const y=s[0].props.children;return y.props?[y.props["aria-controls"]]:Array.isArray(y)?y.map(D=>D.props["aria-controls"]):[]},[s]);r.useEffect(()=>{e?b.includes(e)?c(e):(console.warn(`The active tab "${e}" does not exist. Falling back to the first tab.`),c(b[0])):c(b[0])},[e,b]);const _=h=>{c(h),n==null||n(h)};return a.jsx(j.Provider,{value:{activeTabId:T,updateTab:_},children:a.jsx("div",{...o,className:f("ams-tabs",t),ref:d,children:s})})});V.displayName="Tabs";const i=Object.assign(V,{Button:W,List:S,Panel:k});try{i.displayName="Tabs",i.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The identifier of the initially active Tab. Corresponds to its Panel `id` value.",name:"activeTab",required:!1,type:{name:"string"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((panelId: string) => void)"}}}}}catch{}const g=1e3,F=({children:e})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${g}ms delay…`);let s=performance.now();for(;performance.now()-s<g;);return e},w=[{body:x(),label:"Gegevens"},{body:x(),label:"Aanslagen"},{body:a.jsxs(a.Fragment,{children:["(This tab panel simulates a load time of ",g," milliseconds.)",a.jsx(F,{})]}),label:"Documenten"},{body:x(),label:"Acties"}],K=[a.jsx(i.List,{children:w.map(({label:e})=>a.jsx(i.Button,{"aria-controls":e,children:e},e))},"tabsList"),w.map(({body:e,label:s})=>a.jsxs(i.Panel,{id:s,children:[a.jsx(E,{className:"ams-mb-xs",level:3,children:s}),a.jsx(O,{children:e})]},s))],z={title:"Components/Containers/Tabs",component:i,args:{children:K},argTypes:{onTabChange:{action:"clicked",description:"Provides the id of the activated tab."}}},p={},m={args:{activeTab:"Acties"}},u={args:{children:[a.jsx(i.List,{children:v.map(e=>a.jsx(i.Button,{"aria-controls":e,children:e},e))},"tabsList"),v.map(e=>a.jsx(i.Panel,{id:e,children:a.jsxs(l,{children:[a.jsxs(l.Caption,{children:["Voorbeeld van een tabel voor ",e==="Weesp"?"stadsgebied":"stadsdeel"," ",e]}),a.jsx(l.Header,{children:a.jsxs(l.Row,{children:[a.jsx(l.HeaderCell,{}),Array.from({length:12},(s,t)=>a.jsx(l.HeaderCell,{children:"Kolom"},t))]})}),a.jsx(l.Body,{children:Array.from({length:3},(s,t)=>a.jsxs(l.Row,{children:[a.jsx(l.HeaderCell,{scope:"row",children:"Rij"}),Array.from({length:12},(n,o)=>a.jsxs(l.Cell,{style:{textAlign:"end"},children:[(t+1)*(o+1),".000"]},o))]},t))})]})},e))]}};var I,P,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(A=(P=p.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var C,L,N;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    activeTab: 'Acties'
  }
}`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var R,H,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(H=u.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};const M=["Default","WithInitialTab","WithWideContent"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:p,WithInitialTab:m,WithWideContent:u,__namedExportsOrder:M,default:z},Symbol.toStringTag,{value:"Module"}));export{Z as T,m as W,u as a};
