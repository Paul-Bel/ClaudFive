(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={item:"ClaudCounter_item__2vEGf",displey:"ClaudCounter_displey__3tp1O",button:"ClaudCounter_button__13MKi"}},13:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(14),u=n.n(s),c=(n(19),n(3)),o=n(5),i=(n(13),n(7)),l=n(6),r=n.n(l),b=n(8),m=n.n(b),j=n(1);function d(e){var t=e.num,n=e.min,a=e.max,s=e.buttonName,u=e.name,c=Object(i.a)(e,["num","min","max","buttonName","name"]);return Object(j.jsx)("button",{className:m.a.buttonSet,disabled:u===s.buttonOne&&!c.display||u===s.buttonTwo&&!c.display||u===s.button&&c.display||u===s.buttonOne&&t===a||u===s.buttonTwo&&t===n||-1===n||n===a,onClick:function(){c.buttonControl&&c.buttonControl(),c.setButton&&c.setButton(),c.changeSettings&&c.changeSettings()},children:u})}var O=function(e){var t=e.counterValue,n=Object(i.a)(e,["counterValue"]),a=t.min,s=t.max,u=function(){n.setDispleys(!1)},c=n.namesValue,o=c.nameMax,l=c.nameMin,b=function(e){e.currentTarget.id==o&&n.setOfButton(e.currentTarget.valueAsNumber,o),e.currentTarget.id==l&&n.setOfButton(Number(e.currentTarget.value),l)};return Object(j.jsxs)("div",{className:r.a.item,children:[Object(j.jsxs)("div",{className:r.a.displey,children:[Object(j.jsxs)("div",{className:r.a.setCoumter,children:[Object(j.jsx)("div",{children:o}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:a===s?r.a.redStyle:r.a.stylesInput,min:a,id:o,value:s,onChange:b,type:"number",onClick:u})})]}),Object(j.jsxs)("div",{className:r.a.setCoumter,children:[Object(j.jsx)("div",{children:l}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:a===s||-1===a?r.a.redStyle:r.a.stylesInput,id:l,value:a,onChange:b,type:"number",min:-1,max:s,onClick:u})})]})]}),Object(j.jsx)("div",{className:r.a.button,children:Object(j.jsx)(d,{min:a,max:s,buttonName:n.buttonName,setButton:function(){n.setDispleys(!0),n.setOfButton(a,n.buttonName.button),n.changeSettings&&n.changeSettings()},name:n.buttonName.button,changeSettings:n.changeSettings})})]})},x=n(10),p=n.n(x);function v(e){var t=e.min,n=e.max,a=Object(i.a)(e,["min","max"]);return Object(j.jsx)("div",{className:a.num===n?m.a.redFive:m.a.counter,children:a.displey?a.num:t===n||-1===t||t>n?Object(j.jsx)("div",{className:m.a.divSet,children:"Error enter correct value"}):Object(j.jsx)("div",{className:m.a.divSet,children:"enter value"})})}function h(e){var t=e.buttonName,n=e.counterValue,a=Object(i.a)(e,["buttonName","counterValue"]);return Object(j.jsxs)("div",{className:p.a.item,children:[Object(j.jsx)("div",{className:p.a.displey,children:Object(j.jsx)(v,{min:n.min,max:n.max,num:n.num,displey:a.displey})}),Object(j.jsxs)("div",{className:p.a.button,children:[Object(j.jsx)(d,{num:n.num,buttonControl:function(){return a.buttonControl(t.buttonOne)},min:n.min,max:n.max,buttonName:t,display:a.displey,name:t.buttonOne}),Object(j.jsx)(d,{num:n.num,buttonControl:function(){return a.buttonControl(t.buttonTwo)},min:n.min,max:n.max,buttonName:t,display:a.displey,name:t.buttonTwo}),a.id&&Object(j.jsx)(d,{buttonName:t,changeSettings:a.changeSettings,name:t.button,num:n.num,id:a.id,min:n.min,max:n.max})]})]})}var y=function(e){return Object(j.jsxs)("div",{className:"conteiner",children:[Object(j.jsx)("div",{children:Object(j.jsx)(O,{counterValue:e.counterValue,buttonName:e.buttonName,namesValue:e.namesValue,changeInc:e.changeInc,setOfButton:e.setOfButton,setCounterValue:e.setCounterValue,setDispleys:e.setDispleys,displey:e.displey})}),Object(j.jsx)("div",{children:Object(j.jsx)(h,{counterValue:e.counterValue,buttonControl:e.buttonControl,buttonName:e.buttonName,displey:e.displey})})]})},N=n(11),f=n(2),_=function(e){var t=Object(a.useState)(!0),n=Object(o.a)(t,2),s=n[0],u=n[1],c=function(){u(!s)};return Object(j.jsx)("div",{className:"conteiner",children:s?Object(j.jsx)(h,{id:s,counterValue:e.counterValue,buttonControl:e.buttonControl,buttonName:e.buttonName,displey:e.displey,changeSettings:c}):Object(j.jsx)(O,{counterValue:e.counterValue,buttonName:e.buttonName,namesValue:e.namesValue,changeInc:e.changeInc,setOfButton:e.setOfButton,setCounterValue:e.setCounterValue,setDispleys:e.setDispleys,displey:e.displey,id:s,changeSettings:c})})};var C=function(){var e={buttonOne:"INC",buttonTwo:"RESET",button:"SET"},t=e.buttonOne,n=e.buttonTwo,s={nameMax:"Max Value",nameMin:"Min Value"},u=Object(a.useState)(!0),i=Object(o.a)(u,2),l=i[0],r=i[1];console.log(l+" znach");var b=Object(a.useState)({min:0,max:10,num:0}),m=Object(o.a)(b,2),d=m[0],O=m[1];Object(a.useEffect)((function(){var e=localStorage.getItem("values");if(e){var t=JSON.parse(e);t.num=JSON.parse(e).min,O(t)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("values",JSON.stringify(d))}),[d]);var x=function(t,n){var a=Object(c.a)({},d);if(n==s.nameMax&&O(Object(c.a)(Object(c.a)({},a),{},{max:t})),n==s.nameMin){var u=Object(c.a)(Object(c.a)({},d),{},{min:t});O(Object(c.a)({},u))}if(n==e.button){var o=Object(c.a)(Object(c.a)({},d),{},{num:t});O(Object(c.a)({},o))}},p=function(e,t){var n=Object(c.a)({},d);t===s.nameMax&&O(Object(c.a)(Object(c.a)({},n),{},{max:e})),t===s.nameMin&&O(Object(c.a)(Object(c.a)({},n),{},{min:e}))},v=function(e){var a=Object(c.a)({},d);e===t&&d.num<d.max&&O(Object(c.a)(Object(c.a)({},a),{},{num:d.num+1})),e===n&&O(Object(c.a)(Object(c.a)({},a),{},{num:d.min}))};return Object(j.jsx)(N.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)(N.b,{to:"/FirsVar/",children:Object(j.jsx)("button",{className:"select",children:"First_option"})}),Object(j.jsx)(N.b,{to:"/SecondVar/",children:Object(j.jsx)("button",{className:"select",children:"Second_option"})})]}),Object(j.jsxs)(f.c,{children:[Object(j.jsx)(f.a,{path:"/FirsVar",element:Object(j.jsx)(y,{counterValue:d,buttonName:e,namesValue:s,changeInc:p,setOfButton:x,setCounterValue:O,setDispleys:r,displey:l,buttonControl:v})}),Object(j.jsx)(f.a,{path:"/SecondVar",element:Object(j.jsx)(_,{counterValue:d,buttonName:e,namesValue:s,changeInc:p,setOfButton:x,setCounterValue:O,setDispleys:r,displey:l,buttonControl:v})})]})]})})};u.a.render(Object(j.jsx)(C,{}),document.getElementById("root"))},6:function(e,t,n){e.exports={item:"SetCloud_item__Xo9gz",displey:"SetCloud_displey__31L1i",button:"SetCloud_button__WX6iT",setCoumter:"SetCloud_setCoumter__26mm-",redStyle:"SetCloud_redStyle__3fEwZ",stylesInput:"SetCloud_stylesInput__1Vy6o"}},8:function(e,t,n){e.exports={buttonSet:"Ferst_buttonSet__2iAw-",redFive:"Ferst_redFive__2b403",div:"Ferst_div__sKDBO",divSet:"Ferst_divSet__19U-Y",counter:"Ferst_counter__2BsHd"}}},[[21,1,2]]]);
//# sourceMappingURL=main.64cf6e52.chunk.js.map