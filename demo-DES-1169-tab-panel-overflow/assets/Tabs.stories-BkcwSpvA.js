import{j as a}from"./jsx-runtime-z8MfsBtr.js";import{H as V,P as O,w as o}from"./index.esm-BH242R5B.js";import{b as x,j}from"./exampleContent-B9IK-krr.js";import{c as T}from"./clsx-B-dksMZM.js";import{r}from"./index-D7uoVdV3.js";import{u as E}from"./useKeyboardFocus-CRUFsA_C.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const K={activeTab:0,tabsId:"",updateTab:()=>{}},g=r.createContext(K),H=r.forwardRef(({children:e,className:s,tab:t=0,...n},c)=>{const{activeTab:l,tabsId:i,updateTab:y}=r.useContext(g);return a.jsxs("button",{...n,"aria-controls":`${i}-panel-${t}`,"aria-selected":l===t,className:T("ams-tabs__button",s),id:`${i}-tab-${t}`,onClick:()=>{r.startTransition(()=>{y(t)})},ref:c,role:"tab",tabIndex:l===t?0:-1,children:[a.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:e}),a.jsx("span",{className:"ams-tabs__button-label",children:e})]})});H.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:{value:"0"},description:"An identifier.",name:"tab",required:!1,type:{name:"number"}}}}}catch{}const B=r.forwardRef(({children:e,className:s,...t},n)=>a.jsx("div",{...t,role:"tablist",ref:n,className:T("ams-tabs__list",s),children:e}));B.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const W=r.forwardRef(({tab:e,children:s,className:t,...n},c)=>{const{activeTab:l,tabsId:i}=r.useContext(g);return e!==l?null:a.jsx("div",{...n,role:"tabpanel","aria-labelledby":`${i}-tab-${e}`,id:`${i}-panel-${e}`,tabIndex:0,ref:c,className:T("ams-tabs__panel",t),children:s})});W.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"number"}}}}}catch{}const $=r.forwardRef(({activeTab:e,children:s,className:t,...n},c)=>{const l=r.useId(),i=r.useRef(null),[y,u]=r.useState(0),f=r.useMemo(()=>Array.isArray(s)?s[0].props.children:[],[s]);r.useEffect(()=>{typeof e=="number"&&Number.isInteger(e)&&(e<0?u(0):e>f.length-1?u(f.length-1):u(e))},[e,f]);const S=D=>{u(D)};r.useImperativeHandle(c,()=>i.current);const{keyDown:k}=E(i,{rotating:!0,horizontally:!0});return a.jsx(g.Provider,{value:{activeTab:y,updateTab:S,tabsId:l},children:a.jsx("div",{...n,role:"tabs",ref:i,onKeyDown:k,className:T("ams-tabs",t),children:s})})});$.displayName="Tabs";const d=Object.assign($,{Button:H,List:B,Panel:W});try{d.displayName="Tabs",d.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The number of the active tab. Corresponds to its `tab` value.",name:"activeTab",required:!1,type:{name:"number"}}}}}catch{}const _=1e3,q=({children:e})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${_}ms delay…`);let s=performance.now();for(;performance.now()-s<_;);return e},h=[{id:0,label:"Gegevens",body:x()},{id:1,label:"Aanslagen",body:x()},{id:2,label:"Documenten",body:a.jsxs(a.Fragment,{children:["(This tab panel simulates a load time of ",_," milliseconds.)",a.jsx(q,{})]})},{id:3,label:"Acties",body:x()}],F=[a.jsx(d.List,{children:h.map(({id:e,label:s})=>a.jsx(d.Button,{tab:e,children:s},s))},"tabsList"),h.map(({id:e,body:s,label:t})=>a.jsxs(d.Panel,{tab:e,children:[a.jsx(V,{className:"ams-mb--xs",level:3,children:t}),a.jsx(O,{children:s})]},t))],z={title:"Components/Containers/Tabs",component:d,args:{children:F},argTypes:{activeTab:{control:{type:"number",min:0,max:h.length-1}}}},b={},m={args:{activeTab:3}},p={args:{children:[a.jsx(d.List,{children:j.map((e,s)=>a.jsx(d.Button,{tab:s,children:e},e))},"tabsList"),j.map((e,s)=>a.jsx(d.Panel,{tab:s,children:a.jsxs(o,{children:[a.jsxs(o.Caption,{children:["Voorbeeld van een tabel voor ",e==="Weesp"?"stadsgebied":"stadsdeel"," ",e]}),a.jsx(o.Header,{children:a.jsxs(o.Row,{children:[a.jsx(o.HeaderCell,{}),Array.from({length:12},(t,n)=>a.jsx(o.HeaderCell,{children:"Kolom"},n))]})}),a.jsx(o.Body,{children:Array.from({length:3},(t,n)=>a.jsxs(o.Row,{children:[a.jsx(o.HeaderCell,{scope:"row",children:"Rij"}),Array.from({length:12},(c,l)=>a.jsxs(o.Cell,{style:{textAlign:"end"},children:[(n+1)*(l+1),".000"]},l))]},n))})]})},e))]}};var C,I,v;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(v=(I=b.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var w,P,N;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    activeTab: 3
  }
}`,...(N=(P=m.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var A,L,R;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: [<Tabs.List key="tabsList">
        {cityParts.map((name, index) => <Tabs.Button key={name} tab={index}>
            {name}
          </Tabs.Button>)}
      </Tabs.List>, cityParts.map((name, index) => <Tabs.Panel key={name} tab={index}>
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
}`,...(R=(L=p.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const M=["Default","WithInitialTab","WithWideContent"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:b,WithInitialTab:m,WithWideContent:p,__namedExportsOrder:M,default:z},Symbol.toStringTag,{value:"Module"}));export{Z as T,m as W,p as a};
