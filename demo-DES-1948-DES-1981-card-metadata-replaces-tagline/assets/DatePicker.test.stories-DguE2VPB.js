import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{c as n,l as r,o as i,s as a}from"./DatePicker.stories-BoNCZoag.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{r(),i(),o=t(),s=new Date(2026,2,1),c=()=>{},l={...a,title:`Components/Forms/Date Picker`},u={render:()=>(0,o.jsxs)(`div`,{className:`_ams-tests-grid`,children:[(0,o.jsx)(n,{defaultMonth:s,onChange:c,value:null}),(0,o.jsx)(n,{defaultMonth:s,onChange:c,value:new Date(2026,2,14)}),(0,o.jsx)(n,{defaultMonth:s,mode:`range`,onChange:c,value:{start:new Date(2026,2,10),end:new Date(2026,2,16)}}),(0,o.jsx)(n,{defaultMonth:s,isDateDisabled:e=>e.getDay()===0||e.getDay()===6,onChange:c,value:null}),(0,o.jsx)(n,{defaultMonth:s,maxDate:new Date(2026,2,20),minDate:new Date(2026,2,5),onChange:c,value:null})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  /*
   * Five compositions by hand rather than a generated matrix. The props worth a picture take Date objects
   * and a callback that a matrix has no values for, and the Calendar test story already covers the locales.
   * A matrix would find nothing for \`dir\` either, which the meta adds a control for without it being a prop
   * the docgen analyser sees.
   */
  render: () => <div className="_ams-tests-grid">
      <DatePicker defaultMonth={march2026} onChange={noop} value={null} />
      <DatePicker defaultMonth={march2026} onChange={noop} value={new Date(2026, 2, 14)} />
      <DatePicker defaultMonth={march2026} mode="range" onChange={noop} value={{
      start: new Date(2026, 2, 10),
      end: new Date(2026, 2, 16)
    }} />
      <DatePicker defaultMonth={march2026} isDateDisabled={date => date.getDay() === 0 || date.getDay() === 6} onChange={noop} value={null} />
      <DatePicker defaultMonth={march2026} maxDate={new Date(2026, 2, 20)} minDate={new Date(2026, 2, 5)} onChange={noop} value={null} />
    </div>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...u.parameters?.docs?.source}}},d=[`Test`]})))()}f();export{u as Test,d as __namedExportsOrder,l as default};