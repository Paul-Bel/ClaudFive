(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={item:"ClaudCounter_item__2vEGf",displey:"ClaudCounter_displey__3tp1O",button:"ClaudCounter_button__13MKi"}},13:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(14),c=n.n(a),u=(n(19),n(3)),i=n(6),o=(n(13),n(7)),l=n(5),r=n.n(l),b=n(8),d=n.n(b),m=n(1);function j(e){var t=e.name,n=Object(o.a)(e,["name"]);return Object(m.jsx)("button",{className:n.disabled?d.a.disabled:d.a.buttonSet,disabled:n.disabled,onClick:function(){n.onChange&&n.onChange(t),n.setButton&&n.setButton(),n.changeSettings&&n.changeSettings(!1)},children:t})}var O=function(e){var t=e.counterValue,n=Object(o.a)(e,["counterValue"]),s=t.min,a=t.max,c=function(){n.setDispleys(!1)},u=n.namesValue,i=u.nameMax,l=u.nameMin,b=function(e){e.currentTarget.id==i&&n.setOfButton(e.currentTarget.valueAsNumber,i),e.currentTarget.id==l&&n.setOfButton(Number(e.currentTarget.value),l),n.changeSettings&&n.changeSettings(!1)},d=s===a||-1===s;return Object(m.jsxs)("div",{className:r.a.item,children:[Object(m.jsxs)("div",{className:r.a.displey,children:[Object(m.jsxs)("div",{className:r.a.setCoumter,children:[Object(m.jsx)("div",{className:r.a.div,children:i}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{className:s===a?r.a.redStyle:r.a.stylesInput,min:s,id:i,value:a,onChange:b,type:"number",onClick:c})})]}),Object(m.jsxs)("div",{className:r.a.setCoumter,children:[Object(m.jsx)("div",{className:r.a.div,children:l}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{className:s===a||-1===s?r.a.redStyle:r.a.stylesInput,id:l,value:s,onChange:b,type:"number",min:-1,max:a,onClick:c})})]})]}),Object(m.jsx)("div",{className:r.a.button,children:Object(m.jsx)(j,{disabled:d,setButton:function(){console.log(n.settings+" ttttttttttt"),n.setDispleys(!0),n.setOfButton(s,n.buttonName.button),n.changeSettings&&n.changeSettings(!n.settings)},name:n.buttonName.button})})]})},v=n(10),p=n.n(v);function x(e){var t=e.min,n=e.max,s=Object(o.a)(e,["min","max"]);return Object(m.jsx)("div",{className:s.num===n?d.a.redFive:d.a.counter,children:s.displey?s.num:t===n||-1===t||t>n?Object(m.jsx)("div",{className:d.a.divSet,children:"Error enter correct value"}):Object(m.jsx)("div",{className:d.a.divSet,children:"enter value"})})}function S(e){var t=e.buttonName,n=e.counterValue,s=Object(o.a)(e,["buttonName","counterValue"]),a=n.num===n.max||-1===n.min,c=n.num===n.min||-1===n.min,u=!s.displey||-1===n.min,i=function(e){s.buttonSetInc(e),e===t.button&&s.changeSettings&&s.changeSettings(!1)};return Object(m.jsxs)("div",{className:p.a.item,children:[Object(m.jsx)("div",{className:p.a.displey,children:Object(m.jsx)(x,{min:n.min,max:n.max,num:n.num,displey:s.displey})}),Object(m.jsxs)("div",{className:p.a.button,children:[Object(m.jsx)(j,{buttonSetInc:function(){return s.buttonSetInc(t.buttonOne)},name:t.buttonOne,disabled:a,onChange:i}),Object(m.jsx)(j,{buttonSetInc:function(){return s.buttonSetInc(t.buttonTwo)},name:t.buttonTwo,disabled:c,onChange:i}),s.settings&&Object(m.jsx)(j,{changeSettings:s.changeSettings,name:t.button,disabled:u,onChange:i})]})]})}var h=function(e){return Object(m.jsxs)("div",{className:"conteiner",children:[Object(m.jsx)("div",{children:Object(m.jsx)(O,{counterValue:e.counterValue,buttonName:e.buttonName,namesValue:e.namesValue,setOfButton:e.setOfButton,setCounterValue:e.setCounterValue,setDispleys:e.setDispleys,displey:e.displey})}),Object(m.jsx)("div",{children:Object(m.jsx)(S,{counterValue:e.counterValue,buttonSetInc:e.buttonSetInc,buttonName:e.buttonName,displey:e.displey,setDispleys:e.setDispleys})})]})},g=n(11),_=n(2),y=function(e){var t=Object(s.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1];console.log(a+"  sett");var u=function(e){c(e)};return Object(m.jsx)("div",{className:"conteiner",children:a?Object(m.jsx)(S,{settings:a,counterValue:e.counterValue,buttonSetInc:e.buttonSetInc,buttonName:e.buttonName,displey:e.displey,changeSettings:u,setDispleys:e.setDispleys}):Object(m.jsx)(O,{counterValue:e.counterValue,buttonName:e.buttonName,namesValue:e.namesValue,setOfButton:e.setOfButton,setCounterValue:e.setCounterValue,setDispleys:e.setDispleys,displey:e.displey,settings:a,changeSettings:u})})};var f=function(){var e={buttonOne:"INC",buttonTwo:"RESET",button:"SET"},t=e.buttonOne,n=e.buttonTwo,a={nameMax:"Max Value",nameMin:"Min Value"},c=Object(s.useState)(!0),o=Object(i.a)(c,2),l=o[0],r=o[1];console.log(l+" app"),console.log(l+" znach");var b=Object(s.useState)({min:0,max:10,num:0}),d=Object(i.a)(b,2),j=d[0],O=d[1];Object(s.useEffect)((function(){var e=localStorage.getItem("values");if(e){var t=JSON.parse(e);t.num=JSON.parse(e).min,O(t)}}),[]),Object(s.useEffect)((function(){localStorage.setItem("values",JSON.stringify(j))}),[j]);var v=function(t,n){var s=Object(u.a)({},j);if(n==a.nameMax&&O(Object(u.a)(Object(u.a)({},s),{},{max:t})),n==a.nameMin){var c=Object(u.a)(Object(u.a)({},j),{},{min:t});O(Object(u.a)({},c))}if(n==e.button){var i=Object(u.a)(Object(u.a)({},j),{},{num:t});O(Object(u.a)({},i))}},p=function(e){var s=Object(u.a)({},j);e===t&&j.num<j.max&&O(Object(u.a)(Object(u.a)({},s),{},{num:j.num+1})),e===n&&O(Object(u.a)(Object(u.a)({},s),{},{num:j.min}))};return Object(m.jsx)(g.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"block",children:[Object(m.jsx)(g.b,{to:"/ClaudFive/",children:Object(m.jsx)("button",{className:"select",children:"First_option"})}),Object(m.jsx)(g.b,{to:"/SecondVar/",children:Object(m.jsx)("button",{className:"select",children:"Second_option"})})]}),Object(m.jsxs)(_.c,{children:[Object(m.jsx)(_.a,{path:"/ClaudFive",element:Object(m.jsx)(h,{counterValue:j,buttonName:e,namesValue:a,setOfButton:v,setCounterValue:O,setDispleys:r,displey:l,buttonSetInc:p})}),Object(m.jsx)(_.a,{path:"/SecondVar",element:Object(m.jsx)(y,{counterValue:j,buttonName:e,namesValue:a,setOfButton:v,setCounterValue:O,setDispleys:r,displey:l,buttonSetInc:p})})]})]})})};c.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))},5:function(e,t,n){e.exports={item:"SetCloud_item__Xo9gz",div:"SetCloud_div__10FXc",displey:"SetCloud_displey__31L1i",button:"SetCloud_button__WX6iT",setCoumter:"SetCloud_setCoumter__26mm-",redStyle:"SetCloud_redStyle__3fEwZ",stylesInput:"SetCloud_stylesInput__1Vy6o"}},8:function(e,t,n){e.exports={buttonSet:"Ferst_buttonSet__2iAw-",disabled:"Ferst_disabled__1SUKq",redFive:"Ferst_redFive__2b403",div:"Ferst_div__sKDBO",divSet:"Ferst_divSet__19U-Y",counter:"Ferst_counter__2BsHd"}}},[[21,1,2]]]);
//# sourceMappingURL=main.ffa52482.chunk.js.map