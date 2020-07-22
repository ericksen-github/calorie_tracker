!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r={datasets:[{data:[184.6,184.8,184.8,187.4,184,183.2],label:"Weight over time",borderColor:"rgb(106, 212, 134)",fill:!1,yAxisID:"left-y-axis"},{data:[3508,3275,3316,3209,3228,3239],label:"Calories over time",borderColor:"rgb(15, 100, 200)",fill:!1,yAxisID:"right-y-axis"}],labels:["Jan","Feb","Mar","Apr","May","Jun"]};const o=document.getElementById("lineChart"),a=new Chart(o,{type:"line",data:r,options:{scales:{yAxes:[{id:"left-y-axis",type:"linear",position:"left",ticks:{}},{id:"right-y-axis",type:"linear",position:"right",ticks:{},gridLines:{display:!1}}]}}}),i=(e,t)=>({date:e,weight:t[0],calorie:t[1],exercise:t[2],protein:t[3]});let l=[];const d=["Weight","Calories","Exercise Calories","Protein"],s=["weight","calorie","exercise","protein"],c=["rgb(106, 212, 134)","rgb(15, 100, 200)","rgb(102, 57, 133)","rgb(110, 40, 40)"];let u,m,p,y;const h=(()=>{const e=e=>{let t=[],r=[];const o=s[e];l.forEach(e=>{t.push(e[o]),r.push(e.date)}),u=d[e],p=c[e],n(t,r)},t=()=>{let e=[],t=[],n=[];l.forEach(r=>{e.push(r.weight),t.push(r.calorie),n.push(r.date)}),u=d[0],m=d[1],p=c[0],y=c[1],r(e,t,n)},n=(e,t)=>{const n={datasets:[{data:e,label:[u],borderColor:p,fill:!1}],labels:t};a.data=n,a.options={scales:{yAxes:[{ticks:{}}]}}},r=(e,t,n)=>{const r={datasets:[{data:e,label:u,borderColor:p,fill:!1,yAxisID:"left-y-axis"},{data:t,label:m,borderColor:y,fill:!1,yAxisID:"right-y-axis"}],labels:n};a.data=r,a.options={scales:{yAxes:[{id:"left-y-axis",type:"linear",position:"left",ticks:{}},{id:"right-y-axis",type:"linear",position:"right",ticks:{},gridLines:{display:!1}}]}}};return{selectGraph:()=>{const n=document.getElementsByClassName("active")[0].id;"weightButton"==n?e(0):"caloriesButton"==n?e(1):"exerciseButton"==n?e(2):"proteinButton"==n?e(3):"weightAndCalories"==n&&t(),a.update()}}})(),g=(()=>{const e=()=>{"newest"==t?l.sort((function(e,t){return new Date(e.date)-new Date(t.date)})):l.sort((function(e,t){var n=new Date(e.date);return new Date(t.date)-n}))};let t="newest";const n=()=>{document.querySelectorAll(".removeButton").forEach(t=>{t.addEventListener("click",()=>{e(t.parentElement.parentElement)})});const e=e=>{const t=e.children[0].innerHTML;e.parentElement.parentElement.deleteRow(e.rowIndex);for(let e=0;e<l.length;e++)l[e].date==t&&l.splice(e,1);h.selectGraph()}};return{sortTable:e,checkTracker:()=>{t="newest"==t?"oldest":"newest",e()},render:()=>{let e="";for(let t of l)e+=`<tr><td>${t.date}</td>\n                         <td>${t.weight}</td>\n                         <td>${t.calorie}</td>\n                         <td>${t.exercise}</td>\n                         <td>${t.protein}</td>\n                         <td class = "editOuter"><div class = "editButton">Edit</div></td>\n                         <td class = "removeOuter"><div class = "removeButton">X</div></td>\n                     </tr>\n                    `;document.querySelector("tbody").innerHTML=e,n(),h.selectGraph()}}})(),f=(()=>{const e=()=>{document.getElementById("formContainer").remove(),document.getElementById("overlay").style.display="none"},t=(e,t)=>{const n=["weightTextBox","calorieTextBox","exerciseTextBox","proteinTextBox"];let o;for(let e=0;e<t.length;e++)""!=t[e]&&(isNaN(t[e])||t[e]<0?(document.getElementById(n[e]).style.borderColor="red",o=!1):document.getElementById(n[e]).style.borderColor="black");return r(e)||(o=!1),0!=o||(alert("Make sure you have a date selected and that you only have positive numbers in each text box."),!1)},n=e=>{for(let t=0;t<e.length;t++)e[t]=Math.round(10*e[t])/10},r=e=>""!=e||(document.getElementById("formDate").style.background="rgb(250, 149, 149)",!1),o=e=>{for(let t=0;t<l.length;t++)if(l[t].date==e){l.splice(t,1);break}},a=e=>{let t;for(let n=0;n<l.length;n++)if(l[n].date==e){t=n;break}if(l[t-1]){const e=new Date(l[t].date),n=new Date(l[t-1].date);let r=Math.round(Math.abs((e-n)/864e5));r>1&&d(t,r,864e5)}},d=(e,t,n)=>{for(;t>1;){const r=new Date(l[e].date);let o=new Date(l[e-1].date);o.setDate(o.getDate()+1);let a=o.getUTCMonth()+1;const d=o.getUTCDate(),s=o.getUTCFullYear();a<10&&(a="0"+a),o=s+"-"+a+"-"+d;const c=i(o,[0,0,0,0]);l.push(c),g.sortTable(),o=new Date(o),t=Math.round(Math.abs((r-o)/n))}};return{submitButtonPress:()=>{const r=document.getElementById("formDate").value,d=[document.getElementById("weightTextBox").value,document.getElementById("calorieTextBox").value,document.getElementById("exerciseTextBox").value,document.getElementById("proteinTextBox").value];if(!t(r,d))return;o(r),n(d);const s=i(r,d);l.push(s),a(r),g.render(),e()},isNumberKey:(e,t)=>{const n=t.which?t.which:t.keyCode;return 46==n?-1===e.indexOf("."):!(46!=n&&n>31&&(n<48||n>57))}}})(),b=()=>{document.getElementById("formContainer").remove(),document.getElementById("overlay").style.display="none"},x=e=>{[["weight","Weight","weightTextBox"],["calorie","Calorie Intake","calorieTextBox"],["exercise","Exercise Calories","exerciseTextBox"],["protein","Protein Intake","proteinTextBox"]].forEach(t=>{const n=document.createElement("div");n.className="titleTextContainer",n.id=t[0]+"Container";const r=document.createElement("div");r.className="formSubtitle",r.innerHTML=t[1],n.appendChild(r);const o=document.createElement("input");o.setAttribute("type","text"),o.id=t[2],o.className="formTextBox",o.onkeypress=()=>f.isNumberKey(event.target.value,event),"weight"==t[0]?o.placeholder="in lbs":"protein"==t[0]&&(o.placeholder="in grams"),n.appendChild(o),e.appendChild(n)})};document.getElementById("createFormButton").addEventListener("click",()=>{(()=>{document.getElementById("overlay").style.display="block";const e=document.createElement("div");e.id="formContainer";const t=document.createElement("div");t.id="formTitle",t.innerHTML="Input Form",e.appendChild(t);const n=document.createElement("div");n.id="formDateContainer",e.appendChild(n);const r=document.createElement("input");r.setAttribute("type","date"),r.id="formDate",r.addEventListener("change",()=>{document.getElementById("formDate").style.background="white"}),n.appendChild(r),x(e);const o=document.createElement("div");o.id="buttonContainer",e.appendChild(o);const a=document.createElement("button");a.id="submitButton",a.innerHTML="Submit",a.addEventListener("click",f.submitButtonPress),o.appendChild(a);const i=document.createElement("button");i.id="cancelButton",i.innerHTML="Cancel",i.addEventListener("click",()=>{b()}),o.appendChild(i),document.getElementById("main").appendChild(e)})()});const v=document.getElementsByClassName("btns");for(let e=0;e<v.length;e++)v[e].addEventListener("click",(function(){const e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active",h.selectGraph()}));document.getElementById("dateHeader").addEventListener("click",()=>{g.checkTracker()})}]);