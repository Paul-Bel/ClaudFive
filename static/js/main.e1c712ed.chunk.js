(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={item:"ClaudCounter_item__2vEGf",displey:"ClaudCounter_displey__3tp1O",button:"ClaudCounter_button__13MKi"}},13:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(14),u=n.n(s),c=(n(19),n(3)),o=n(6),i=(n(13),n(7)),l=n(5),r=n.n(l),b=n(8),m=n.n(b),d=n(1);function j(e){var t=e.num,n=e.min,a=e.max,s=e.buttonName,u=e.name,c=Object(i.a)(e,["num","min","max","buttonName","name"]),o=u===s.buttonTwo&&!c.display||u===s.button&&c.display||u===s.buttonOne&&t===a||u===s.buttonTwo&&t===n||-1===n||n===a;return Object(d.jsx)("button",{className:o?m.a.disabled:m.a.buttonSet,disabled:o,onClick:function(){c.buttonControl&&c.buttonControl(),c.setButton&&c.setButton(),c.changeSettings&&c.changeSettings()},children:u})}var O=function(e){var t=e.counterValue,n=Object(i.a)(e,["counterValue"]),a=t.min,s=t.max,u=function(){n.setDispleys(!1)},c=n.namesValue,o=c.nameMax,l=c.nameMin,b=function(e){e.currentTarget.id==o&&n.setOfButton(e.currentTarget.valueAsNumber,o),e.currentTarget.id==l&&n.setOfButton(Number(e.currentTarget.value),l)};return Object(d.jsxs)("div",{className:r.a.item,children:[Object(d.jsxs)("div",{className:r.a.displey,children:[Object(d.jsxs)("div",{className:r.a.setCoumter,children:[Object(d.jsx)("div",{className:r.a.div,children:o}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{className:a===s?r.a.redStyle:r.a.stylesInput,min:a,id:o,value:s,onChange:b,type:"number",onClick:u})})]}),Object(d.jsxs)("div",{className:r.a.setCoumter,children:[Object(d.jsx)("div",{className:r.a.div,children:l}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{className:a===s||-1===a?r.a.redStyle:r.a.stylesInput,id:l,value:a,onChange:b,type:"number",min:-1,max:s,onClick:u})})]})]}),Object(d.jsx)("div",{className:r.a.button,children:Object(d.jsx)(j,{min:a,max:s,buttonName:n.buttonName,setButton:function(){n.setDispleys(!0),n.setOfButton(a,n.buttonName.button),n.changeSettings&&n.changeSettings()},name:n.buttonName.button,changeSettings:n.changeSettings})})]})},x=n(10),v=n.n(x);function p(e){var t=e.min,n=e.max,a=Object(i.a)(e,["min","max"]);return Object(d.jsx)("div",{className:a.num===n?m.a.redFive:m.a.counter,children:a.displey?a.num:t===n||-1===t||t>n?Object(d.jsx)("div",{className:m.a.divSet,children:"Error enter correct value"}):Object(d.jsx)("div",{className:m.a.divSet,children:"enter value"})})}function h(e){var t=e.buttonName,n=e.counterValue,a=Object(i.a)(e,["buttonName","counterValue"]);return Object(d.jsxs)("div",{className:v.a.item,children:[Object(d.jsx)("div",{className:v.a.displey,children:Object(d.jsx)(p,{min:n.min,max:n.max,num:n.num,displey:a.displey})}),Object(d.jsxs)("div",{className:v.a.button,children:[Object(d.jsx)(j,{num:n.num,buttonControl:function(){return a.buttonControl(t.buttonOne)},min:n.min,max:n.max,buttonName:t,display:a.displey,name:t.buttonOne}),Object(d.jsx)(j,{num:n.num,buttonControl:function(){return a.buttonControl(t.buttonTwo)},min:n.min,max:n.max,buttonName:t,display:a.displey,name:t.buttonTwo}),a.id&&Object(d.jsx)(j,{buttonName:t,changeSettings:a.changeSettings,name:t.button,num:n.num,id:a.id,min:n.min,max:n.max})]})]})}var _=function(e){return Object(d.jsxs)("div",{className:"conteiner",children:[Object(d.jsx)("div",{children:Object(d.jsx)(O,{counterValue:e.counterValue,buttonName:e.buttonName,namesValue:e.namesValue,changeInc:e.changeInc,setOfButton:e.setOfButton,setCounterValue:e.setCounterValue,setDispleys:e.setDispleys,displey:e.displey})}),Object(d.jsx)("div",{children:Object(d.jsx)(h,{counterValue:e.counterValue,buttonControl:e.buttonControl,buttonName:e.buttonName,displey:e.displey})})]})},N=n(11),y=n(2),f=function(e){var t=Object(a.useState)(!0),n=Object(o.a)(t,2),s=n[0],u=n[1],c=function(){u(!s)};return Object(d.jsx)("div",{className:"conteiner",children:s?Object(d.jsx)(h,{id:s,counterValue:e.counterValue,buttonControl:e.buttonControl,buttonName:e.buttonName,displey:e.displey,changeSettings:c}):Object(d.jsx)(O,{counterValue:e.counterValue,buttonName:e.buttonName,namesValue:e.namesValue,changeInc:e.changeInc,setOfButton:e.setOfButton,setCounterValue:e.setCounterValue,setDispleys:e.setDispleys,displey:e.displey,id:s,changeSettings:c})})};var C=function(){var e={buttonOne:"INC",buttonTwo:"RESET",button:"SET"},t=e.buttonOne,n=e.buttonTwo,s={nameMax:"Max Value",nameMin:"Min Value"},u=Object(a.useState)(!0),i=Object(o.a)(u,2),l=i[0],r=i[1];console.log(l+" znach");var b=Object(a.useState)({min:0,max:10,num:0}),m=Object(o.a)(b,2),j=m[0],O=m[1];Object(a.useEffect)((function(){var e=localStorage.getItem("values");if(e){var t=JSON.parse(e);t.num=JSON.parse(e).min,O(t)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("values",JSON.stringify(j))}),[j]);var x=function(t,n){var a=Object(c.a)({},j);if(n==s.nameMax&&O(Object(c.a)(Object(c.a)({},a),{},{max:t})),n==s.nameMin){var u=Object(c.a)(Object(c.a)({},j),{},{min:t});O(Object(c.a)({},u))}if(n==e.button){var o=Object(c.a)(Object(c.a)({},j),{},{num:t});O(Object(c.a)({},o))}},v=function(e,t){var n=Object(c.a)({},j);t===s.nameMax&&O(Object(c.a)(Object(c.a)({},n),{},{max:e})),t===s.nameMin&&O(Object(c.a)(Object(c.a)({},n),{},{min:e}))},p=function(e){var a=Object(c.a)({},j);e===t&&j.num<j.max&&O(Object(c.a)(Object(c.a)({},a),{},{num:j.num+1})),e===n&&O(Object(c.a)(Object(c.a)({},a),{},{num:j.min}))};return Object(d.jsx)(N.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"block",children:[Object(d.jsx)(N.b,{to:"/ClaudFive/",children:Object(d.jsx)("button",{className:"select",children:"First_option"})}),Object(d.jsx)(N.b,{to:"/SecondVar/",children:Object(d.jsx)("button",{className:"select",children:"Second_option"})})]}),Object(d.jsxs)(y.c,{children:[Object(d.jsx)(y.a,{path:"/ClaudFive",element:Object(d.jsx)(_,{counterValue:j,buttonName:e,namesValue:s,changeInc:v,setOfButton:x,setCounterValue:O,setDispleys:r,displey:l,buttonControl:p})}),Object(d.jsx)(y.a,{path:"/SecondVar",element:Object(d.jsx)(f,{counterValue:j,buttonName:e,namesValue:s,changeInc:v,setOfButton:x,setCounterValue:O,setDispleys:r,displey:l,buttonControl:p})})]})]})})};u.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))},5:function(e,t,n){e.exports={item:"SetCloud_item__Xo9gz",div:"SetCloud_div__10FXc",displey:"SetCloud_displey__31L1i",button:"SetCloud_button__WX6iT",setCoumter:"SetCloud_setCoumter__26mm-",redStyle:"SetCloud_redStyle__3fEwZ",stylesInput:"SetCloud_stylesInput__1Vy6o"}},8:function(e,t,n){e.exports={buttonSet:"Ferst_buttonSet__2iAw-",disabled:"Ferst_disabled__1SUKq",redFive:"Ferst_redFive__2b403",div:"Ferst_div__sKDBO",divSet:"Ferst_divSet__19U-Y",counter:"Ferst_counter__2BsHd"}}},[[21,1,2]]]);
//# sourceMappingURL=main.e1c712ed.chunk.js.map