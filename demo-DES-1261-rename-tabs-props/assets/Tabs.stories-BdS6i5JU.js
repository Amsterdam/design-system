import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{H as q,P as E,w as l}from"./index.esm-fA-UvuK8.js";import{b as x,j as v}from"./exampleContent-PGFPgakh.js";import{c as f}from"./clsx-B-dksMZM.js";import{r}from"./index-G8LIXM5I.js";import{u as O}from"./useKeyboardFocus-BsBpr6qG.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const $={activeTabId:void 0,updateTab:()=>{}},j=r.createContext($),S=r.forwardRef(({"aria-controls":e,children:t,className:s,onClick:n,...o},c)=>{const{activeTabId:d,updateTab:y}=r.useContext(j),_=b=>{n==null||n(b),r.startTransition(()=>{y(e)})};return a.jsxs("button",{...o,"aria-controls":e,"aria-selected":d===e,className:f("ams-tabs__button",s),id:`button-${e}`,onClick:_,ref:c,role:"tab",tabIndex:d===e?0:-1,type:"button",children:[a.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:t}),a.jsx("span",{className:"ams-tabs__button-label",children:t})]})});S.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{"aria-controls":{defaultValue:null,description:`The identifier of the corresponding tab panel.
Identifies the element (or elements) whose contents or presence are controlled by the current element.
@see aria-owns.`,name:"aria-controls",required:!1,type:{name:"string"}}}}}catch{}const W=r.forwardRef(({children:e,className:t,...s},n)=>{const o=r.useRef(null);r.useImperativeHandle(n,()=>o.current);const{keyDown:c}=O(o,{focusableElements:[".ams-tabs__button:not([disabled])"],horizontally:!0,rotating:!0});return a.jsx("div",{...s,className:f("ams-tabs__list",t),onKeyDown:c,ref:o,role:"tablist",children:e})});W.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const k=r.forwardRef(({children:e,className:t,id:s,...n},o)=>{const{activeTabId:c}=r.useContext(j);return s!==c?null:a.jsx("div",{...n,"aria-labelledby":`button-${s}`,className:f("ams-tabs__panel",t),id:s,ref:o,role:"tabpanel",tabIndex:0,children:e})});k.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{id:{defaultValue:null,description:"The identifier of the tab panel.",name:"id",required:!1,type:{name:"string"}}}}}catch{}const V=r.forwardRef(({activeTab:e,children:t,className:s,onTabChange:n,...o},c)=>{const d=r.useRef(null),[y,_]=r.useState();r.useImperativeHandle(c,()=>d.current),r.useEffect(()=>{if(d.current){const T=d.current.querySelectorAll(".ams-tabs__list .ams-tabs__button:not([disabled])"),h=Array.from(T).map(D=>D.getAttribute("aria-controls")||"");e?h.includes(e)?b(e):(console.warn(`The active tab "${e}" does not exist. Falling back to the first tab.`),b(h[0])):b(h[0])}},[e,d]);const b=T=>{_(T),n==null||n(T)};return a.jsx(j.Provider,{value:{activeTabId:y,updateTab:b},children:a.jsx("div",{...o,className:f("ams-tabs",s),ref:d,children:t})})});V.displayName="Tabs";const i=Object.assign(V,{Button:S,List:W,Panel:k});try{i.displayName="Tabs",i.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The identifier of the initially active tab. Corresponds to its panel `id` value.",name:"activeTab",required:!1,type:{name:"string"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((tabId: string) => void)"}}}}}catch{}const g=1e3,F=({children:e})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${g}ms delay…`);let t=performance.now();for(;performance.now()-t<g;);return e},w=[{body:x(),label:"Gegevens"},{body:x(),label:"Aanslagen"},{body:a.jsxs(a.Fragment,{children:["(This tab panel simulates a load time of ",g," milliseconds.)",a.jsx(F,{})]}),label:"Documenten"},{body:x(),label:"Acties"}],K=[a.jsx(i.List,{children:w.map(({label:e})=>a.jsx(i.Button,{"aria-controls":e,children:e},e))},"tabsList"),w.map(({body:e,label:t})=>a.jsxs(i.Panel,{id:t,children:[a.jsx(q,{className:"ams-mb-xs",level:3,children:t}),a.jsx(E,{children:e})]},t))],z={title:"Components/Containers/Tabs",component:i,args:{children:K},argTypes:{onTabChange:{action:"clicked",description:"Provides the id of the activated tab."}}},m={},p={args:{activeTab:"Acties"}},u={args:{children:[a.jsx(i.List,{children:v.map(e=>a.jsx(i.Button,{"aria-controls":e,children:e},e))},"tabsList"),v.map(e=>a.jsx(i.Panel,{id:e,children:a.jsxs(l,{children:[a.jsxs(l.Caption,{children:["Voorbeeld van een tabel voor ",e==="Weesp"?"stadsgebied":"stadsdeel"," ",e]}),a.jsx(l.Header,{children:a.jsxs(l.Row,{children:[a.jsx(l.HeaderCell,{}),Array.from({length:12},(t,s)=>a.jsx(l.HeaderCell,{children:"Kolom"},s))]})}),a.jsx(l.Body,{children:Array.from({length:3},(t,s)=>a.jsxs(l.Row,{children:[a.jsx(l.HeaderCell,{scope:"row",children:"Rij"}),Array.from({length:12},(n,o)=>a.jsxs(l.Cell,{style:{textAlign:"end"},children:[(s+1)*(o+1),".000"]},o))]},s))})]})},e))]}};var I,P,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(A=(P=m.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var C,N,R;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    activeTab: 'Acties'
  }
}`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var L,H,B;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(B=(H=u.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};const G=["Default","WithInitialTab","WithWideContent"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:m,WithInitialTab:p,WithWideContent:u,__namedExportsOrder:G,default:z},Symbol.toStringTag,{value:"Module"}));export{Z as T,p as W,u as a};
