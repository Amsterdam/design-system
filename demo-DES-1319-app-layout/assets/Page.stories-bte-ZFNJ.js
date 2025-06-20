import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{h as N,x,y as j,z as M,A as L}from"./index.esm-Dr-tAuIH.js";import{b as B}from"./exampleContent-r-zRGsZY.js";import{c as C}from"./clsx-B-dksMZM.js";import{r as A}from"./index-G8LIXM5I.js";import{P as I}from"./PageHeader-w0Zybdgk.js";import{P as t}from"./PageFooter-Cwmc6W1X.js";import{G as d}from"./Grid-BHIDbP7U.js";import{B as p}from"./Breadcrumb-CuDaK0zb.js";import{H as h}from"./Heading-7IbEntpa.js";import{P as F}from"./Paragraph-BDLeQ91t.js";const n=A.forwardRef(({children:a,className:o,purpose:l,...c},b)=>e.jsx("div",{...c,className:C("ams-page",l==="application"&&"ams-page--application",o),ref:b,children:a}));n.displayName="Page";try{n.displayName="Page",n.__docgenInfo={description:"",displayName:"Page",props:{purpose:{defaultValue:null,description:"",name:"purpose",required:!1,type:{name:"enum",value:[{value:'"application"'}]}}}}}catch{}const m=({as:a="div",children:o})=>e.jsx(a,{className:"ams-mock-page-body",children:o});try{m.displayName="MockPageBody",m.__docgenInfo={description:"",displayName:"MockPageBody",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"main"'},{value:'"div"'}]}}}}}catch{}const g=({children:a})=>e.jsx("div",{className:"ams-mock-page-navigation",children:a}),u=({href:a,icon:o,label:l})=>{const c=o;return e.jsxs("a",{className:"ams-mock-page-navigation-link",href:a,children:[e.jsx(c,{fill:"white",width:24}),l]})},r=Object.assign(g,{Link:u});try{g.displayName="MockPageNavigationRoot",g.__docgenInfo={description:"",displayName:"MockPageNavigationRoot",props:{}}}catch{}try{u.displayName="MockPageNavigationLink",u.__docgenInfo={description:"",displayName:"MockPageNavigationLink",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"FC<SVGProps<SVGSVGElement>>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}try{r.displayName="MockPageNavigation",r.__docgenInfo={description:"",displayName:"MockPageNavigation",props:{}}}catch{}const S={title:"Components/Containers/Page",component:n,args:{className:"ams-docs-page"},argTypes:{className:{table:{disable:!0}}},parameters:{layout:"fullscreen"}},s={args:{children:e.jsx("div",{className:"ams-docs-item"})}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(r.Link,{href:"#",icon:N,label:"Dashboard"}),e.jsx(r.Link,{href:"#",icon:x,label:"Projecten"}),e.jsx(r.Link,{href:"#",icon:j,label:"Rapportages"}),e.jsx(r.Link,{href:"#",icon:M,label:"Analyses"}),e.jsx(r.Link,{href:"#",icon:L,label:"Instellingen"})]}),e.jsx(I,{brandName:"Application"}),e.jsx(m,{as:"main",children:e.jsxs(d,{paddingVertical:"large",children:[e.jsxs(d.Cell,{span:"all",children:[e.jsxs(p,{className:"ams-mb-xs",children:[e.jsx(p.Link,{href:"#",children:"Dashboard"}),e.jsx(p.Link,{href:"#",children:"Projecten"})]}),e.jsx(h,{className:"ams-mb-s",level:2,size:"level-1",children:"Kerngegevens"}),e.jsx(h,{level:1,size:"level-2",children:"Brug 423 opwaardering (Berlagebrug)"})]}),Array.from(Array(12).keys()).map(a=>e.jsx(d.Cell,{span:4,children:e.jsx("div",{style:{backgroundColor:"var(--ams-color-background)",padding:"var(--ams-space-m)"},children:e.jsx(F,{children:B()})})},a))]})}),e.jsx(t,{children:e.jsx(t.Menu,{children:Array.from(Array(6).keys()).map(a=>e.jsxs(t.MenuLink,{href:"#",children:["Footer Menu Item ",a+1]},a))})})]}),purpose:"application"},parameters:{layout:"fullscreen",themes:{themeOverride:"Compact"}}};var k,f,y;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: <div className="ams-docs-item" />
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,P,_;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: <>
        <MockPageNavigation>
          <MockPageNavigation.Link href="#" icon={HouseIcon} label="Dashboard" />
          <MockPageNavigation.Link href="#" icon={FolderIcon} label="Projecten" />
          <MockPageNavigation.Link href="#" icon={DocumentsIcon} label="Rapportages" />
          <MockPageNavigation.Link href="#" icon={LineChartUpIcon} label="Analyses" />
          <MockPageNavigation.Link href="#" icon={CogwheelIcon} label="Instellingen" />
        </MockPageNavigation>
        <PageHeader brandName="Application" />
        <MockPageBody as="main">
          <Grid paddingVertical="large">
            <Grid.Cell span="all">
              <Breadcrumb className="ams-mb-xs">
                <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
                <Breadcrumb.Link href="#">Projecten</Breadcrumb.Link>
              </Breadcrumb>
              <Heading className="ams-mb-s" level={2} size="level-1">
                Kerngegevens
              </Heading>
              <Heading level={1} size="level-2">
                Brug 423 opwaardering (Berlagebrug)
              </Heading>
            </Grid.Cell>
            {Array.from(Array(12).keys()).map(i => <Grid.Cell key={i} span={4}>
                <div style={{
              backgroundColor: 'var(--ams-color-background)',
              padding: 'var(--ams-space-m)'
            }}>
                  <Paragraph>{exampleParagraph()}</Paragraph>
                </div>
              </Grid.Cell>)}
          </Grid>
        </MockPageBody>
        <PageFooter>
          <PageFooter.Menu>
            {Array.from(Array(6).keys()).map(i => <PageFooter.MenuLink href="#" key={i}>
                Footer Menu Item {i + 1}
              </PageFooter.MenuLink>)}
          </PageFooter.Menu>
        </PageFooter>
      </>,
    purpose: 'application'
  },
  parameters: {
    layout: 'fullscreen',
    themes: {
      themeOverride: 'Compact'
    }
  }
}`,...(_=(P=i.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const G=["Default","Application"],U=Object.freeze(Object.defineProperty({__proto__:null,Application:i,Default:s,__namedExportsOrder:G,default:S},Symbol.toStringTag,{value:"Module"}));export{i as A,U as P};
