(function(){"use strict";var t={4788:function(t,e,i){var n=i(6848),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("InitialPage")],1)},s=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"initial_page",staticStyle:{"max-width":"100%"}},[e("b-col",[e("b-row",{staticStyle:{height:"60px","max-width":"100%"},attrs:{"align-v":"center"}},[e("span",{staticClass:"font_space",staticStyle:{"letter-spacing":"-1px","font-size":"30px","font-weight":"600"}},[t._v(" Estação Espacial ")])]),e("b-row",{staticStyle:{height:"calc(100vh - 100px)","max-width":"100%"}},[e("StarryBackground",{style:t.isMobile?"filter: blur(0.1px);":"filter: blur(0.3px);",attrs:{size:t.isMobile?4:.5}}),e("div",{staticClass:"d-flex align-items-center justify-content-center",staticStyle:{position:"absolute",height:"calc(100vh - 100px)"}},[e("b-row",{staticStyle:{width:"80%",height:"calc(80% - 100px)"},attrs:{"align-v":"center"}},[e("b-col",[e("b-row",[e("span",{staticClass:"font_space",staticStyle:{color:"white","font-weight":"500"},style:t.isMobile?"font-size: 50px; letter-spacing: -3.5px;":"font-size: 80px; letter-spacing: -5px;"},[t._v(" Three.js ")])]),e("b-row",[e("span",{staticClass:"font_space",staticStyle:{color:"white","font-weight":"500"},style:t.isMobile?"font-size: 50px; letter-spacing: -3.5px;":"font-size: 80px; letter-spacing: -5px;"},[t._v(" Vamos falar sobre o futuro ")])]),e("b-row",{staticStyle:{height:"50px"}})],1)],1)],1)],1),e("b-row",{staticClass:"p-5",staticStyle:{"max-width":"100%"}},[e("div",{staticClass:"d-flex align-items-center justify-content-center",staticStyle:{width:"100vw","min-height":"80vh",height:"max-content"}},[e("b-row",{staticStyle:{height:"100%"},attrs:{"align-v":"center",cols:t.isMobile?1:null}},[e("b-col",{staticStyle:{"text-align":"start"}},[e("span",{staticClass:"font_space",staticStyle:{color:"black","font-weight":"500","letter-spacing":"-1.5px"},style:t.isMobile?"font-size:18px;":"font-size:28px;"},[t._v(" Three.js é um framework JavaScript que facilita a criação de gráficos 3D no navegador, simplificando o uso de WebGL. Ele permite desenvolver cenas tridimensionais interativas com iluminação, texturas e animações. Ideal para visualizações, jogos e projetos de realidade aumentada, Three.js transforma páginas da web em ambientes 3D imersivos, proporcionando experiências visuais ricas e impactantes. ")])]),t.isMobile?e("div",{staticClass:"py-3"}):t._e(),e("b-col",{staticStyle:{height:"90%","min-height":"300px"}},[e("img",{staticStyle:{width:"100%",height:"100%","min-height":"300px","object-fit":"cover","border-radius":"40px"},attrs:{src:i(6734),alt:"Astronalta em um satélite em órbita com a Terra"}})])],1)],1)]),e("StarryBackground",{staticStyle:{height:"400px"},style:t.isMobile?"filter: blur(0.1px);":"filter: blur(0.3px);",attrs:{y_move:.001,size:t.isMobile?4:.5}}),e("b-row",{staticClass:"p-5",staticStyle:{"max-width":"100%"}},[e("div",{staticClass:"d-flex align-items-center justify-content-center",staticStyle:{width:"100vw","min-height":"80vh"}},[e("b-row",{staticStyle:{height:"100%"},attrs:{"align-v":"center",cols:t.isMobile?1:null}},[e("b-col",{staticStyle:{height:"90%","border-radius":"50px !important"},style:t.isMobile?"height:300px; width:100%;":""},[t.isMobile?t._e():e("div",{staticClass:"position-absolute d-flex justify-content-center p-5"},[e("span",{staticClass:"font_space",staticStyle:{color:"white","font-weight":"500","letter-spacing":"-1.5px","font-size":"28px"}},[t._v(" Clique no cubo e arraste ")])]),e("InterativeComponent",{staticStyle:{cursor:"pointer"}})],1),e("b-col",{staticClass:"py-5",staticStyle:{"text-align":"start"}},[e("span",{staticClass:"font_space",staticStyle:{color:"black","font-weight":"500","letter-spacing":"-1.5px"},style:t.isMobile?"font-size:18px;":"font-size:28px;"},[t._v(" A tecnologia 3D permite uma visualização fluida e interativa, tornando a navegação e a manipulação do objeto uma experiência imersiva. Com essa animação, você pode explorar como elementos básicos podem ser transformados em uma interface interativa e dinâmica na web. ")])])],1)],1)]),e("StarryBackground",{staticStyle:{height:"400px"},style:t.isMobile?"filter: blur(0.1px);":"filter: blur(0.3px);",attrs:{y_move:-.001,size:t.isMobile?4:.5}}),e("b-row",{staticStyle:{height:"60px","max-width":"100%"},attrs:{"align-v":"center"}},[e("span",{staticClass:"font_space",staticStyle:{"letter-spacing":"-1px","font-size":"30px","font-weight":"600"},style:t.isMobile?"font-size:20px;":"font-size:30px;"},[t._v(" © "+t._s(t.date)+" Estação Espacial 3D. Todos os direitos reservados. ")])])],1)],1)},r=[],l=function(){var t=this,e=t._self._c;return e("div",{ref:"starryContainer",staticClass:"starry-container"})},c=[],p=(i(4114),i(8776)),u={name:"StarryBackground",props:{size:Number,x_move:Number,y_move:Number},mounted(){this.initThree()},methods:{initThree(){const t=this.$refs.starryContainer,e=t.clientWidth,i=t.clientHeight,n=new p.Z58,a=new p.ubm(75,e/i,.1,1e3);a.position.z=1;const s=new p.JeP;s.setSize(e,i),t.appendChild(s.domElement);const o=new p.Tap,r=o.load("/star.png"),l=new p.LoY,c=new p.BH$({size:this.size||.5,map:r,alphaTest:.5,transparent:!0}),u=[];for(let h=0;h<1e4;h++){const t=p.cj9.randFloatSpread(2e3),e=p.cj9.randFloatSpread(2e3),i=p.cj9.randFloatSpread(2e3);u.push(t,e,i)}l.setAttribute("position",new p.qtW(u,3));const d=new p.ONl(l,c);n.add(d);const f=()=>{requestAnimationFrame(f),d.rotation.x+=this.x_move||25e-5,d.rotation.y+=this.y_move||25e-5,s.render(n,a)};f(),window.addEventListener("resize",(()=>{const t=this.$refs.starryContainer,e=t.clientWidth,i=t.clientHeight;s.setSize(e,i),a.aspect=e/i,a.updateProjectionMatrix()}))}}},d=u,f=i(1656),h=(0,f.A)(d,l,c,!1,null,null,null),m=h.exports,v=function(){var t=this,e=t._self._c;return e("div",{ref:"InterativeContainer",staticClass:"interative-container"})},g=[],b={name:"InterativeComponent",mounted(){this.initThree()},methods:{initThree(){const t=this.$refs.InterativeContainer,e=t.clientWidth,i=t.clientHeight,n=new p.Z58,a=new p.ubm(75,e/i,.1,1e3);a.position.z=5;const s=new p.JeP;s.setSize(e,i),t.appendChild(s.domElement);const o=new p.iNn,r=new p.V9B({color:1069184}),l=new p.eaF(o,r);n.add(l);const c=new p.TDQ(o),u=new p.mrM({color:0}),d=new p.DXC(c,u);l.add(d);let f=!1,h={x:0,y:0};function m(){requestAnimationFrame(m),l.rotation.x+=.01,l.rotation.y+=.01,s.render(n,a)}function v(t){const e={x:t.clientX-h.x,y:t.clientY-h.y};if(f){const t=(new p.PTz).setFromEuler(new p.O9p(g(1*e.y),g(1*e.x),0,"XYZ"));l.quaternion.multiplyQuaternions(t,l.quaternion)}h={x:t.clientX,y:t.clientY}}function g(t){return t*(Math.PI/180)}m(),s.domElement.addEventListener("mousedown",(t=>{f=!0})),s.domElement.addEventListener("mousemove",v),s.domElement.addEventListener("mouseup",(()=>{f=!1})),window.addEventListener("resize",(()=>{const t=this.$refs.InterativeContainer,e=t.clientWidth,i=t.clientHeight;s.setSize(e,i),a.aspect=e/i,a.updateProjectionMatrix()}))}}},y=b,x=(0,f.A)(y,v,g,!1,null,null,null),w=x.exports,S={name:"InitialPage",components:{StarryBackground:m,InterativeComponent:w},data(){return{date:(new Date).getFullYear(),isMobile:window.innerWidth<1020}},created(){window.addEventListener("resize",(()=>this.isMobile=window.innerWidth<1020))}},_=S,C=(0,f.A)(_,o,r,!1,null,"200372b1",null),z=C.exports,j={name:"App",components:{InitialPage:z}},M=j,E=(0,f.A)(M,a,s,!1,null,null,null),T=E.exports,O=i(1641),k=i(4486);i(9313);n["default"].use(O.vGs),n["default"].use(k.YS),n["default"].config.productionTip=!1,new n["default"]({render:t=>t(T)}).$mount("#app")},6734:function(t,e,i){t.exports=i.p+"img/astronauta.480c7ee3.jpg"}},e={};function i(n){var a=e[n];if(void 0!==a)return a.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,n,a,s){if(!n){var o=1/0;for(p=0;p<t.length;p++){n=t[p][0],a=t[p][1],s=t[p][2];for(var r=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(i.O).every((function(t){return i.O[t](n[l])}))?n.splice(l--,1):(r=!1,s<o&&(o=s));if(r){t.splice(p--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var p=t.length;p>0&&t[p-1][2]>s;p--)t[p]=t[p-1];t[p]=[n,a,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/threejs_playground/"}(),function(){var t={524:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,s,o=n[0],r=n[1],l=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(l)var p=l(i)}for(e&&e(n);c<o.length;c++)s=o[c],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(p)},n=self["webpackChunkthreejs_playground"]=self["webpackChunkthreejs_playground"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(4788)}));n=i.O(n)})();
//# sourceMappingURL=app.8fc7c65d.js.map