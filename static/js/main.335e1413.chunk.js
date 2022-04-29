(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(n,e,t){},13:function(n,e,t){},14:function(n,e,t){},15:function(n,e,t){"use strict";t.r(e);var r=t(1),u=t.n(r),a=t(4),i=t.n(a),c=(t(11),t(2)),s=t(0),o=function(n){return Object(s.jsx)("option",{value:n.name,children:n.name},n.id)};function f(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:" ",r=[],u=n.length%e;0!==u&&r.push(n.slice(0,u));for(var a=u;a<n.length;a+=e)r.push(n.slice(a,a+e));return r.join(t)}var d=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"'",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;if(isNaN(n))return"NaN";var u=Math.abs(n).toFixed(r).split("."),a=f(u[0],3,e)+t+f(u[1],3,e);return n<0?"-"+a:a},m=(t(13),function(n){var e=n.units,t=n.main2secondary,u=n.secondary2main,a=n.additionalInfo,i=Object(r.useState)("0"),f=Object(c.a)(i,2),m=f[0],l=f[1],h=Object(r.useState)(e[0].name),v=Object(c.a)(h,2),p=v[0],g=v[1],j=Object(r.useState)(0),b=Object(c.a)(j,2),O=b[0],y=b[1],x=Object(r.useState)(","),N=Object(c.a)(x,2),k=N[0],I=N[1],w=Object(r.useState)("."),_=Object(c.a)(w,2),S=_[0],M=_[1];Object(r.useEffect)((function(){y(u(parseFloat(m),p))}),[O,u,m,p,k,S]),Object(r.useEffect)((function(){l("0"),y(0),g(e[0].name)}),[e]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsx)("p",{children:"Type some number (allowed chars: digits, period, -, +)"}),Object(s.jsx)("input",{pattern:"[-+]{0,1}[0-9]+\\.{0,1}[0-9]{0,}",placeholder:"0.00",maxLength:15,name:"",type:"text",value:m,onChange:function(n){l(n.target.value)}}),Object(s.jsxs)("p",{children:["(red border: incorrect input - may produce incorrect output/'NaN')",Object(s.jsx)("br",{}),"(exceeding conversion limit - may produce incorrect output/'NaN')"]}),Object(s.jsx)("p",{children:"Choose input units:"}),Object(s.jsx)("select",{value:p,onChange:function(n){g(n.target.value)},children:e.map((function(n){return o(n)}))}),Object(s.jsx)("p",{children:a}),"Thousands separator:"," ",Object(s.jsx)("input",{id:"thousandsSep",name:"thousandsSep",type:"text",maxLength:1,size:1,value:k,onChange:function(n){I(n.target.value)}})," ","\xa0 Decimal separator:"," ",Object(s.jsx)("input",{id:"decimalSep",name:"decimalSep",type:"text",maxLength:1,size:1,value:S,onChange:function(n){M(n.target.value)}}),Object(s.jsx)("h2",{children:"\xbb"}),Object(s.jsx)("div",{children:e.map((function(n){return e=n,Object(s.jsxs)("p",{children:[" ",d(t(O,e.name),k,S)," ","[",e.name,"]"]},e.id);var e}))})]})}),l=t(5),h=t(6);var v=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;Object(l.a)(this,n),this._turns=0,this._negative=!1,this._setInternals(e)}return Object(h.a)(n,[{key:"_setInternals",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;(n=Math.abs(n)>1?n%1:n)<0?(this._turns=1-n,this._negative=!0):(this._turns=n,this._negative=!1)}},{key:"_getTurns",value:function(){return this._negative?1-this._turns:this._turns}},{key:"setAngleInUnits",value:function(n,e){"gradian"===e?this._setInternals(n/400):"mil"===e?this._setInternals(n/6400):"radian"===e?this._setInternals(n/(2*Math.PI)):"degree"===e?this._setInternals(n/360):"turn"===e&&this._setInternals(n)}},{key:"getAngleInUnits",value:function(n){return"gradian"===n?400*this._getTurns():"mil"===n?function(n){return 6400*n}(this._getTurns()):"radian"===n?function(n){return n*(2*Math.PI)}(this._getTurns()):"degree"===n?function(n){return 360*n}(this._getTurns()):"turn"===n?this._getTurns():NaN}}]),n}(),p=v;var g=function(n,e,t){return n<e||n>t};function j(n,e,t,r){return g(n,t,r)?NaN:e(n)}var b=1e15;function O(n){return j(n,(function(n){return 1e3*n}),0,b)}function y(n){return j(n,(function(n){return 1e6*n}),0,b)}function x(n){return j(n,(function(n){return 35.2739619*n}),0,b)}function N(n){return j(n,(function(n){return n/.45359237}),0,b)}function k(n){return j(n,(function(n){return n/1e3}),0,b)}var I=O(0),w=O(b);var _=y(0),S=y(b);var M=x(0),C=x(b);var T=N(0),U=N(b);var A=k(0),F=k(b);var L=1e15;function P(n){return j(n,(function(n){return 100*n}),0,L)}function z(n){return j(n,(function(n){return 100*n/30.48}),0,L)}function E(n){return j(n,(function(n){return 100*n/2.54}),0,L)}function B(n){return j(n,(function(n){return n/1e3}),0,L)}function D(n){return j(n,(function(n){return n/1609.344}),0,L)}function J(n){return j(n,(function(n){return n/5556}),0,L)}function H(n){return j(n,(function(n){return 1e3*n}),0,L)}function q(n){return j(n,(function(n){return n/1852}),0,L)}function G(n){return j(n,(function(n){return n/.9144}),0,L)}var K=P(0),Q=P(L);var R=z(0),V=z(L);var W=E(0),X=E(L);var Y=B(0),Z=B(L);var $=D(0),nn=D(L);var en=J(0),tn=J(L);var rn=H(0),un=H(L);var an=q(0),cn=q(L);var sn=G(0),on=G(L);var fn=1e12;function dn(n){return j(n,(function(n){return n*(9.86923267/1e6)}),0,fn)}function mn(n){return j(n,(function(n){return n/1e5}),0,fn)}function ln(n){return j(n,(function(n){return.000145037738*n}),0,fn)}function hn(n){return j(n,(function(n){return.00750061683*n}),0,fn)}var vn=dn(0),pn=dn(fn);var gn=mn(0),jn=mn(fn);var bn=ln(0),On=ln(fn);var yn=hn(0),xn=hn(fn);var Nn=1e15;function kn(n){return j(n,(function(n){return n/340.29}),0,Nn)}function In(n){return j(n,(function(n){return 3.2808399*n}),0,Nn)}function wn(n){return j(n,(function(n){return 1.94384449*n}),0,Nn)}function _n(n){return j(n,(function(n){return 3.6*n}),0,Nn)}function Sn(n){return j(n,(function(n){return 2.23693629*n}),0,Nn)}var Mn=In(0),Cn=In(Nn);var Tn=_n(0),Un=_n(Nn);var An=wn(0),Fn=wn(Nn);var Ln=kn(0),Pn=kn(Nn);var zn=Sn(0),En=Sn(Nn);var Bn=1e8;function Dn(n){return j(n,(function(n){return n-273.15}),0,Bn)}function Jn(n){return j(n,(function(n){return 1.8*n-459.67}),0,Bn)}function Hn(n){return j(n,(function(n){return 1.8*n}),0,Bn)}var qn=Dn(0),Gn=Dn(Bn);var Kn=Dn(0),Qn=Dn(Bn);var Rn=Jn(0),Vn=Jn(Bn);var Wn=Dn(0),Xn=Dn(Bn);var Yn=Hn(0),Zn=Hn(Bn);var $n=Dn(0),ne=Dn(Bn);var ee=Dn(0),te=Dn(Bn);var re={angle:{units:[{id:0,name:"degree"},{id:1,name:"gradian"},{id:2,name:"mil"},{id:3,name:"radian"},{id:4,name:"turn"}],main2secondary:function(n,e){return new p(n).getAngleInUnits(e)},secondary2main:function(n,e){var t=new p(0);return t.setAngleInUnits(n,e),t.getAngleInUnits("turn")},additionalInfo:"limit: 0-1 [turn], both sides (-/+), angles wrap around 1 [turn]"},mass:{units:[{id:0,name:"g"},{id:1,name:"kg"},{id:2,name:"mg"},{id:3,name:"ounce"},{id:4,name:"pound"},{id:5,name:"tonne"}],main2secondary:function(n,e){switch(e){case"g":return O(n);case"mg":return y(n);case"ounce":return x(n);case"pound":return N(n);case"tonne":return k(n);case"kg":return n;default:return NaN}},secondary2main:function(n,e){switch(e){case"g":return j(n,(function(n){return n/1e3}),I,w);case"mg":return j(n,(function(n){return n/1e6}),_,S);case"ounce":return j(n,(function(n){return n/35.2739619}),M,C);case"pound":return j(n,(function(n){return.45359237*n}),T,U);case"tonne":return j(n,(function(n){return 1e3*n}),A,F);case"kg":return n;default:return NaN}},additionalInfo:"limit: 0-1e15 [kg], SI and imperial/US units, [ounce] == [oz], [pound] = [lb]"},length:{units:[{id:0,name:"cm"},{id:1,name:"foot"},{id:2,name:"inch"},{id:3,name:"km"},{id:4,name:"land mile"},{id:5,name:"league"},{id:6,name:"metre"},{id:7,name:"mm"},{id:8,name:"sea mile"},{id:9,name:"yard"}],main2secondary:function(n,e){switch(e){case"cm":return P(n);case"foot":return z(n);case"inch":return E(n);case"km":return B(n);case"land mile":return D(n);case"league":return J(n);case"mm":return H(n);case"sea mile":return q(n);case"yard":return G(n);case"metre":return n;default:return NaN}},secondary2main:function(n,e){switch(e){case"cm":return j(n,(function(n){return n/100}),K,Q);case"foot":return j(n,(function(n){return 30.48*n/100}),R,V);case"inch":return j(n,(function(n){return 2.54*n/100}),W,X);case"km":return j(n,(function(n){return 1e3*n}),Y,Z);case"land mile":return j(n,(function(n){return 1609.344*n}),$,nn);case"league":return j(n,(function(n){return 5556*n}),en,tn);case"mm":return j(n,(function(n){return n/1e3}),rn,un);case"sea mile":return j(n,(function(n){return 1852*n}),an,cn);case"yard":return j(n,(function(n){return.9144*n}),sn,on);case"metre":return n;default:return NaN}},additionalInfo:"limit: 0-1e15 [metre], SI and imperial/US units"},pressure:{units:[{id:0,name:"atm"},{id:1,name:"bar"},{id:2,name:"pascal"},{id:3,name:"psi"},{id:4,name:"torr"}],main2secondary:function(n,e){switch(e){case"atm":return dn(n);case"bar":return mn(n);case"psi":return ln(n);case"torr":return hn(n);case"pascal":return n;default:return NaN}},secondary2main:function(n,e){switch(e){case"atm":return j(n,(function(n){return 101325*n}),vn,pn);case"bar":return j(n,(function(n){return 1e5*n}),gn,jn);case"psi":return j(n,(function(n){return 6894.75729*n}),bn,On);case"torr":return j(n,(function(n){return 133.3223684211*n}),yn,xn);case"pascal":return n;default:return NaN}},additionalInfo:"limit: 0-1e12 [pascal], [torr] == [mmHg]"},speed:{units:[{id:0,name:"Ma"},{id:1,name:"ft/s"},{id:2,name:"knot"},{id:3,name:"m/s"},{id:4,name:"km/h"},{id:5,name:"mph"}],main2secondary:function(n,e){switch(e){case"Ma":return kn(n);case"ft/s":return In(n);case"knot":return wn(n);case"km/h":return _n(n);case"mph":return Sn(n);case"m/s":return n;default:return NaN}},secondary2main:function(n,e){switch(e){case"Ma":return j(n,(function(n){return 340.29*n}),Ln,Pn);case"ft/s":return j(n,(function(n){return n/3.2808399}),Mn,Cn);case"knot":return j(n,(function(n){return n/1.94384449}),An,Fn);case"km/h":return j(n,(function(n){return n/3.6}),Tn,Un);case"mph":return j(n,(function(n){return n/2.23693629}),zn,En);case"m/s":return n;default:return NaN}},additionalInfo:"limit: 0-1e15 [m/s], Ma - Mach number - speed of object/speed of sound [1225 km/h]"},temperature:{units:[{id:0,name:"celsius"},{id:1,name:"delisle"},{id:2,name:"fahrenheit"},{id:3,name:"kelvin"},{id:4,name:"newton"},{id:5,name:"rankine"},{id:6,name:"r\xe9aumur"},{id:7,name:"r\xf8mer"}],main2secondary:function(n,e){switch(e){case"celsius":return Dn(n);case"delisle":return j(n,(function(n){return 1.5*(373.15-n)}),0,Bn);case"fahrenheit":return Jn(n);case"newton":return function(n){return j(n,(function(n){return.33*(n-273.15)}),0,Bn)}(n);case"rankine":return Hn(n);case"r\xe9aumur":return function(n){return j(n,(function(n){return.8*(n-273.15)}),0,Bn)}(n);case"r\xf8mer":return function(n){return j(n,(function(n){return.525*(n-273.15)+7.5}),0,Bn)}(n);case"kelvin":return n;default:return NaN}},secondary2main:function(n,e){switch(e){case"celsius":return j(n,(function(n){return n+273.15}),qn,Gn);case"delisle":return j(n,(function(n){return 373.15-n*(2/3)}),Kn,Qn);case"fahrenheit":return j(n,(function(n){return(n+459.67)*(5/9)}),Rn,Vn);case"newton":return j(n,(function(n){return n*(100/33)+273.15}),Wn,Xn);case"rankine":return j(n,(function(n){return n*(5/9)}),Yn,Zn);case"r\xe9aumur":return j(n,(function(n){return n*(5/4)+273.15}),$n,ne);case"r\xf8mer":return j(n,(function(n){return 40/21*(n-7.5)+273.15}),ee,te);case"kelvin":return n;default:return NaN}},additionalInfo:"limit: 0-1e8 [kelvin], limit in Physics: 0-Math.pow(10,32) [kelvin]"}},ue=(t(14),function(){var n=function(n){for(var e=[],t=Object.keys(n),r=0;r<t.length;r++)e.push({id:r,name:t[r]});return e}(re),e=Object(r.useState)(n[0].name),t=Object(c.a)(e,2),u=t[0],a=t[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Simple Converter"}),Object(s.jsx)("p",{className:"warning",children:"No guarantee of correct conversion. Use it at your own risk"}),Object(s.jsx)("p",{children:"(It should work fine. Some rounding errors are to be expected)"}),Object(s.jsx)("hr",{}),Object(s.jsx)("p",{children:"Select conversion type:"}),Object(s.jsx)("select",{value:u,onChange:function(n){a(n.target.value)},children:n.map((function(n){return o(n)}))}),Object(s.jsx)("br",{})," ",Object(s.jsx)("br",{}),Object(s.jsx)(m,{units:re[u].units,main2secondary:re[u].main2secondary,secondary2main:re[u].secondary2main,additionalInfo:re[u].additionalInfo})]})}),ae=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(e){var t=e.getCLS,r=e.getFID,u=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),r(n),u(n),a(n),i(n)}))};i.a.render(Object(s.jsx)(u.a.StrictMode,{children:Object(s.jsx)(ue,{})}),document.getElementById("root")),ae()}},[[15,1,2]]]);
//# sourceMappingURL=main.335e1413.chunk.js.map