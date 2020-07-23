!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r={datasets:[{data:[184.6,184.8,184.8,187.4,184,183.2],label:"Weight over time",borderColor:"rgb(106, 212, 134)",fill:!1,yAxisID:"left-y-axis"},{data:[3508,3275,3316,3209,3228,3239],label:"Calories over time",borderColor:"rgb(15, 100, 200)",fill:!1,yAxisID:"right-y-axis"}],labels:["Jan","Feb","Mar","Apr","May","Jun"]};const o=document.getElementById("lineChart"),l=new Chart(o,{type:"line",data:r,options:{scales:{yAxes:[{id:"left-y-axis",type:"linear",position:"left",ticks:{}},{id:"right-y-axis",type:"linear",position:"right",ticks:{},gridLines:{display:!1}}]}}}),a=(e,t)=>({date:e,weight:t[0],calorie:t[1],exercise:t[2],protein:t[3]});let i=[];const d=["Weight","Calories","Exercise Calories","Protein"],s=["weight","calorie","exercise","protein"],c=["rgb(106, 212, 134)","rgb(15, 100, 200)","rgb(102, 57, 133)","rgb(110, 40, 40)"];let u,m,p,y;const h=(()=>{const e=e=>{let t=[],r=[];const l=s[e];i.forEach(e=>{t.push(e[l]),r.push(o(e.date))}),u=d[e],p=c[e],n(t,r)},t=()=>{let e=[],t=[],n=[];i.forEach(r=>{e.push(r.weight),t.push(r.calorie),n.push(o(r.date))}),u=d[0],m=d[1],p=c[0],y=c[1],r(e,t,n)},n=(e,t)=>{const n={datasets:[{data:e,label:[u],borderColor:p,fill:!1}],labels:t};l.data=n,l.options={spanGaps:!0,scales:{yAxes:[{ticks:{}}]}}},r=(e,t,n)=>{const r={datasets:[{data:e,label:u,borderColor:p,fill:!1,yAxisID:"left-y-axis"},{data:t,label:m,borderColor:y,fill:!1,yAxisID:"right-y-axis"}],labels:n};l.data=r,l.options={scales:{yAxes:[{id:"left-y-axis",type:"linear",position:"left",ticks:{}},{id:"right-y-axis",type:"linear",position:"right",ticks:{},gridLines:{display:!1}}]}}},o=e=>(0==(e=e.slice(5)).charAt(0)&&(e=e.slice(1)),e);return{selectGraph:()=>{const n=document.getElementsByClassName("active")[0].id;"weightButton"==n?e(0):"caloriesButton"==n?e(1):"exerciseButton"==n?e(2):"proteinButton"==n?e(3):"weightAndCalories"==n&&t(),l.update()}}})(),g=(()=>{let e="newest";const t=()=>{"newest"==e?i.sort((function(e,t){return new Date(e.date)-new Date(t.date)})):i.sort((function(e,t){var n=new Date(e.date);return new Date(t.date)-n}))},n=e=>{if(null==e.weight&&null==e.calorie&&null==e.exercise&&null==e.protein)return!0},r=(e,t,n,r,o)=>[null==e.weight?"":e.weight,null==e.calorie?"":e.calorie,null==e.exercise?"":e.exercise,null==e.protein?"":e.protein],o=()=>{document.querySelectorAll(".removeButton").forEach(t=>{t.addEventListener("click",()=>{e(t.parentElement.parentElement)})});const e=e=>{const t=e.children[0].innerHTML;e.parentElement.parentElement.deleteRow(e.rowIndex);for(let e=0;e<i.length;e++)i[e].date==t&&i.splice(e,1);h.selectGraph()}};return{sortTable:t,checkTracker:()=>{e="newest"==e?"oldest":"newest",t()},render:()=>{let e="";for(let t of i){if(n(t))continue;let o,l,a,i;[o,l,a,i]=r(t,o,l,a,i),e+=`<tr><td>${t.date}</td>\n                         <td>${o}</td>\n                         <td>${l}</td>\n                         <td>${a}</td>\n                         <td>${i}</td>\n                         <td class = "editOuter"><div class = "editButton">Edit</div></td>\n                         <td class = "removeOuter"><div class = "removeButton">X</div></td>\n                     </tr>\n                    `}document.querySelector("tbody").innerHTML=e,o(),h.selectGraph()}}})(),f=(()=>{const e=()=>{document.getElementById("formContainer").remove(),document.getElementById("overlay").style.display="none"},t=(e,t)=>{const n=["weightTextBox","calorieTextBox","exerciseTextBox","proteinTextBox"];let o;for(let e=0;e<t.length;e++)""!=t[e]&&(isNaN(t[e])||t[e]<0?(document.getElementById(n[e]).style.borderColor="red",o=!1):document.getElementById(n[e]).style.borderColor="black");return r(e)||(o=!1),0!=o||(alert("Make sure you have a date selected and that you only have positive numbers in each text box."),!1)},n=e=>{for(let t=0;t<e.length;t++)e[t]=Math.round(10*e[t])/10,0==e[t]&&(e[t]=null)},r=e=>""!=e||(document.getElementById("formDate").style.background="rgb(250, 149, 149)",!1),o=e=>{for(let t=0;t<i.length;t++)if(i[t].date==e){i.splice(t,1);break}},l=e=>{let t;for(let n=0;n<i.length;n++)if(i[n].date==e){t=n;break}if(i[t-1]){const e=new Date(i[t].date),n=new Date(i[t-1].date);let r=Math.round(Math.abs((e-n)/864e5));r>1&&d(t,r,864e5)}},d=(e,t,n)=>{for(;t>1;){const r=new Date(i[e].date);let o=new Date(i[e-1].date);o.setDate(o.getDate()+1);let l=o.getUTCMonth()+1;const d=o.getUTCDate(),s=o.getUTCFullYear();l<10&&(l="0"+l),o=s+"-"+l+"-"+d;const c=a(o,[null,null,null,null]);i.push(c),g.sortTable(),o=new Date(o),t=Math.round(Math.abs((r-o)/n))}};return{submitButtonPress:()=>{const r=document.getElementById("formDate").value,d=[document.getElementById("weightTextBox").value,document.getElementById("calorieTextBox").value,document.getElementById("exerciseTextBox").value,document.getElementById("proteinTextBox").value];if(!t(r,d))return;o(r),n(d);const s=a(r,d);i.push(s),l(r),g.render(),e()},isNumberKey:(e,t)=>{const n=t.which?t.which:t.keyCode;return 46==n?-1===e.indexOf("."):!(46!=n&&n>31&&(n<48||n>57))}}})(),x=()=>{document.getElementById("formContainer").remove(),document.getElementById("overlay").style.display="none"},b=e=>{[["weight","Weight","weightTextBox"],["calorie","Calorie Intake","calorieTextBox"],["exercise","Exercise Calories","exerciseTextBox"],["protein","Protein Intake","proteinTextBox"]].forEach(t=>{const n=document.createElement("div");n.className="titleTextContainer",n.id=t[0]+"Container";const r=document.createElement("div");r.className="formSubtitle",r.innerHTML=t[1],n.appendChild(r);const o=document.createElement("input");o.setAttribute("type","text"),o.id=t[2],o.className="formTextBox",o.onkeypress=()=>f.isNumberKey(event.target.value,event),"weight"==t[0]?o.placeholder="in lbs":"protein"==t[0]&&(o.placeholder="in grams"),n.appendChild(o),e.appendChild(n)})};document.getElementById("createFormButton").addEventListener("click",()=>{(()=>{document.getElementById("overlay").style.display="block";const e=document.createElement("div");e.id="formContainer";const t=document.createElement("div");t.id="formTitle",t.innerHTML="Input Form",e.appendChild(t);const n=document.createElement("div");n.id="formDateContainer",e.appendChild(n);const r=document.createElement("input");r.setAttribute("type","date"),r.id="formDate",r.addEventListener("change",()=>{document.getElementById("formDate").style.background="white"}),n.appendChild(r),b(e);const o=document.createElement("div");o.id="buttonContainer",e.appendChild(o);const l=document.createElement("button");l.id="submitButton",l.innerHTML="Submit",l.addEventListener("click",f.submitButtonPress),o.appendChild(l);const a=document.createElement("button");a.id="cancelButton",a.innerHTML="Cancel",a.addEventListener("click",()=>{x()}),o.appendChild(a),document.getElementById("main").appendChild(e)})()});const v=document.getElementsByClassName("btns");for(let e=0;e<v.length;e++)v[e].addEventListener("click",(function(){const e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active",h.selectGraph()}));document.getElementById("dateHeader").addEventListener("click",()=>{g.checkTracker()})}]);