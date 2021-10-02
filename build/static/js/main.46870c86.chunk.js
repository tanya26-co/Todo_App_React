(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{22:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var r=a(2),c=a.n(r),s=a(9),o=a.n(s),n=(a(22),a(7)),l=a(39),i=a(35),j=a(36),d=a(37),b=a(38),m=a(1),O=function(e){var t=e.modal,a=e.toggle,c=e.save,s=Object(r.useState)(""),o=Object(n.a)(s,2),O=o[0],u=o[1],x=Object(r.useState)(""),p=Object(n.a)(x,2),h=p[0],f=p[1],g=function(e){var t=e.target,a=t.name,r=t.value;"taskName"===a?u(r):f(r)};return Object(m.jsx)("div",{children:Object(m.jsxs)(l.a,{isOpen:t,toggle:a,children:[Object(m.jsx)(i.a,{toggle:a,children:"Create Task"}),Object(m.jsx)(j.a,{children:Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Task Name"}),Object(m.jsx)("input",{type:"text",className:"form-control",name:"taskName",value:O,onChange:g})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Description"}),Object(m.jsx)("textarea",{rows:"4",className:"form-control",name:"des",value:h,onChange:g})]})]})}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(b.a,{color:"primary",onClick:function(e){e.preventDefault();var t={};t.Name=O,t.Des=h,c(t)},children:"Create"})," ",Object(m.jsx)(b.a,{color:"secondary",onClick:a,children:"Cancel"})]})]})})},u=function(e){var t=e.modal,a=e.toggle,c=e.updateTask,s=e.taskObj,o=Object(r.useState)(""),O=Object(n.a)(o,2),u=O[0],x=O[1],p=Object(r.useState)(""),h=Object(n.a)(p,2),f=h[0],g=h[1],v=function(e){var t=e.target,a=t.name,r=t.value;"taskName"===a?x(r):g(r)};Object(r.useEffect)((function(){x(s.Name),g(s.Description)}),[]);return Object(m.jsxs)(l.a,{isOpen:t,toggle:a,children:[Object(m.jsx)(i.a,{toggle:a,children:"Update Task"}),Object(m.jsxs)(j.a,{children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Task Name"}),Object(m.jsx)("input",{type:"text",className:"form-control",value:u,onChange:v,name:"taskName"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Description"}),Object(m.jsx)("textarea",{rows:"5",className:"form-control",value:f,onChange:v,name:"description"})]})]}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(b.a,{color:"primary",onClick:function(e){e.preventDefault();var t={};t.Name=u,t.Description=f,c(t)},children:"Update"})," ",Object(m.jsx)(b.a,{color:"secondary",onClick:a,children:"Cancel"})]})]})},x=function(e){var t=e.taskObj,a=e.index,c=e.deleteTask,s=e.updateTaskEdit,o=Object(r.useState)(!1),l=Object(n.a)(o,2),i=l[0],j=l[1],d=[{primaryColor:"#5D93E1",secondaryColor:"#ECF3FC"},{primaryColor:"#5DC250",secondaryColor:"#F2FAF1"},{primaryColor:"#F48687",secondaryColor:"#FDF1F1"},{primaryColor:"#B964F7",secondaryColor:"#F3F0FD"},{primaryColor:"#F9D288",secondaryColor:"#FEFAF1"}];return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"card-wrapper ",children:[Object(m.jsx)("div",{className:"card-top ",style:{backgroundColor:d[a%5].primaryColor}}),Object(m.jsxs)("div",{className:"task-holder",children:[Object(m.jsx)("span",{className:"card-header",style:{backgroundColor:d[a%5].secondaryColor,borderRadius:"10px"},children:t.Name}),Object(m.jsx)("p",{className:"mt-3",children:t.Des}),Object(m.jsxs)("div",{style:{position:"absolute",right:"20px",bottom:"20px"},children:[Object(m.jsx)("button",{className:"far ",style:{color:d[a%5].primaryColor,borderColor:d[a%5].primaryColor},onClick:function(){return j(!0)},children:"Edit"}),Object(m.jsx)("button",{className:"bi ",style:{color:d[a%5].primaryColor,borderColor:d[a%5].primaryColor},onClick:function(){c(a)},children:"Delete"})]})]})]}),Object(m.jsx)(u,{modal:i,toggle:function(){j(!i)},updateTask:function(e){s(e,a)},taskObj:t})]})},p=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)([]),o=Object(n.a)(s,2),l=o[0],i=o[1];Object(r.useEffect)((function(){var e=localStorage.getItem("taskarry");if(e){var t=JSON.parse(e);i(t)}}),[]);var j=function(e){var t=l;t.splice(e,1),localStorage.setItem("taskarry",JSON.stringify(t)),i(t),window.location.reload()},d=function(e,t){var a=l;a[t]=e,localStorage.setItem("taskarry",JSON.stringify(a)),i(a),window.location.reload()};return Object(m.jsxs)(m.Fragment,{children:[" ",Object(m.jsxs)("div",{className:"header text-center ",children:[Object(m.jsx)("h3",{children:" Todo List "}),Object(m.jsx)("button",{className:"btn btn-primary mt-2",onClick:function(){return c(!0)},children:" Create Task"})]}),Object(m.jsx)("div",{className:"task",children:l&&l.map((function(e,t){return Object(m.jsx)(x,{taskObj:e,index:t,deleteTask:j,updateTaskEdit:d})}))}),Object(m.jsx)(O,{toggle:function(){c(!a)},modal:a,save:function(e){var t=l;t.push(e),localStorage.setItem("taskarry",JSON.stringify(t)),i(t),c(!1)}})]})};a(33);var h=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(p,{})})};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.46870c86.chunk.js.map