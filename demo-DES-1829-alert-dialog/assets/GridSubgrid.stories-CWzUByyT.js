import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{a as r,i,o as a,t as o}from"./Grid-KkePaaMS.js";import{n as s,t as c}from"./GridColumnsGuide-Ck70PZIl.js";import{f as l,t as u}from"./argTypes-Diu0Wtb4.js";var d=t({SemanticListOfCards:()=>h,Subgrid:()=>m,__namedExportsOrder:()=>g,default:()=>p}),f,p,m,h,g;function _(){return(_=e((()=>{i(),a(),l(),s(),f=n(),p={title:`Components/Layout/Grid`,component:o.Subgrid,argTypes:{as:u(r),gapVertical:{control:{labels:{undefined:`inherit (default)`},type:`radio`},options:[void 0,`none`,`large`,`x-large`,`2x-large`]}},decorators:[e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c,{}),(0,f.jsx)(o,{paddingVertical:`x-large`,children:(0,f.jsx)(e,{})})]})],parameters:{layout:`fullscreen`},tags:[`!manifest`]},o.Subgrid,m={render:e=>{let t=e.as===`ol`||e.as===`ul`?`li`:void 0;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Cell,{className:`_ams-item`,span:{narrow:4,medium:2,wide:3},style:{blockSize:`16rem`}}),(0,f.jsxs)(o.Subgrid,{...e,span:{narrow:4,medium:6,wide:9},start:{narrow:1,medium:3,wide:4},children:[(0,f.jsx)(o.Cell,{as:t,className:`_ams-item`,span:`all`,style:{blockSize:`6rem`}}),(0,f.jsx)(o.Cell,{as:t,className:`_ams-item`,span:{narrow:4,medium:2,wide:3}}),(0,f.jsx)(o.Cell,{as:t,className:`_ams-item`,span:{narrow:4,medium:2,wide:3}}),(0,f.jsx)(o.Cell,{as:t,className:`_ams-item`,span:{narrow:4,medium:2,wide:3}}),(0,f.jsx)(o.Cell,{as:t,className:`_ams-item`,span:{narrow:4,medium:2,wide:3}}),(0,f.jsx)(o.Cell,{as:t,className:`_ams-item`,span:{narrow:4,medium:2,wide:3}}),(0,f.jsx)(o.Cell,{as:t,className:`_ams-item`,span:{narrow:4,medium:2,wide:3}})]})]})}},h={args:{as:`ul`,children:[(0,f.jsx)(o.Cell,{as:`li`,className:`_ams-item`,span:{narrow:4,medium:4,wide:3}},1),(0,f.jsx)(o.Cell,{as:`li`,className:`_ams-item`,span:{narrow:4,medium:4,wide:3}},2),(0,f.jsx)(o.Cell,{as:`li`,className:`_ams-item`,span:{narrow:4,medium:4,wide:3}},3),(0,f.jsx)(o.Cell,{as:`li`,className:`_ams-item`,span:{narrow:4,medium:4,wide:3}},4)],span:`all`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    // The Cells of a list are its items, so they follow the tag the control sets.
    const item = args.as === 'ol' || args.as === 'ul' ? 'li' as const : undefined;
    return <>
        <Grid.Cell className="_ams-item" span={{
        narrow: 4,
        medium: 2,
        wide: 3
      }} style={{
        blockSize: '16rem'
      }} />
        <Grid.Subgrid {...args} span={{
        narrow: 4,
        medium: 6,
        wide: 9
      }} start={{
        narrow: 1,
        medium: 3,
        wide: 4
      }}>
          <Grid.Cell as={item} className="_ams-item" span="all" style={{
          blockSize: '6rem'
        }} />
          <Grid.Cell as={item} className="_ams-item" span={{
          narrow: 4,
          medium: 2,
          wide: 3
        }} />
          <Grid.Cell as={item} className="_ams-item" span={{
          narrow: 4,
          medium: 2,
          wide: 3
        }} />
          <Grid.Cell as={item} className="_ams-item" span={{
          narrow: 4,
          medium: 2,
          wide: 3
        }} />
          <Grid.Cell as={item} className="_ams-item" span={{
          narrow: 4,
          medium: 2,
          wide: 3
        }} />
          <Grid.Cell as={item} className="_ams-item" span={{
          narrow: 4,
          medium: 2,
          wide: 3
        }} />
          <Grid.Cell as={item} className="_ams-item" span={{
          narrow: 4,
          medium: 2,
          wide: 3
        }} />
        </Grid.Subgrid>
      </>;
  }
}`,...m.parameters?.docs?.source},description:{story:`A Subgrid hands the columns it spans to its children, so a Cell inside it is placed on the columns of
the page rather than on columns of its own. Here a sidebar takes 3 columns and the Subgrid the other 9;
the Cells inside it line up with the column guide.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'ul',
    children: [<Grid.Cell as="li" className="_ams-item" key={1} span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }} />, <Grid.Cell as="li" className="_ams-item" key={2} span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }} />, <Grid.Cell as="li" className="_ams-item" key={3} span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }} />, <Grid.Cell as="li" className="_ams-item" key={4} span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }} />],
    span: 'all'
  }
}`,...h.parameters?.docs?.source},description:{story:"A set of Cells that hold the same kind of thing is a list. Render the Subgrid as an `ol` or a `ul` and every\nCell inside it as an `li`. It looks exactly the same, and assistive technology announces the set and its size.",...h.parameters?.docs?.description}}},g=[`Subgrid`,`SemanticListOfCards`]})))()}export{_ as i,h as n,m as r,d as t};