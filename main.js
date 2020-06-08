!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r={datasets:[{data:[184.6,184.8,184.8,187.4,184,183.2],label:"Weight over time",borderColor:"rgb(106, 212, 134)",fill:!1,yAxisID:"left-y-axis"},{data:[3508,3275,3316,3209,3228,3239],label:"Calories over time",borderColor:"rgb(15, 100, 200)",fill:!1,yAxisID:"right-y-axis"}],labels:["Jan","Feb","Mar","Apr","May","Jun"]};const o=document.getElementById("lineChart"),i=new Chart(o,{type:"line",data:r,options:{scales:{yAxes:[{id:"left-y-axis",type:"linear",position:"left",ticks:{}},{id:"right-y-axis",type:"linear",position:"right",ticks:{},gridLines:{display:!1}}]}}});let l=[],a=[],d=[],c=[],s={datasets:[{data:a,label:"Weight over time",borderColor:"rgb(106, 212, 134)",fill:!1,yAxisID:"left-y-axis"},{data:d,label:"Calories over time",borderColor:"rgb(15, 100, 200)",fill:!1,yAxisID:"right-y-axis"}],labels:c};const u=()=>{a.splice(0,a.length),d.splice(0,d.length),c.splice(0,c.length),l.forEach(e=>{a.push(e.weight),d.push(e.calorie),c.push(e.date)}),i.data=s,i.update()},m=(()=>{const e=()=>{document.querySelectorAll(".removeButton").forEach(t=>{t.addEventListener("click",()=>{e(t.parentElement.parentElement)})});const e=e=>{const t=e.children[0].innerHTML;e.parentElement.parentElement.deleteRow(e.rowIndex);for(let e=0;e<l.length;e++)l[e].date==t&&l.splice(e,1);u()}};return{render:t=>{let n="";for(let e of t)n+=`<tr><td>${e.date}</td>\n                         <td>${e.weight}</td>\n                         <td>${e.calorie}</td>\n                         <td>${e.exercise}</td>\n                         <td>${e.protein}</td>\n                         <td class = "editOuter><div class = "editButton">Edit</div></td>\n                         <td class = "removeOuter"><div class = "removeButton">X</div></td>\n                     </tr>\n                    `;document.querySelector("tbody").innerHTML=n,e()}}})(),p=(()=>{const e=()=>{document.getElementById("formContainer").remove(),document.getElementById("overlay").style.display="none"},t=(e,t)=>{const n=["weightTextBox","calorieTextBox","exerciseTextBox","proteinTextBox"];let r;if(""==e)return document.getElementById("formDate").style.background="rgb(250, 149, 149)",!1;for(let e=0;e<t.length;e++)""!=t[e]&&(isNaN(t[e])||t[e]<0?(document.getElementById(n[e]).style.borderColor="red",r=!1):document.getElementById(n[e]).style.borderColor="black");return 0!=r||(alert("Make sure you have a date selected and that you only have positive numbers in each text box."),!1)},n=e=>{for(let t=0;t<e.length;t++)"."==e[t].slice(e[t].length-1)&&(e[t]=e[t].slice(0,-1))};return{submitButtonPress:()=>{const r=document.getElementById("formDate").value,o=[document.getElementById("weightTextBox").value,document.getElementById("calorieTextBox").value,document.getElementById("exerciseTextBox").value,document.getElementById("proteinTextBox").value];if(!t(r,o))return;n(o);const i=((e,t)=>({date:e,weight:t[0],calorie:t[1],exercise:t[2],protein:t[3]}))(r,o);l.push(i),l.sort((e,t)=>e.date-t.date),u(),m.render(l),e()},isNumberKey:(e,t)=>{const n=t.which?t.which:t.keyCode;return 46==n?-1===e.indexOf("."):!(46!=n&&n>31&&(n<48||n>57))}}})(),y=()=>{document.getElementById("formContainer").remove(),document.getElementById("overlay").style.display="none"},g=e=>{[["weight","Weight","weightTextBox"],["calorie","Calorie Intake","calorieTextBox"],["exercise","Exercise Calories","exerciseTextBox"],["protein","Protein Intake","proteinTextBox"]].forEach(t=>{const n=document.createElement("div");n.className="titleTextContainer",n.id=t[0]+"Container";const r=document.createElement("div");r.className="formSubtitle",r.innerHTML=t[1],n.appendChild(r);const o=document.createElement("input");o.setAttribute("type","text"),o.id=t[2],o.className="formTextBox",o.onkeypress=()=>p.isNumberKey(event.target.value,event),"weight"==t[0]?o.placeholder="in lbs":"protein"==t[0]&&(o.placeholder="in grams"),n.appendChild(o),e.appendChild(n)})};document.getElementById("createFormButton").addEventListener("click",()=>{(()=>{document.getElementById("overlay").style.display="block";const e=document.createElement("div");e.id="formContainer";const t=document.createElement("div");t.id="formTitle",t.innerHTML="Input Form",e.appendChild(t);const n=document.createElement("div");n.id="formDateContainer",e.appendChild(n);const r=document.createElement("input");r.setAttribute("type","date"),r.id="formDate",r.addEventListener("change",()=>{document.getElementById("formDate").style.background="white"}),n.appendChild(r),g(e);const o=document.createElement("div");o.id="buttonContainer",e.appendChild(o);const i=document.createElement("button");i.id="submitButton",i.innerHTML="Submit",i.addEventListener("click",p.submitButtonPress),o.appendChild(i);const l=document.createElement("button");l.id="cancelButton",l.innerHTML="Cancel",l.addEventListener("click",()=>{y()}),o.appendChild(l),document.getElementById("main").appendChild(e)})()});const f=document.getElementsByClassName("btns");for(let e=0;e<f.length;e++)f[e].addEventListener("click",(function(){const e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"}))}]);