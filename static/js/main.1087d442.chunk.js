(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={item:"ClaudCounter_item__2vEGf",displey:"ClaudCounter_displey__3tp1O",button:"ClaudCounter_button__13MKi"}},15:function(e,t,n){},23:function(e,t,n){},3:function(e,t,n){e.exports={item:"SetCloud_item__Xo9gz",div:"SetCloud_div__10FXc",displey:"SetCloud_displey__31L1i",button:"SetCloud_button__WX6iT",setCoumter:"SetCloud_setCoumter__26mm-",redStyle:"SetCloud_redStyle__3fEwZ",stylesInput:"SetCloud_stylesInput__1Vy6o",button_Value:"SetCloud_button_Value__1LPDv",buttonSet:"SetCloud_buttonSet__1JqtV",button_Value_disabled:"SetCloud_button_Value_disabled__3ypfZ"}},31:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(9),u=n.n(a),c=(n(23),n(4)),i=n(6),o=(n(15),n(7)),l=n(3),b=n.n(l),r=n(8),d=n.n(r),j=n(1);function m(e){var t=e.name,n=Object(o.a)(e,["name"]);return Object(j.jsx)("button",{className:n.disabled?d.a.disabled:d.a.buttonSet,disabled:n.disabled,onClick:function(){n.onChange&&n.onChange(t),n.setButton&&n.setButton(),n.changeSettings&&n.changeSettings(!1)},children:t})}var O=function(e){var t=e.counterValue,n=Object(o.a)(e,["counterValue"]),s=t.min,a=t.max,u=function(e){n.setDispleys(!1),e.preventDefault()},c=n.namesValue,i=c.nameMax,l=c.nameMin,r=function(e){e.currentTarget.id==i&&n.setOfButton(a+1,i),"-"==e.currentTarget.id&&n.setOfButton(a-1,i),e.currentTarget.id==l&&n.setOfButton(s+1,l),"--"==e.currentTarget.id&&n.setOfButton(s-1,l),n.setDispleys(!1)},d=function(e){e.currentTarget.id==i&&n.setOfButton(a+10,i),"-"==e.currentTarget.id&&a>=s+10&&n.setOfButton(a-10,i),e.currentTarget.id==l&&s+10<=a&&n.setOfButton(s+10,l),"--"==e.currentTarget.id&&s-10>=-1&&n.setOfButton(s-10,l),n.setDispleys(!1)},O=s===a||-1===s;return Object(j.jsxs)("div",{className:b.a.item,children:[Object(j.jsxs)("div",{className:b.a.displey,children:[Object(j.jsxs)("div",{className:b.a.setCoumter,children:[Object(j.jsx)("div",{className:b.a.div,children:i}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:b.a.button_Value,id:i,onClick:r,onDoubleClick:d,children:"+"}),Object(j.jsx)("input",{className:s===a?b.a.redStyle:b.a.stylesInput,min:s,id:i,value:a,onKeyPress:function(e){e.preventDefault()},type:"number",onClick:u,step:"1",disabled:!0}),Object(j.jsx)("button",{className:s===a?b.a.button_Value_disabled:b.a.button_Value,id:"-",onClick:r,onDoubleClick:d,disabled:a===s,children:"-"})]})]}),Object(j.jsxs)("div",{className:b.a.setCoumter,children:[Object(j.jsx)("div",{className:b.a.div,children:l}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:s===a?b.a.button_Value_disabled:b.a.button_Value,id:l,onClick:r,onDoubleClick:d,disabled:a===s,children:"+"}),Object(j.jsx)("input",{className:s===a||-1===s?b.a.redStyle:b.a.stylesInput,id:l,value:s,onKeyPress:function(e){e.preventDefault()},type:"number",min:-1,max:a,onClick:u,disabled:!0}),Object(j.jsx)("button",{className:-1===s?b.a.button_Value_disabled:b.a.button_Value,id:"--",onClick:r,onDoubleClick:d,disabled:-1===s,children:"-"})]})]})]}),Object(j.jsx)("div",{className:n.displey?b.a.button:b.a.buttonSet,children:Object(j.jsx)(m,{disabled:O,setButton:function(){n.setDispleys(!0),n.setOfButton(s,n.buttonName.button),n.changeSettings&&n.changeSettings(!n.settings)},name:n.buttonName.button})})]})},_=n(12),p=n.n(_);function x(e){var t=e.min,n=e.max,s=Object(o.a)(e,["min","max"]);return Object(j.jsx)("div",{className:s.num===n?d.a.redFive:d.a.counter,children:s.displey?s.num:t===n||-1===t||t>n?Object(j.jsx)("div",{className:d.a.divSet,children:"Error enter correct value"}):Object(j.jsx)("div",{className:d.a.divSet,children:"enter value"})})}function v(e){var t=e.buttonName,n=e.counterValue,s=Object(o.a)(e,["buttonName","counterValue"]),a=n.num===n.max||-1===n.min,u=n.num===n.min||-1===n.min,c=!s.displey||-1===n.min,i=function(e){s.buttonSetInc(e),e===t.button&&s.changeSettings&&s.changeSettings(!1)};return Object(j.jsxs)("div",{className:p.a.item,children:[Object(j.jsx)("div",{className:p.a.displey,children:Object(j.jsx)(x,{min:n.min,max:n.max,num:n.num,displey:s.displey})}),Object(j.jsxs)("div",{className:p.a.button,children:[Object(j.jsx)(m,{buttonSetInc:function(){return s.buttonSetInc(t.buttonOne)},name:t.buttonOne,disabled:a,onChange:i}),Object(j.jsx)(m,{buttonSetInc:function(){return s.buttonSetInc(t.buttonTwo)},name:t.buttonTwo,disabled:u,onChange:i}),s.settings&&Object(j.jsx)(m,{changeSettings:s.changeSettings,name:t.button,disabled:c,onChange:i})]})]})}var f=function(e){return Object(j.jsxs)("div",{className:"conteiner",children:[Object(j.jsx)("div",{children:Object(j.jsx)(O,{counterValue:e.counterValue,buttonName:e.buttonName,namesValue:e.namesValue,setOfButton:e.setOfButton,setCounterValue:e.setCounterValue,setDispleys:e.setDispleys,displey:e.displey})}),Object(j.jsx)("div",{children:Object(j.jsx)(v,{counterValue:e.counterValue,buttonSetInc:e.buttonSetInc,buttonName:e.buttonName,displey:e.displey,setDispleys:e.setDispleys})})]})},S=n(13),h=n(2),y=function(e){var t=Object(s.useState)(!0),n=Object(i.a)(t,2),a=n[0],u=n[1],c=function(e){u(e)};return Object(j.jsx)("div",{className:"conteiner",children:a?Object(j.jsx)(O,{counterValue:e.counterValue,buttonName:e.buttonName,namesValue:e.namesValue,setOfButton:e.setOfButton,setCounterValue:e.setCounterValue,setDispleys:e.setDispleys,displey:e.displey,settings:a,changeSettings:c}):Object(j.jsx)(v,{settings:a,counterValue:e.counterValue,buttonSetInc:e.buttonSetInc,buttonName:e.buttonName,displey:e.displey,changeSettings:c,setDispleys:e.setDispleys})})},C=n(10);var g=function(){Object(C.b)((function(e){return e.counter}));var e={buttonOne:"INC",buttonTwo:"RESET",button:"SET"},t=e.buttonOne,n=e.buttonTwo,a={nameMax:"Max Value",nameMin:"Min Value"},u=Object(s.useState)(!0),o=Object(i.a)(u,2),l=o[0],b=o[1],r=Object(s.useState)({min:0,max:10,num:0}),d=Object(i.a)(r,2),m=d[0],O=d[1];Object(s.useEffect)((function(){var e=localStorage.getItem("values");if(e){var t=JSON.parse(e);t.num=JSON.parse(e).min,O(t)}}),[]),Object(s.useEffect)((function(){localStorage.setItem("values",JSON.stringify(m))}),[m]);var _=function(t,n){var s=Object(c.a)({},m);if(n==a.nameMax&&O(Object(c.a)(Object(c.a)({},s),{},{max:t})),n==a.nameMin){var u=Object(c.a)(Object(c.a)({},m),{},{min:t});O(Object(c.a)({},u))}if(n==e.button){var i=Object(c.a)(Object(c.a)({},m),{},{num:t});O(Object(c.a)({},i))}},p=function(e){var s=Object(c.a)({},m);e===t&&m.num<m.max&&O(Object(c.a)(Object(c.a)({},s),{},{num:m.num+1})),e===n&&O(Object(c.a)(Object(c.a)({},s),{},{num:m.min}))};return Object(j.jsx)(S.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)(S.b,{to:"/ClaudFive/",children:Object(j.jsx)("button",{className:"select",children:"First_option"})}),Object(j.jsx)(S.b,{to:"/SecondVar/",children:Object(j.jsx)("button",{className:"select",children:"Second_option"})})]}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{path:"/ClaudFive",element:Object(j.jsx)(f,{counterValue:m,buttonName:e,namesValue:a,setOfButton:_,setCounterValue:O,setDispleys:b,displey:l,buttonSetInc:p})}),Object(j.jsx)(h.a,{path:"/SecondVar",element:Object(j.jsx)(y,{counterValue:m,buttonName:e,namesValue:a,setOfButton:_,setCounterValue:O,setDispleys:b,displey:l,buttonSetInc:p})})]})]})})},N=n(17),V={min:0,max:10,num:0},D=Object(N.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return e}}),B=Object(N.b)(D);u.a.render(Object(j.jsx)(C.a,{store:B,children:Object(j.jsx)(g,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={buttonSet:"Ferst_buttonSet__2iAw-",disabled:"Ferst_disabled__1SUKq",redFive:"Ferst_redFive__2b403",div:"Ferst_div__sKDBO",divSet:"Ferst_divSet__19U-Y",counter:"Ferst_counter__2BsHd"}}},[[31,1,2]]]);
//# sourceMappingURL=main.1087d442.chunk.js.map