import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{H as E,P as O,v as o}from"./index.esm-Bbl-Ydi0.js";import{b as _,j as I}from"./exampleContent-PGFPgakh.js";import{c as f}from"./clsx-B-dksMZM.js";import{r as n}from"./index-C0MU9AHG.js";import{u as q}from"./useKeyboardFocus-nadMEUdd.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const F={activeTab:0,tabsId:"",updateTab:()=>{}},j=n.createContext(F),W=n.forwardRef(({children:e,className:t,onClick:r,tab:s=0,...c},i)=>{const{activeTab:d,tabsId:b,updateTab:x}=n.useContext(j),m=p=>{r==null||r(p),n.startTransition(()=>{x(s)})};return a.jsxs("button",{...c,"aria-controls":`${b}-panel-${s}`,"aria-selected":d===s,className:f("ams-tabs__button",t),id:`${b}-tab-${s}`,onClick:m,ref:i,role:"tab",tabIndex:d===s?0:-1,children:[a.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:e}),a.jsx("span",{className:"ams-tabs__button-label",children:e})]})});W.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:{value:"0"},description:"An identifier.",name:"tab",required:!1,type:{name:"number"}}}}}catch{}const $=n.forwardRef(({children:e,className:t,...r},s)=>a.jsx("div",{...r,className:f("ams-tabs__list",t),ref:s,role:"tablist",children:e}));$.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const S=n.forwardRef(({children:e,className:t,tab:r,...s},c)=>{const{activeTab:i,tabsId:d}=n.useContext(j);return r!==i?null:a.jsx("div",{...s,"aria-labelledby":`${d}-tab-${r}`,className:f("ams-tabs__panel",t),id:`${d}-panel-${r}`,ref:c,role:"tabpanel",tabIndex:0,children:e})});S.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"number"}}}}}catch{}const D=n.forwardRef(({activeTab:e,children:t,className:r,onChange:s,...c},i)=>{const d=n.useId(),b=n.useRef(null),[x,m]=n.useState(0),p=n.useMemo(()=>Array.isArray(t)?t[0].props.children:[],[t]);n.useEffect(()=>{typeof e=="number"&&Number.isInteger(e)&&(e<0?m(0):e>p.length-1?m(p.length-1):m(e))},[e,p]);const V=v=>{m(v),s==null||s(v)};n.useImperativeHandle(i,()=>b.current);const{keyDown:k}=q(b,{horizontally:!0,rotating:!0});return a.jsx(j.Provider,{value:{activeTab:x,tabsId:d,updateTab:V},children:a.jsx("div",{...c,className:f("ams-tabs",r),onKeyDown:k,ref:b,children:t})})});D.displayName="Tabs";const l=Object.assign(D,{Button:W,List:$,Panel:S});try{l.displayName="Tabs",l.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The number of the active tab. Corresponds to its `tab` value.",name:"activeTab",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(((tabId: number) => void) & FormEventHandler<HTMLDivElement>)"}}}}}catch{}const h=1e3,K=({children:e})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${h}ms delay…`);let t=performance.now();for(;performance.now()-t<h;);return e},g=[{body:_(),id:0,label:"Gegevens"},{body:_(),id:1,label:"Aanslagen"},{body:a.jsxs(a.Fragment,{children:["(This tab panel simulates a load time of ",h," milliseconds.)",a.jsx(K,{})]}),id:2,label:"Documenten"},{body:_(),id:3,label:"Acties"}],M=[a.jsx(l.List,{children:g.map(({id:e,label:t})=>a.jsx(l.Button,{tab:e,children:t},t))},"tabsList"),g.map(({body:e,id:t,label:r})=>a.jsxs(l.Panel,{tab:t,children:[a.jsx(E,{className:"ams-mb--xs",level:3,children:r}),a.jsx(O,{children:e})]},r))],z={title:"Components/Containers/Tabs",component:l,args:{children:M},argTypes:{activeTab:{control:{max:g.length-1,min:0,type:"number"}},onChange:{action:"clicked",description:"Provides the id of the activated tab."}}},u={},T={args:{activeTab:3}},y={args:{children:[a.jsx(l.List,{children:I.map((e,t)=>a.jsx(l.Button,{tab:t,children:e},e))},"tabsList"),I.map((e,t)=>a.jsx(l.Panel,{tab:t,children:a.jsxs(o,{children:[a.jsxs(o.Caption,{children:["Voorbeeld van een tabel voor ",e==="Weesp"?"stadsgebied":"stadsdeel"," ",e]}),a.jsx(o.Header,{children:a.jsxs(o.Row,{children:[a.jsx(o.HeaderCell,{}),Array.from({length:12},(r,s)=>a.jsx(o.HeaderCell,{children:"Kolom"},s))]})}),a.jsx(o.Body,{children:Array.from({length:3},(r,s)=>a.jsxs(o.Row,{children:[a.jsx(o.HeaderCell,{scope:"row",children:"Rij"}),Array.from({length:12},(c,i)=>a.jsxs(o.Cell,{style:{textAlign:"end"},children:[(s+1)*(i+1),".000"]},i))]},s))})]})},e))]}};var C,P,w;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(w=(P=u.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var N,L,A;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    activeTab: 3
  }
}`,...(A=(L=T.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var H,R,B;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(B=(R=y.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const G=["Default","WithInitialTab","WithWideContent"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:u,WithInitialTab:T,WithWideContent:y,__namedExportsOrder:G,default:z},Symbol.toStringTag,{value:"Module"}));export{ee as T,T as W,y as a};
