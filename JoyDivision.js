!function(r){"use strict";function n(r,n,t){return t.a=r,t.f=n,t}function f(t){return n(2,t,function(n){return function(r){return t(n,r)}})}function t(e){return n(3,e,function(t){return function(n){return function(r){return e(t,n,r)}}})}function e(u){return n(4,u,function(e){return function(t){return function(n){return function(r){return u(e,t,n,r)}}}})}function u(a){return n(5,a,function(u){return function(e){return function(t){return function(n){return function(r){return a(u,e,t,n,r)}}}}})}function a(i){return n(6,i,function(a){return function(u){return function(e){return function(t){return function(n){return function(r){return i(a,u,e,t,n,r)}}}}}})}function p(r,n,t){return 2===r.a?r.f(n,t):r(n)(t)}function m(r,n,t,e){return 3===r.a?r.f(n,t,e):r(n)(t)(e)}function y(r,n,t,e,u){return 4===r.a?r.f(n,t,e,u):r(n)(t)(e)(u)}function A(r,n,t,e,u,a){return 5===r.a?r.f(n,t,e,u,a):r(n)(t)(e)(u)(a)}function w(r,n,t,e,u,a,i){return 6===r.a?r.f(n,t,e,u,a,i):r(n)(t)(e)(u)(a)(i)}var b={$:0};function l(r,n){return{$:1,a:r,b:n}}var i=f(l);function d(r){for(var n=b,t=r.length;t--;)n=l(r[t],n);return n}function o(r){for(var n=[];r.b;r=r.b)n.push(r.a);return n}function h(r,n){for(var t,e=[],u=c(r,n,0,e);u&&(t=e.pop());u=c(t.a,t.b,0,e));return u}function c(r,n,t,e){if(100<t)return e.push(g(r,n)),!0;if(r===n)return!0;if("object"!=typeof r||null===r||null===n)return"function"==typeof r&&C(5),!1;for(var u in r.$<0&&(r=nn(r),n=nn(n)),r)if(!c(r[u],n[u],t+1,e))return!1;return!0}function v(r,n,t){if("object"!=typeof r)return r===n?0:r<n?-1:1;if(!r.$)return(t=v(r.a,n.a))?t:(t=v(r.b,n.b))?t:v(r.c,n.c);for(;r.b&&n.b&&!(t=v(r.a,n.a));r=r.b,n=n.b);return t||(r.b?1:n.b?-1:0)}var s=0;function g(r,n){return{a:r,b:n}}function $(r,n){var t={};for(var e in r)t[e]=r[e];for(var e in n)t[e]=n[e];return t}var k=t(function(r,n,t){for(var e=Array(r),u=0;u<r;u++)e[u]=t(n+u);return e}),j=f(function(r,n){for(var t=Array(r),e=0;e<r&&n.b;e++)t[e]=n.a,n=n.b;return t.length=e,g(t,n)}),x=f(function(r,n){return n[r]}),T=t(function(r,n,t){for(var e=t.length,u=Array(e),a=0;a<e;a++)u[a]=t[a];return u[r]=n,u}),_=f(function(r,n){for(var t=n.length,e=Array(t+1),u=0;u<t;u++)e[u]=n[u];return e[t]=r,e}),E=t(function(r,n,t){for(var e=t.length,u=0;u<e;u++)n=p(r,t[u],n);return n}),L=t(function(r,n,t){for(var e=t.length-1;0<=e;e--)n=p(r,t[e],n);return n}),N=t(function(r,n,t){for(var e=t.length,u=Array(e),a=0;a<e;a++)u[a]=p(r,n+a,t[a]);return u});function C(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}var O=Math.cos,q=Math.sin;var M=Math.ceil,z=Math.floor,B=Math.round,D=Math.log;var S=f(function(r,n){return n.join(r)});function F(r){return r+""}var I=f(function(r,n){return J(r,U(n))});function J(r,n){switch(r.$){case 3:return"boolean"==typeof n?Sn(n):V("a BOOL",n);case 2:return"number"!=typeof n?V("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?Sn(n):!isFinite(n)||n%1?V("an INT",n):Sn(n);case 4:return"number"==typeof n?Sn(n):V("a FLOAT",n);case 6:return"string"==typeof n?Sn(n):n instanceof String?Sn(n+""):V("a STRING",n);case 9:return null===n?Sn(r.c):V("null",n);case 5:return Sn(H(n));case 7:return Array.isArray(n)?Q(r.b,n,d):V("a LIST",n);case 8:return Array.isArray(n)?Q(r.b,n,R):V("an ARRAY",n);case 10:var t=r.d;if("object"!=typeof n||null===n||!(t in n))return V("an OBJECT with a field named `"+t+"`",n);var e=J(r.b,n[t]);return Cn(e)?e:Dn(p(In,t,e.a));case 11:var u=r.e;if(!Array.isArray(n))return V("an ARRAY",n);if(n.length<=u)return V("a LONGER array. Need index "+u+" but only see "+n.length+" entries",n);e=J(r.b,n[u]);return Cn(e)?e:Dn(p(Jn,u,e.a));case 12:if("object"!=typeof n||null===n||Array.isArray(n))return V("an OBJECT",n);var a=b;for(var i in n)if(n.hasOwnProperty(i)){e=J(r.b,n[i]);if(!Cn(e))return Dn(p(In,i,e.a));a=l(g(i,e.a),a)}return Sn(yn(a));case 13:for(var f=r.f,o=r.g,c=0;c<o.length;c++){e=J(o[c],n);if(!Cn(e))return e;f=f(e.a)}return Sn(f);case 14:e=J(r.b,n);return Cn(e)?J(r.h(e.a),n):e;case 15:for(var v=b,s=r.g;s.b;s=s.b){e=J(s.a,n);if(Cn(e))return e;v=l(e.a,v)}return Dn(Qn(yn(v)));case 1:return Dn(p(Fn,r.a,H(n)));case 0:return Sn(r.a)}}function Q(r,n,t){for(var e=n.length,u=Array(e),a=0;a<e;a++){var i=J(r,n[a]);if(!Cn(i))return Dn(p(Jn,a,i.a));u[a]=i.a}return Sn(t(u))}function R(n){return p(Mn,n.length,function(r){return n[r]})}function V(r,n){return Dn(p(Fn,"Expecting "+r,H(n)))}function Y(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return r.c===n.c;case 7:case 8:case 12:return Y(r.b,n.b);case 10:return r.d===n.d&&Y(r.b,n.b);case 11:return r.e===n.e&&Y(r.b,n.b);case 13:return r.f===n.f&&P(r.g,n.g);case 14:return r.h===n.h&&Y(r.b,n.b);case 15:return P(r.g,n.g)}}function P(r,n){var t=r.length;if(t!==n.length)return!1;for(var e=0;e<t;e++)if(!Y(r[e],n[e]))return!1;return!0}function H(r){return r}function U(r){return r}var G=t(function(r,n,t){return t[r]=U(n),t});H(null);function K(r){return{$:0,a:r}}function W(r){return{$:2,b:r,c:null}}var X=f(function(r,n){return{$:3,b:r,d:n}});var Z=0;function rr(r){var n={$:0,e:Z++,f:r,g:null,h:[]};return ar(n),n}function nr(n){return W(function(r){r(K(rr(n)))})}function tr(r,n){r.h.push(n),ar(r)}var er=!1,ur=[];function ar(r){if(ur.push(r),!er){for(er=!0;r=ur.shift();)ir(r);er=!1}}function ir(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,ar(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}function fr(r,n,t,e,u,a){var i=p(I,r,H(n?n.flags:void 0));Cn(i)||C(2);var f={},o=(i=t(i.a)).a,c=a(s,o),v=function(r,n){var t;for(var e in or){var u=or[e];u.a&&((t=t||{})[e]=u.a(e,n)),r[e]=cr(u,n)}return t}(f,s);function s(r,n){c(o=(i=p(e,r,o)).a,n),lr(f,i.b,u(o))}return lr(f,i.b,u(o)),v?{ports:v}:{}}var or={};function cr(r,n){var e={g:n,h:void 0},u=r.c,a=r.d,i=r.e,f=r.f;function o(t){return p(X,o,{$:5,b:function(r){var n=r.a;return 0===r.$?m(a,e,n,t):i&&f?y(u,e,n.i,n.j,t):m(u,e,i?n.i:n.j,t)}})}return e.h=rr(p(X,o,r.b))}var vr=f(function(n,t){return W(function(r){n.g(t),r(K(s))})});function sr(n){return function(r){return{$:1,k:n,l:r}}}function br(r){return{$:2,m:r}}function lr(r,n,t){var e={};for(var u in dr(!0,n,e,null),dr(!1,t,e,null),r)tr(r[u],{$:"fx",a:e[u]||{i:b,j:b}})}function dr(r,n,t,e){switch(n.$){case 1:var u=n.k,a=function(r,n,t,e){function u(r){for(var n=t;n;n=n.q)r=n.p(r);return r}return p(r?or[n].e:or[n].f,u,e)}(r,u,e,n.l);return void(t[u]=function(r,n,t){return t=t||{i:b,j:b},r?t.i=l(n,t.i):t.j=l(n,t.j),t}(r,a,t[u]));case 2:for(var i=n.m;i.b;i=i.b)dr(r,i.a,t,e);return;case 3:return void dr(r,n.o,t,{p:n.n,q:e})}}var hr;var gr="undefined"!=typeof document?document:{};function $r(r,n){r.appendChild(n)}function pr(r){return{$:0,a:r}}var mr=f(function(a,i){return f(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:kr(r),e:t,f:a,b:e}})})(void 0);f(function(a,i){return f(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:kr(r),e:t,f:a,b:e}})})(void 0);var yr=f(function(r,n){return{$:"a2",n:r,o:n}}),Ar=f(function(r,n){return{$:"a3",n:r,o:n}});var wr;function kr(r){for(var n={};r.b;r=r.b){var t=r.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=n[e]||(n[e]={});"a3"===e&&"class"===u?jr(i,u,a):i[u]=a}else"className"===u?jr(n,u,U(a)):n[u]=U(a)}return n}function jr(r,n,t){var e=r[n];r[n]=e?e+" "+t:t}function xr(r,n){var t=r.$;if(5===t)return xr(r.k||(r.k=r.m()),n);if(0===t)return gr.createTextNode(r.a);if(4===t){for(var e=r.k,u=r.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:n};return(i=xr(e,a)).elm_event_node_ref=a,i}if(3===t)return Tr(i=r.h(r.g),n,r.d),i;var i=r.f?gr.createElementNS(r.f,r.c):gr.createElement(r.c);hr&&"a"==r.c&&i.addEventListener("click",hr(i)),Tr(i,n,r.d);for(var f=r.e,o=0;o<f.length;o++)$r(i,xr(1===t?f[o]:f[o].b,n));return i}function Tr(r,n,t){for(var e in t){var u=t[e];"a1"===e?_r(r,u):"a0"===e?Nr(r,n,u):"a3"===e?Er(r,u):"a4"===e?Lr(r,u):("value"!==e||"checked"!==e||r[e]!==u)&&(r[e]=u)}}function _r(r,n){var t=r.style;for(var e in n)t[e]=n[e]}function Er(r,n){for(var t in n){var e=n[t];e?r.setAttribute(t,e):r.removeAttribute(t)}}function Lr(r,n){for(var t in n){var e=n[t],u=e.f,a=e.o;a?r.setAttributeNS(u,t,a):r.removeAttributeNS(u,t)}}function Nr(r,n,t){var e=r.elmFs||(r.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}r.removeEventListener(u,i)}i=Cr(n,a),r.addEventListener(u,i,wr&&{passive:_e(a)<2}),e[u]=i}else r.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){wr=!0}}))}catch(r){}function Cr(v,r){function s(r){var n=s.q,t=J(n.a,r);if(Cn(t)){for(var e,u=_e(n),a=t.a,i=u?u<3?a.a:a.M:a,f=1==u?a.b:3==u&&a.br,o=(f&&r.stopPropagation(),(2==u?a.b:3==u&&a.bk)&&r.preventDefault(),v);e=o.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);o=o.p}o(i,f)}}return s.q=r,s}function Or(r,n){return r.$==n.$&&Y(r.a,n.a)}function qr(r,n){var t=[];return zr(r,n,t,0),t}function Mr(r,n,t,e){var u={$:n,r:t,s:e,t:void 0,u:void 0};return r.push(u),u}function zr(r,n,t,e){if(r!==n){var u=r.$,a=n.$;if(u!==a){if(1!==u||2!==a)return void Mr(t,0,e,n);n=function(r){for(var n=r.e,t=n.length,e=Array(t),u=0;u<t;u++)e[u]=n[u].b;return{$:1,c:r.c,d:r.d,e:e,f:r.f,b:r.b}}(n),a=1}switch(a){case 5:for(var i=r.l,f=n.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(n.k=r.k);n.k=n.m();var v=[];return zr(r.k,n.k,v,0),void(0<v.length&&Mr(t,1,e,v));case 4:for(var s=r.j,b=n.j,l=!1,d=r.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=n.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&s.length!==b.length?void Mr(t,0,e,n):((l?function(r,n){for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0}(s,b):s===b)||Mr(t,2,e,b),void zr(d,h,t,e+1));case 0:return void(r.a!==n.a&&Mr(t,3,e,n.a));case 1:return void Br(r,n,t,e,Sr);case 2:return void Br(r,n,t,e,Fr);case 3:if(r.h!==n.h)return void Mr(t,0,e,n);var g=Dr(r.d,n.d);g&&Mr(t,4,e,g);var $=n.i(r.g,n.g);return void($&&Mr(t,5,e,$))}}}function Br(r,n,t,e,u){if(r.c===n.c&&r.f===n.f){var a=Dr(r.d,n.d);a&&Mr(t,4,e,a),u(r,n,t,e)}else Mr(t,0,e,n)}function Dr(r,n,t){var e;for(var u in r)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in n){var a=r[u],i=n[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&Or(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:r[u].f,o:void 0}:"string"==typeof r[u]?"":null;else{var f=Dr(r[u],n[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in n)o in r||((e=e||{})[o]=n[o]);return e}function Sr(r,n,t,e){var u=r.e,a=n.e,i=u.length,f=a.length;f<i?Mr(t,6,e,{v:f,i:i-f}):i<f&&Mr(t,7,e,{v:i,e:a});for(var o=i<f?i:f,c=0;c<o;c++){var v=u[c];zr(v,a[c],t,++e),e+=v.b||0}}function Fr(r,n,t,e){for(var u=[],a={},i=[],f=r.e,o=n.e,c=f.length,v=o.length,s=0,b=0,l=e;s<c&&b<v;){var d=(T=f[s]).a,h=(_=o[b]).a,g=T.b,$=_.b;if(d!==h){var p=f[s+1],m=o[b+1];if(p)var y=p.a,A=p.b,w=h===y;if(m)var k=m.a,j=m.b,x=d===k;if(x&&w)zr(g,j,u,++l),Jr(a,u,d,$,b,i),l+=g.b||0,Qr(a,u,d,A,++l),l+=A.b||0,s+=2,b+=2;else if(x)l++,Jr(a,u,h,$,b,i),zr(g,j,u,l),l+=g.b||0,s+=1,b+=2;else if(w)Qr(a,u,d,g,++l),l+=g.b||0,zr(A,$,u,++l),l+=A.b||0,s+=2,b+=1;else{if(!p||y!==k)break;Qr(a,u,d,g,++l),Jr(a,u,h,$,b,i),l+=g.b||0,zr(A,j,u,++l),l+=A.b||0,s+=2,b+=2}}else zr(g,$,u,++l),l+=g.b||0,s++,b++}for(;s<c;){var T;Qr(a,u,(T=f[s]).a,g=T.b,++l),l+=g.b||0,s++}for(;b<v;){var _,E=E||[];Jr(a,u,(_=o[b]).a,_.b,void 0,E),b++}(0<u.length||0<i.length||E)&&Mr(t,8,e,{w:u,x:i,y:E})}var Ir="_elmW6BL";function Jr(r,n,t,e,u,a){var i=r[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(r[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return zr(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}Jr(r,n,t+Ir,e,u,a)}function Qr(r,n,t,e,u){var a=r[t];if(a){if(0===a.c){a.c=2;var i=[];return zr(e,a.z,i,u),void Mr(n,9,u,{w:i,A:a})}Qr(r,n,t+Ir,e,u)}else{var f=Mr(n,9,u,void 0);r[t]={c:1,z:e,r:u,s:f}}}function Rr(r,n,t,e){!function r(n,t,e,u,a,i,f){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)Rr(n,t.k,o.s,f);else if(8===v){o.t=n,o.u=f;var s=o.s.w;0<s.length&&r(n,t,s,0,a,i,f)}else if(9===v){o.t=n,o.u=f;var b=o.s;if(b){b.A.s=n;var s=b.w;0<s.length&&r(n,t,s,0,a,i,f)}}else o.t=n,o.u=f;if(!(o=e[++u])||(c=o.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return r(n,d,e,u,a+1,i,n.elm_event_node_ref)}var h=t.e;var g=n.childNodes;for(var $=0;$<h.length;$++){var p=1===l?h[$]:h[$].b,m=++a+(p.b||0);if(a<=c&&c<=m&&(u=r(g[$],p,e,u,a,m,f),!(o=e[u])||(c=o.r)>i))return u;a=m}return u}(r,n,t,0,0,n.b,e)}function Vr(r,n,t,e){return 0===t.length?r:(Rr(r,n,t,e),Yr(r,t))}function Yr(r,n){for(var t=0;t<n.length;t++){var e=n[t],u=e.t,a=Pr(u,e);u===r&&(r=a)}return r}function Pr(r,n){switch(n.$){case 0:return function(r,n,t){var e=r.parentNode,u=xr(n,t);u.elm_event_node_ref||(u.elm_event_node_ref=r.elm_event_node_ref);e&&u!==r&&e.replaceChild(u,r);return u}(r,n.s,n.u);case 4:return Tr(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return Yr(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var t=n.s,e=0;e<t.i;e++)r.removeChild(r.childNodes[t.v]);return r;case 7:for(var u=(t=n.s).e,a=r.childNodes[e=t.v];e<u.length;e++)r.insertBefore(xr(u[e],n.u),a);return r;case 9:if(!(t=n.s))return r.parentNode.removeChild(r),r;var i=t.A;return void 0!==i.r&&r.parentNode.removeChild(r),i.s=Yr(r,t.w),r;case 8:return function(r,n){var t=n.s,e=function(r,n){if(!r)return;for(var t=gr.createDocumentFragment(),e=0;e<r.length;e++){var u=r[e],a=u.A;$r(t,2===a.c?a.s:xr(a.z,n.u))}return t}(t.y,n);r=Yr(r,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,o=2===f.c?f.s:xr(f.z,n.u);r.insertBefore(o,r.childNodes[i.r])}e&&$r(r,e);return r}(r,n);case 5:return n.s(r);default:C(10)}}function Hr(r){if(3===r.nodeType)return pr(r.textContent);if(1!==r.nodeType)return pr("");for(var n=b,t=r.attributes,e=t.length;e--;){var u=t[e];n=l(p(Ar,u.name,u.value),n)}var a=r.tagName.toLowerCase(),i=b,f=r.childNodes;for(e=f.length;e--;)i=l(Hr(f[e]),i);return m(mr,a,n,i)}var Ur=e(function(n,r,t,f){return fr(r,f,n.cA,n.c2,n.cY,function(e,r){var u=n.c4,a=f.node,i=Hr(a);return Kr(r,function(r){var n=u(r),t=qr(i,n);a=Vr(a,i,t,e),i=n})})}),Gr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)};function Kr(t,e){e(t);var u=0;function a(){u=1===u?0:(Gr(a),e(t),1)}return function(r,n){t=r,n?(e(t),2===u&&(u=1)):(0===u&&Gr(a),u=2)}}var Wr={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Xr,Zr=t(function(r,n,t){for(;;){if(-2===t.$)return n;var e=t.d,u=r,a=m(r,t.b,t.c,m(Zr,r,n,t.e));r=u,n=a,t=e}}),rn=i,nn=function(r){return m(Zr,t(function(r,n,t){return p(rn,g(r,n),t)}),b,r)},tn=L,en=t(function(t,r,n){var e=n.c,u=n.d,a=f(function(r,n){return m(tn,r.$?t:a,n,r.a)});return m(tn,a,m(tn,t,r,u),e)}),un=function(r){return m(en,rn,b,r)},an=function(r){return r<0?-r:r},fn=f(function(r,n){return 0<v(r,n)?r:n}),on=f(function(r,n){var t=n.a,e=n.b,u=an(t-250);return g(t,e+r*p(fn,-u/(100/150)+150,0)/2*-1)}),cn=e(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),vn=M,sn=f(function(r,n){return D(n)/D(r)}),bn=function(r){return r},ln=vn(p(sn,2,32)),dn=[],hn=y(cn,0,ln,dn,dn),gn=function(r){return{$:1,a:r}},$n=function(r){return{$:0,a:r}},pn=j,mn=t(function(r,n,t){for(;;){if(!t.b)return n;var e=t.b,u=r,a=p(r,t.a,n);r=u,n=a,t=e}}),yn=function(r){return m(mn,rn,b,r)},An=f(function(r,n){for(;;){var t=p(pn,32,r),e=t.b,u=p(rn,$n(t.a),n);if(!e.b)return yn(u);r=e,n=u}}),wn=f(function(r,n){for(;;){var t=vn(n/32);if(1===t)return p(pn,32,r).a;r=p(An,r,b),n=t}}),kn=z,jn=function(r){return r.length},xn=f(function(r,n){if(n.k){var t=32*n.k,e=kn(p(sn,32,t-1)),u=r?yn(n.o):n.o,a=p(wn,u,n.k);return y(cn,jn(n.n)+t,p(fn,5,e*ln),a,n.n)}return y(cn,jn(n.n),ln,dn,n.n)}),Tn=t(function(r,n,t){for(;;){var e=p(pn,32,r),u=e.a,a=e.b;if(v(jn(u),32)<0)return p(xn,!0,{o:n,k:t,n:u});r=a,n=p(rn,gn(u),n),t=t+1}}),_n=function(r){return r>>>5<<5},En=E,Ln=N,Nn=f(function(e,r){var n=r.c,t=r.d,u={o:b,k:0,n:m(Ln,e,_n(r.a),t)},a=f(function(r,n){if(r.$){var t=gn(m(Ln,e,32*n.k,r.a));return{o:p(rn,t,n.o),k:n.k+1,n:n.n}}return m(En,a,n,r.a)});return p(xn,!0,m(En,a,u,n))}),Cn=function(r){return!r.$},On=k,qn=u(function(r,n,t,e,u){for(;;){if(n<0)return p(xn,!1,{o:e,k:t/32|0,n:u});var a=gn(m(On,32,n,r));r=r,n=n-32,t=t,e=p(rn,a,e),u=u}}),Mn=f(function(r,n){if(0<r){var t=r%32;return A(qn,n,r-t-32,r,b,m(On,t,r-t,n))}return hn}),zn=function(r){return{$:0,a:r}},Bn={$:1},Dn=function(r){return{$:1,a:r}},Sn=function(r){return{$:0,a:r}},Fn=f(function(r,n){return{$:3,a:r,b:n}}),In=f(function(r,n){return{$:0,a:r,b:n}}),Jn=f(function(r,n){return{$:1,a:r,b:n}}),Qn=function(r){return{$:2,a:r}},Rn=F,Vn=f(function(r,n){return p(S,r,o(n))}),Yn=br(b),Pn=t(function(r,n,t){var e=t.b;return g(r(t.a),n(e))}),Hn=function(r){return r},Un=f(function(r,n){return{$:0,a:r,b:n}}),Gn=function(r){var n=r.b;return p(Un,1664525*r.a+n>>>0,n)},Kn=function(r){var n=r.a,t=277803737*(n^n>>>4+(n>>>28));return(t>>>22^t)>>>0},Wn=f(function(u,a){return function(r){var n=Gn(r),t=an(a-u),e=Kn(n);return g((134217728*(1*(67108863&Kn(r)))+1*(134217727&e))/9007199254740992*t+u,Gn(n))}}),Xn=e(function(r,n,t,e){for(;;){if(n<1)return g(r,e);var u=t(e),a=u.b;r=p(rn,u.a,r),n=n-1,t=t,e=a}}),Zn=f(function(n,r){var t=r;return function(r){return y(Xn,b,n,t,r)}}),rt=f(function(r,n){return r(n)}),nt=br(b),tt=f(function(r,n){return g($(n,{aA:n.aA+1}),Yn)}),et=function(r){return{$:1,a:r}},ut=f(function(r,n){return{$:3,a:r,b:n}}),at=f(function(n,r){var t=r;return $(t,{Q:function(){var r=t.Q;switch(r.$){case 0:case 1:return et(n);case 2:return p(ut,n,r.a);default:return p(ut,n,r.b)}}()})}),it=t(function(r,n,t){return{$:0,a:r,b:n,c:t}}),ft=t(function(r,n,t){return m(it,r,n,t)}),ot={$:0},ct={aD:Bn,aE:Bn,ap:{aH:Bn,aI:Bn,aJ:Bn,aK:Bn,aL:Bn,aM:Bn},aT:Bn},vt=function(r){return{Q:ot,al:(n=r,{$:1,a:n}),x:ct,av:b};var n},st=f(function(r,n){return H(m(mn,function(t){return f(function(r,n){return n.push(U(t(r))),n})}(r),[],n))}),bt=function(r){return H(m(mn,f(function(r,n){return m(G,r.a,r.b,n)}),{},r))},lt=H,dt=f(function(r,n){return bt(d([g("type",lt("function")),g("name",lt(r)),g("args",p(st,Hn,n))]))}),ht=H,gt=H,$t=a(function(r,n,t,e,u,a){return p(dt,"arc",d([gt(r),gt(n),gt(t),gt(e),gt(u),ht(a)]))}),pt=u(function(r,n,t,e,u){return p(dt,"arcTo",d([gt(r),gt(n),gt(t),gt(e),gt(u)]))}),mt=a(function(r,n,t,e,u,a){return p(dt,"bezierCurveTo",d([gt(r),gt(n),gt(t),gt(e),gt(u),gt(a)]))}),yt=t(function(r,n,t){return w($t,r,n,t,0,6.283185307179586,!1)}),At=f(function(r,n){return p(dt,"lineTo",d([gt(r),gt(n)]))}),wt=f(function(r,n){return p(dt,"moveTo",d([gt(r),gt(n)]))}),kt=e(function(r,n,t,e){return p(dt,"quadraticCurveTo",d([gt(r),gt(n),gt(t),gt(e)]))}),jt=e(function(r,n,t,e){return p(dt,"rect",d([gt(r),gt(n),gt(t),gt(e)]))}),xt=O,Tt=q,_t=f(function(r,n){switch(r.$){case 0:var t=r.a;return p(rn,y(jt,d=t.a,h=t.b,r.b,r.c),p(rn,p(wt,d,h),n));case 1:var e=r.a,u=r.b;return p(rn,m(yt,d=e.a,h=e.b,u),p(rn,p(wt,d+u,h),n));case 2:var a=r.a,i=r.c;return p(rn,w($t,d=a.a,h=a.b,r.b,i,r.d,r.e),p(rn,p(wt,d+xt(i),h+Tt(i)),n));case 3:var f=r.a,o=r.b;return p(rn,A(pt,d=f.a,h=f.b,o.a,o.b,r.c),n);case 4:var c=r.a,v=r.b,s=r.c;return p(rn,w(mt,c.a,c.b,v.a,v.b,d=s.a,h=s.b),n);case 5:var b=r.a;return p(rn,p(At,d=b.a,h=b.b),n);case 6:var l=r.a;return p(rn,p(wt,d=l.a,h=l.b),n);default:var d,h,g=r.a,$=r.b;return p(rn,y(kt,g.a,g.b,d=$.a,h=$.b),n)}}),Et=f(function(r,n){return bt(d([g("type",lt("field")),g("name",lt(r)),g("value",n)]))}),Lt=B,Nt=F,Ct=function(r){var n,t,e=r.b,u=r.c,a=r.d,i=function(r){return Lt(1e4*r)/100};return n=d(["rgba(",Nt(i(r.a)),"%,",Nt(i(e)),"%,",Nt(i(u)),"%,",Nt((t=a,Lt(1e3*t)/1e3)),")"]),p(Vn,"",n)},Ot=function(r){return p(Et,"fillStyle",lt(Ct(r)))},qt=f(function(r,n){return p(rn,p(dt,"fill",d([lt(function(r){return r?"evenodd":"nonzero"}(0))])),p(rn,Ot(r),n))}),Mt=p(dt,"stroke",b),zt=function(r){return p(Et,"strokeStyle",lt(Ct(r)))},Bt=f(function(r,n){return p(rn,Mt,p(rn,zt(r),n))}),Dt=e(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),St=y(Dt,0,0,0,1),Ft=f(function(r,n){switch(r.$){case 0:return p(qt,St,n);case 1:return p(qt,r.a,n);case 2:return p(Bt,r.a,n);default:return p(Bt,r.b,p(qt,r.a,n))}}),It=e(function(r,n,t,e){if(1===e.$)return p(dt,"fillText",d([lt(r),gt(n),gt(t)]));var u=e.a;return p(dt,"fillText",d([lt(r),gt(n),gt(t),gt(u)]))}),Jt=u(function(r,n,t,e,u){return p(rn,y(It,r.bs,n,t,r.x.aq),p(rn,Ot(e),u))}),Qt=e(function(r,n,t,e){if(1===e.$)return p(dt,"strokeText",d([lt(r),gt(n),gt(t)]));var u=e.a;return p(dt,"strokeText",d([lt(r),gt(n),gt(t),gt(u)]))}),Rt=u(function(r,n,t,e,u){return p(rn,y(Qt,r.bs,n,t,r.x.aq),p(rn,zt(e),u))}),Vt=t(function(r,n,t){var e=n,u=e.bV,a=u.a,i=u.b;switch(r.$){case 0:return A(Jt,e,a,i,St,t);case 1:return A(Jt,e,a,i,r.a,t);case 2:return A(Rt,e,a,i,r.a,t);default:return A(Rt,e,a,i,r.b,A(Jt,e,a,i,r.a,t))}}),Yt=f(function(r,n){return n.$?Bn:zn(r(n.a))}),Pt=f(function(r,n){return n.$?r:n.a}),Ht=t(function(r,n,t){return p(Pt,t,p(Yt,function(r){return n(r)},r))}),Ut=t(function(r,n,t){return m(Ht,r,function(r){return p(rn,n(r),t)},t)}),Gt=function(r){switch(r){case 0:return"left";case 1:return"right";case 2:return"center";case 3:return"start";default:return"end"}},Kt=function(r){switch(r){case 0:return"top";case 1:return"hanging";case 2:return"middle";case 3:return"alphabetic";case 4:return"ideographic";default:return"bottom"}},Wt=function(r){return p(Et,"font",lt(r))},Xt=function(r){return p(Et,"textAlign",lt(r))},Zt=function(r){return p(Et,"textBaseline",lt(r))},re=t(function(r,n,t){return r(n(t))}),ne=f(function(n,r){var t=f(function(r,n){return Rn(r)+"px "+n}),e=function(){var r=g(n.aU,n.aC);if(r.a.$){if(r.b.$){return Bn}return zn(p(t,20,r.b.a))}if(r.b.$){return zn(p(t,r.a.a,"sans-serif"))}return zn(p(t,r.a.a,r.b.a))}();return m(Ut,n.az,p(re,Zt,Kt),m(Ut,n.ay,p(re,Xt,Gt),m(Ut,e,Wt,r)))}),te=t(function(r,n,t){return m(Vt,r,n,p(ne,n.x,t))}),ee=p(dt,"beginPath",b),ue=t(function(r,n,t){if(r.$){var e=r.a;return p(Ft,n,m(mn,_t,p(rn,ee,t),e))}return m(te,n,r.a,t)}),ae=function(r){switch(r){case 0:return"source-over";case 1:return"source-in";case 2:return"source-out";case 3:return"source-atop";case 4:return"destination-over";case 5:return"destination-in";case 6:return"destination-out";case 7:return"destination-atop";case 8:return"lighter";case 9:return"copy";case 10:return"xor";case 11:return"multiply";case 12:return"screen";case 13:return"overlay";case 14:return"darken";case 15:return"lighten";case 16:return"color-dodge";case 17:return"color-burn";case 18:return"hard-light";case 19:return"soft-light";case 20:return"difference";case 21:return"exclusion";case 22:return"hue";case 23:return"saturation";case 24:return"color";default:return"luminosity"}},ie=function(r){switch(r){case 0:return"butt";case 1:return"round";default:return"square"}},fe=function(r){switch(r){case 0:return"bevel";case 1:return"round";default:return"miter"}},oe=function(r){return p(Et,"lineCap",lt(r))},ce=function(r){return p(Et,"lineDashOffset",gt(r))},ve=function(r){return p(Et,"lineJoin",lt(r))},se=function(r){return p(Et,"lineWidth",gt(r))},be=function(r){return p(Et,"miterLimit",gt(r))},le=function(r){return p(dt,"setLineDash",d([p(st,gt,r)]))},de=f(function(r,n){return m(Ut,r.aI,le,m(Ut,r.aM,be,m(Ut,r.aL,se,m(Ut,r.aK,p(re,ve,fe),m(Ut,r.aJ,ce,m(Ut,r.aH,p(re,oe,ie),n))))))}),he=f(function(r,n){var t=r.by,e=r.bO,u=e.a,a=e.b;return p(rn,p(Et,"shadowBlur",gt(r.bw)),p(rn,function(r){return p(Et,"shadowColor",lt(Ct(r)))}(t),p(rn,function(r){return p(Et,"shadowOffsetX",gt(r))}(u),p(rn,function(r){return p(Et,"shadowOffsetY",gt(r))}(a),n))))}),ge=function(r){return p(Et,"globalAlpha",gt(r))},$e=function(r){return p(Et,"globalCompositeOperation",lt(r))},pe=f(function(r,n){return p(de,r.ap,m(Ut,r.aE,p(re,$e,ae),m(Ut,r.aD,ge,m(Ht,r.aT,function(r){return p(he,r,n)},n))))}),me=f(function(r,n){return p(dt,"scale",d([gt(r),gt(n)]))}),ye=a(function(r,n,t,e,u,a){return p(dt,"transform",d([gt(r),gt(n),gt(t),gt(e),gt(u),gt(a)]))}),Ae=f(function(r,n){return p(dt,"translate",d([gt(r),gt(n)]))}),we=f(function(r,n){return m(mn,f(function(r,n){return p(rn,function(){switch(r.$){case 0:return function(r){return p(dt,"rotate",d([gt(r)]))}(r.a);case 1:return p(me,r.a,r.b);case 2:return p(Ae,r.a,r.b);default:return w(ye,r.a,r.b,r.c,r.d,r.e,r.f)}}(),n)}),n,r)}),ke=p(dt,"restore",b),je=p(dt,"save",b),xe=f(function(r,n){return p(rn,ke,m(ue,r.al,r.Q,p(we,r.av,p(pe,r.x,p(rn,je,n)))))}),Te=b,_e=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Ee=f(function(r,n){return p(yr,function(r){return"innerHTML"==r||"formAction"==r?"data-"+r:r}(r),function(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}(n))}),Le=mr("canvas"),Ne=function(r){return mr(function(r){return"script"==r?"p":r}(r))},Ce=t(function(r,n,t){var e,u,a=r.a,i=r.b;return m(Ne,"elm-canvas",d([(u=function(r){return m(mn,xe,Te,r)}(t),p(Ee,"cmds",p(st,Hn,u)))]),d([p(Le,p(rn,(e=i,p(Ar,"height",Rn(e))),p(rn,function(r){return p(Ar,"width",Rn(r))}(a),n)),b)]))}),Oe=e(function(r,n,t,e){var u=function(r,n,t){return{a:r,b:n,c:t}}(r,n,t),a=u.a,i=u.b,f=u.c,o=.5<f?f+i-f*i:f*(i+1),c=2*f-o,v=function(r){var n=r<0?r+1:1<r?r-1:r;return 6*n<1?c+(o-c)*n*6:2*n<1?o:3*n<2?c+(o-c)*(2/3-n)*6:c},s=v(a-1/3),b=v(a),l=v(a+1/3);return y(Dt,l,b,s,e)}),qe=t(function(r,n,t){return y(Oe,r,n,t,1)}),Me=function(r){return 3.141592653589793*r/180},ze=m(qe,Me(260),.1,.1),Be=f(function(r,n){var t=n.x;return $(n,{x:$(t,{ap:r(t.ap)})})}),De=f(function(n,r){return p(Be,function(r){return $(r,{aL:zn(n)})},r)}),Se=f(function(r,n){return{$:7,a:r,b:n}}),Fe=f(function(r,n){return p(Se,r,n)}),Ie=function(r){return{$:2,a:r}},Je=f(function(n,r){var t=r;return $(t,{Q:function(){var r=t.Q;switch(r.$){case 0:return Ie(n);case 1:return p(ut,r.a,n);case 2:return Ie(n);default:return p(ut,r.a,n)}}()})}),Qe=f(function(r,n){return v(r,30)<0&&v(n,60)<0?30*n+r:-1}),Re=4294967295>>>32-ln,Ve=x,Ye=t(function(r,n,t){for(;;){var e=p(Ve,Re&n>>>r,t);if(e.$)return p(Ve,Re&n,e.a);r=r-ln,n=n,t=e.a}}),Pe=f(function(r,n){var t=n.a,e=n.b,u=n.c,a=n.d;return r<0||-1<v(r,t)?Bn:-1<v(r,_n(t))?zn(p(Ve,Re&r,a)):zn(m(Ye,e,r,u))}),He=_,Ue=function(r){return[r]},Ge=T,Ke=e(function(r,n,t,e){var u=Re&n>>>r;if(-1<v(u,jn(e))){if(5===r)return p(He,gn(t),e);var a=$n(y(Ke,r-ln,n,t,dn));return p(He,a,e)}var i=p(Ve,u,e);if(i.$){a=$n(y(Ke,r-ln,n,t,Ue(i)));return m(Ge,u,a,e)}var a=$n(y(Ke,r-ln,n,t,i.a));return m(Ge,u,a,e)}),We=f(function(r,n){var t=n.a,e=n.b,u=n.c,a=jn(n.d),i=jn(r),f=t+(i-a);if(h(i,32)){if(0<v(f>>>ln,1<<e)){var o=e+ln,c=y(Ke,o,t,r,Ue($n(u)));return y(cn,f,o,c,dn)}return y(cn,f,e,y(Ke,e,t,r,u),dn)}return y(cn,f,e,u,r)}),Xe=f(function(r,n){return p(We,p(He,r,n.d),n)}),Ze=t(function(u,r,n){var a=r.a,i=r.b,t=n.a,e=n.b,f=p(Pt,{bV:g(0,0),bm:0},p(Pe,p(Qe,a,i),u)).bV,o=f.a,c=f.b,v=function(){if(a){var r=p(Pt,{bV:g(o+10,c),bm:0},p(Pe,p(Qe,a+1,i),u)).bV,n=g((o+r.a)/2,(c+r.b)/2),t=n.a,e=n.b;return p(Fe,g(o,c),g(t,e))}return{$:6,a:g(o,c)}}();if(h(a,29)){var s=p(Je,m(qe,Me(188),.3,.8),p(at,ze,p(De,1.5,vt(un(p(Xe,v,t))))));return g(hn,p(Xe,s,e))}return g(p(Xe,v,t),e)}),ru=t(function(r,i,n){var f=r.cU,o=r.cg;return m(t(function(r,n,t){for(;;){if(-1<v(n,f))return t;if(v(r,o)>-1){r=e=0,n=u=n+1,t=a=t}else{var e=r+1,u=n,a=p(i,g(r,n),t);r=e,n=u,t=a}}}),0,0,n)}),nu=K,tu=nu(0),eu=e(function(r,n,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,f=a.b;if(f.b){var o=f.a,c=f.b;if(c.b){var v=c.b;return p(r,u,p(r,i,p(r,o,p(r,c.a,500<t?m(mn,r,n,yn(v)):y(eu,r,n,t+1,v)))))}return p(r,u,p(r,i,p(r,o,n)))}return p(r,u,p(r,i,n))}return p(r,u,n)}return n}),uu=t(function(r,n,t){return y(eu,r,n,0,t)}),au=f(function(t,r){return m(uu,f(function(r,n){return p(rn,t(r),n)}),b,r)}),iu=X,fu=f(function(n,r){return p(iu,function(r){return nu(n(r))},r)}),ou=t(function(t,r,e){return p(iu,function(n){return p(iu,function(r){return nu(p(t,n,r))},e)},r)}),cu=vr,vu=f(function(r,n){var t=n;return nr(p(iu,cu(r),t))});or.Task={b:tu,c:t(function(r,n){return p(fu,function(){return 0},(t=p(au,vu(r),n),m(uu,ou(rn),nu(b),t)));var t}),d:t(function(){return nu(0)}),e:f(function(r,n){return p(fu,r,n)}),f:Xr};sr("Task");var su,bu={$:4},lu=Ur({cA:function(r){var n,t=f(function(r,n){return{bV:p(on,n,(t=m(Pn,bn,bn,function(r){return g(r%30,r/30|0)}(r)),g(10*t.a+5+100,5*t.b+2.5+130))),bm:n};var t}),e=p(rt,p(Zn,1800,p(Wn,0,1)),function(r){var n=Gn(p(Un,0,1013904223));return Gn(p(Un,n.a+r>>>0,n.b))}(kn(1e5*r)));return g({aA:0,bj:p(Nn,t,(n=e.a).b?m(Tn,n,b,0):hn)},Yn)},cY:function(){return nt},c2:tt,c4:function(r){return m(Ce,g(500,500),b,p(rn,p(at,ze,vt(d([m(ft,g(0,0),500,500)]))),un(m(ru,{cg:30,cU:60},Ze(r.bj),g(hn,hn)).b)))}});su={Examples:{JoyDivision:{init:lu(bu)(0)}}},r.Elm?function r(n,t){for(var e in t)e in n?"init"==e?C(6):r(n[e],t[e]):n[e]=t[e]}(r.Elm,su):r.Elm=su}(this);