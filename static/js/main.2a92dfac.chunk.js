(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var l=n(0),c=n.n(l),i=n(25),a=n.n(i),u=(n(67),n(7)),r=n(10),s=(n(68),n(98)),j=n(3),b=function(){return Object(j.jsxs)("div",{id:"footer",children:[Object(j.jsxs)("p",{children:["Designed by ",Object(j.jsx)("b",{children:"Saeed Ahmadnia"})]}),Object(j.jsx)("p",{children:"December 2021"})]})},d=function(){return Object(j.jsx)("div",{id:"title",children:Object(j.jsx)("h1",{children:"Tic-Tac-Toe"})})},o=n(96),O=n(94),x=function(e){return Object(j.jsx)(o.a,{item:!0,xs:4,children:Object(j.jsxs)(O.a,{onClick:function(){return e.onClick(e.i)},className:null===e.value?"blue"===e.color?"game-table-blue":"game-table-red":(e.value,"game-table-disabled"),children:[Object(j.jsx)("div",{className:"gradient gradient-blue"+(null===e.value||"red"===e.value?"-disabled":"")}),Object(j.jsx)("div",{className:"gradient gradient-red"+(null===e.value||"blue"===e.value?"-disabled":"")})]})})},h=n(54),f=n.n(h),m=n(53),v=n.n(m),p=n(95);var g=function(){var e=Object(l.useState)("blue"),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(l.useState)([null,null,null,null,null,null,null,null,null]),a=Object(r.a)(i,2),h=a[0],m=a[1],g=Object(l.useState)([]),S=Object(r.a)(g,2),N=S[0],k=S[1],F=Object(l.useState)(!1),C=Object(r.a)(F,2),I=C[0],z=C[1],W=Object(l.useState)("light-blue"),w=Object(r.a)(W,2),B=w[0],D=w[1],E=Object(l.useState)("BLUE WINS!"),y=Object(r.a)(E,2),A=y[0],R=y[1];function T(){c("blue"===n?"red":"blue")}function U(e,t){return t[0]===e&&t[3]===e&&t[6]===e||(t[1]===e&&t[4]===e&&t[7]===e||(t[2]===e&&t[5]===e&&t[8]===e||(t[0]===e&&t[1]===e&&t[2]===e||(t[3]===e&&t[4]===e&&t[5]===e||(t[6]===e&&t[7]===e&&t[8]===e||(t[0]===e&&t[4]===e&&t[8]===e||t[2]===e&&t[4]===e&&t[6]===e))))))}function J(e){var t=Object(u.a)(N);t.push(h),k(t);var l=Object(u.a)(h);l[e]=n,m(l),function(e){return U("blue",e)?(R("BLUE WINS!"),D("#007FFF"),z(!0),!0):U("red",e)?(R("RED WINS!"),D("#FF0055"),z(!0),!0):!!function(e){for(var t=0;t<e.length;t++)if(null===e[t])return!1;return!0}(e)&&(R("DRAW!"),D("#FFF"),z(!0),!0)}(l)||T()}function L(){c("blue"),m([null,null,null,null,null,null,null,null,null]),k([])}for(var G=[],M=0;M<9;M++)G.push(Object(j.jsx)(x,{color:n,value:h[M],i:M,onClick:J},M));return Object(j.jsxs)("div",{className:"App bg-dark-"+n+" light-"+n,children:[Object(j.jsx)(p.a,{sx:{color:B,zIndex:function(e){return e.zIndex.drawer+1}},open:I,onClick:function(){return z(!1),void L()},children:Object(j.jsx)("p",{style:{"font-size":"4em"},children:A})}),Object(j.jsxs)(s.a,{maxWidth:"xs",children:[Object(j.jsx)(d,{}),Object(j.jsxs)(o.a,{container:!0,spacing:1,children:[G,Object(j.jsxs)(o.a,{item:!0,xs:4,children:[" ",Object(j.jsxs)(O.a,{className:"btn-"+n,onClick:function(){return function(){if(N.length>0){var e=Object(u.a)(N);m(e.pop()),k(e),T()}}()},children:[Object(j.jsx)(v.a,{fontSize:"small"})," Undo"]})," "]}),Object(j.jsxs)(o.a,{item:!0,xs:4,children:[" ",Object(j.jsx)("div",{id:"label-turn",children:Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:"blue"===n?"Blue":"Red"})})})," "]}),Object(j.jsxs)(o.a,{item:!0,xs:4,children:[" ",Object(j.jsxs)(O.a,{className:"btn-"+n,onClick:function(){return L()},children:[Object(j.jsx)(f.a,{fontSize:"small"})," New Game"]})," "]})]}),Object(j.jsx)(b,{})]})]})};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.2a92dfac.chunk.js.map